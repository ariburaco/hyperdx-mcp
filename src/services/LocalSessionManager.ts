import { createModuleLogger } from '../utils/logger';
import { FileStorageProvider } from '../storage/FileStorageProvider';
import type { StorageProvider } from '../storage/StorageProvider';
import crypto from 'crypto';
import { getGlobalConfigPath } from '../utils/configPaths';

const logger = createModuleLogger('LocalSessionManager');

export interface StoredCredentials {
  email: string;
  encryptedPassword: string;
  createdAt: string;
  lastLoginAt?: string;
}

export interface StoredSession {
  cookies: any[];
  lastActivity: string;
  isValid: boolean;
}

/**
 * Local file-based session manager
 * Replaces the Redis-based SessionManager with file storage
 */
export class LocalSessionManager {
  private storage: StorageProvider;
  private encryptionKey: string;
  private readonly CREDENTIALS_KEY = 'mcp:credentials';
  private readonly SESSION_KEY = 'mcp:session';

  constructor(storagePath?: string) {
    const defaultPath = getGlobalConfigPath('mcp.json');

    this.storage = new FileStorageProvider({
      filePath: storagePath || defaultPath,
      encrypt: true,
      encryptionKey: this.generateEncryptionKey(),
      autoSave: true,
      createBackups: true,
      prettyPrint: true, // For debugging
    });

    this.encryptionKey = this.generateEncryptionKey();

    logger.info('LocalSessionManager initialized with global file storage', {
      storagePath: storagePath || defaultPath,
    });
  }

  private generateEncryptionKey(): string {
    // Use environment variable or generate a consistent key
    const envKey = process.env.STORAGE_ENCRYPTION_KEY || process.env.SECRET_KEY;
    if (envKey) return envKey;

    // Generate a key based on system info (consistent across runs)
    const machineInfo = `${process.platform}-${process.arch}-${process.env.USER || 'unknown'}`;
    return crypto.createHash('sha256').update(machineInfo).digest('hex');
  }

  private encrypt(text: string): string {
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(this.encryptionKey, 'salt', 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
  }

  private decrypt(encryptedText: string): string {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift()!, 'hex');
    const encryptedData = textParts.join(':');
    const key = crypto.scryptSync(this.encryptionKey, 'salt', 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  // Single-user credential management
  async saveCredentials(email: string, password: string): Promise<void> {
    const credentials: StoredCredentials = {
      email,
      encryptedPassword: this.encrypt(password),
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    };

    await this.storage.set(this.CREDENTIALS_KEY, credentials);
    logger.info('Credentials saved permanently', { email });
  }

  async getCredentials(): Promise<{ email: string; password: string } | null> {
    const credentialsData = await this.storage.get<StoredCredentials>(
      this.CREDENTIALS_KEY
    );
    if (!credentialsData) {
      return null;
    }

    return {
      email: credentialsData.email,
      password: this.decrypt(credentialsData.encryptedPassword),
    };
  }

  async hasStoredCredentials(): Promise<boolean> {
    return await this.storage.exists(this.CREDENTIALS_KEY);
  }

  async updateLastLogin(): Promise<void> {
    const existing = await this.storage.get<StoredCredentials>(
      this.CREDENTIALS_KEY
    );
    if (existing) {
      existing.lastLoginAt = new Date().toISOString();
      await this.storage.set(this.CREDENTIALS_KEY, existing);
    }
  }

  async clearCredentials(): Promise<void> {
    await this.storage.delete(this.CREDENTIALS_KEY);
    logger.info('Stored credentials cleared');
  }

  // Single-user session management
  async saveSession(cookies: any[], isValid: boolean = true): Promise<void> {
    const session: StoredSession = {
      cookies,
      lastActivity: new Date().toISOString(),
      isValid,
    };

    await this.storage.set(this.SESSION_KEY, session);
    logger.debug('Session saved', { cookieCount: cookies.length, isValid });
  }

  async getSession(): Promise<StoredSession | null> {
    return await this.storage.get<StoredSession>(this.SESSION_KEY);
  }

  async markSessionValid(): Promise<void> {
    const existing = await this.storage.get<StoredSession>(this.SESSION_KEY);
    if (existing) {
      existing.isValid = true;
      existing.lastActivity = new Date().toISOString();
      await this.storage.set(this.SESSION_KEY, existing);
    }
    logger.debug('Session marked as valid');
  }

  async markSessionInvalid(): Promise<void> {
    const existing = await this.storage.get<StoredSession>(this.SESSION_KEY);
    if (existing) {
      existing.isValid = false;
      await this.storage.set(this.SESSION_KEY, existing);
    }
    logger.debug('Session marked as invalid');
  }

  async clearSession(): Promise<void> {
    await this.storage.delete(this.SESSION_KEY);
    logger.info('Session cleared');
  }

  // Cookie management (simplified for single-user)
  async saveCookies(cookies: any[]): Promise<void> {
    await this.saveSession(cookies, true);
  }

  async getCookies(): Promise<any[]> {
    const session = await this.getSession();
    return session?.cookies || [];
  }

  async clearCookies(): Promise<void> {
    await this.clearSession();
  }

  // Single-user session state
  async isSessionValid(): Promise<boolean> {
    const session = await this.getSession();
    return session?.isValid || false;
  }

  // Cleanup and maintenance
  async clearAll(): Promise<void> {
    await this.clearCredentials();
    await this.clearSession();
    logger.info('All stored data cleared');
  }

  async disconnect(): Promise<void> {
    if (this.storage.close) {
      await this.storage.close();
    }
    logger.info('LocalSessionManager disconnected');
  }

  // Health check
  async healthCheck(): Promise<{
    status: 'healthy' | 'unhealthy';
    details: any;
  }> {
    try {
      const storageHealth = this.storage.healthCheck
        ? await this.storage.healthCheck()
        : { healthy: true };

      if (!storageHealth.healthy) {
        return {
          status: 'unhealthy',
          details: {
            storage: storageHealth,
            error: 'Storage provider is unhealthy',
          },
        };
      }

      const hasCredentials = await this.hasStoredCredentials();
      const hasSession = (await this.getSession()) !== null;
      const sessionValid = await this.isSessionValid();

      return {
        status: 'healthy',
        details: {
          storage: storageHealth,
          hasStoredCredentials: hasCredentials,
          hasStoredSession: hasSession,
          sessionValid,
          uptime: process.uptime(),
        },
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        details: {
          error: error instanceof Error ? error.message : String(error),
        },
      };
    }
  }

  // Export/Import functionality for migration or backup
  async exportData(): Promise<Record<string, any>> {
    if (this.storage.getAll) {
      return await this.storage.getAll();
    }

    // Fallback: manually get all known keys
    const data: Record<string, any> = {};
    if (await this.storage.exists(this.CREDENTIALS_KEY)) {
      data[this.CREDENTIALS_KEY] = await this.storage.get(this.CREDENTIALS_KEY);
    }
    if (await this.storage.exists(this.SESSION_KEY)) {
      data[this.SESSION_KEY] = await this.storage.get(this.SESSION_KEY);
    }

    return data;
  }

  async importData(data: Record<string, any>): Promise<void> {
    if (this.storage.setMany) {
      await this.storage.setMany(data);
    } else {
      // Fallback: set keys individually
      for (const [key, value] of Object.entries(data)) {
        await this.storage.set(key, value);
      }
    }

    logger.info('Data imported successfully', {
      keys: Object.keys(data).length,
    });
  }
}

// Singleton instance factory
let localSessionManager: LocalSessionManager | null = null;

export const getLocalSessionManager = (
  storagePath?: string
): LocalSessionManager => {
  if (!localSessionManager) {
    localSessionManager = new LocalSessionManager(storagePath);
  }
  return localSessionManager;
};

// For backward compatibility with existing code
export const getSessionManager = getLocalSessionManager;
