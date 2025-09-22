import { promises as fs } from 'fs';
import * as path from 'path';
import crypto, { createCipheriv, createDecipheriv } from 'crypto';
import { createModuleLogger } from '../utils/logger';
import type { StorageProvider, StorageProviderConfig } from './StorageProvider';
import { getGlobalConfigPath } from '../utils/configPaths';
import { env } from '../utils/env';

const logger = createModuleLogger('FileStorageProvider');

/**
 * File-based storage provider using JSON files
 */
export class FileStorageProvider implements StorageProvider {
  private filePath: string;
  private encryptionKey?: string;
  private encrypt: boolean;
  private autoSave: boolean;
  private createBackups: boolean;
  private prettyPrint: boolean;

  // In-memory cache to avoid frequent file reads
  private cache: Record<string, any> = {};
  private cacheLoaded = false;
  private writing = false;

  constructor(config: StorageProviderConfig = {}) {
    this.filePath =
      config.filePath || getGlobalConfigPath('mcp.json');
    this.encrypt = config.encrypt || false;
    this.encryptionKey = config.encryptionKey || env.SECRET_KEY;
    this.autoSave = config.autoSave !== false; // Default true
    this.createBackups = config.createBackups || false;
    this.prettyPrint = config.prettyPrint || false;

    // Ensure data directory exists
    this.ensureDirectoryExists();
  }

  private async ensureDirectoryExists(): Promise<void> {
    const dir = path.dirname(this.filePath);
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (error) {
      if ((error as any).code !== 'EEXIST') {
        logger.error('Failed to create storage directory', { dir, error });
        throw error;
      }
    }
  }

  /**
   * Load data from file into cache
   */
  private async loadCache(): Promise<void> {
    if (this.cacheLoaded) return;

    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      this.cache = JSON.parse(data) || {};
      this.cacheLoaded = true;
      logger.debug('Cache loaded from file', {
        filePath: this.filePath,
        keys: Object.keys(this.cache).length,
      });
    } catch (error) {
      if ((error as any).code === 'ENOENT') {
        // File doesn't exist yet, start with empty cache
        this.cache = {};
        this.cacheLoaded = true;
        logger.debug('Storage file not found, starting with empty cache', {
          filePath: this.filePath,
        });
      } else {
        logger.error('Failed to load storage file', {
          filePath: this.filePath,
          error,
        });
        throw error;
      }
    }
  }

  /**
   * Save cache to file
   */
  private async saveCache(): Promise<void> {
    if (this.writing) {
      logger.debug('Write operation in progress, skipping save');
      return;
    }

    this.writing = true;
    try {
      // Create backup if enabled
      if (this.createBackups) {
        await this.createBackup();
      }

      // Write to temporary file first, then rename (atomic operation)
      const tempFile = `${this.filePath}.tmp`;
      const jsonData = this.prettyPrint
        ? JSON.stringify(this.cache, null, 2)
        : JSON.stringify(this.cache);

      await fs.writeFile(tempFile, jsonData, 'utf-8');
      await fs.rename(tempFile, this.filePath);

      logger.debug('Cache saved to file', {
        filePath: this.filePath,
        keys: Object.keys(this.cache).length,
      });
    } catch (error) {
      logger.error('Failed to save storage file', {
        filePath: this.filePath,
        error,
      });
      throw error;
    } finally {
      this.writing = false;
    }
  }

  /**
   * Create backup file
   */
  private async createBackup(): Promise<void> {
    try {
      const backupPath = `${this.filePath}.backup.${Date.now()}`;
      await fs.copyFile(this.filePath, backupPath);
      logger.debug('Backup created', { backupPath });
    } catch (error) {
      if ((error as any).code !== 'ENOENT') {
        logger.warn('Failed to create backup', { error });
      }
    }
  }

  /**
   * Encrypt sensitive data
   */
  private encryptValue(value: string): string {
    if (!this.encrypt || !this.encryptionKey) return value;

    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(this.encryptionKey, 'salt', 32);
    const cipher = createCipheriv('aes-256-cbc', key, iv);

    let encrypted = cipher.update(value, 'utf-8', 'hex');
    encrypted += cipher.final('hex');

    return `${iv.toString('hex')}:${encrypted}`;
  }

  /**
   * Decrypt sensitive data
   */
  private decryptValue(encryptedValue: string): string {
    if (!this.encrypt || !this.encryptionKey) return encryptedValue;

    try {
      const [ivHex, encryptedData] = encryptedValue.split(':');
      const iv = Buffer.from(ivHex, 'hex');
      const key = crypto.scryptSync(this.encryptionKey, 'salt', 32);
      const decipher = createDecipheriv('aes-256-cbc', key, iv);

      let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
      decrypted += decipher.final('utf-8');

      return decrypted;
    } catch (error) {
      logger.error('Failed to decrypt value', { error });
      return encryptedValue; // Return as-is if decryption fails
    }
  }

  /**
   * Check if a key contains sensitive data that should be encrypted
   */
  private isSensitiveKey(key: string): boolean {
    const sensitiveKeywords = [
      'password',
      'secret',
      'key',
      'token',
      'credential',
    ];
    return sensitiveKeywords.some((keyword) =>
      key.toLowerCase().includes(keyword)
    );
  }

  async get<T = any>(key: string): Promise<T | null> {
    await this.loadCache();

    const value = this.cache[key];
    if (value === undefined) return null;

    // Decrypt sensitive data
    if (typeof value === 'string' && this.isSensitiveKey(key)) {
      return this.decryptValue(value) as T;
    }

    return value;
  }

  async set<T = any>(key: string, value: T): Promise<void> {
    await this.loadCache();

    // Encrypt sensitive data
    let processedValue: any = value;
    if (typeof value === 'string' && this.isSensitiveKey(key)) {
      processedValue = this.encryptValue(value);
    }

    this.cache[key] = processedValue;

    if (this.autoSave) {
      await this.saveCache();
    }
  }

  async delete(key: string): Promise<void> {
    await this.loadCache();

    delete this.cache[key];

    if (this.autoSave) {
      await this.saveCache();
    }
  }

  async exists(key: string): Promise<boolean> {
    await this.loadCache();
    return key in this.cache;
  }

  async keys(pattern?: string): Promise<string[]> {
    await this.loadCache();

    const allKeys = Object.keys(this.cache);

    if (!pattern) return allKeys;

    // Simple pattern matching - convert * to regex
    const regexPattern = pattern.replace(/\*/g, '.*');
    const regex = new RegExp(`^${regexPattern}$`);

    return allKeys.filter((key) => regex.test(key));
  }

  async clear(): Promise<void> {
    this.cache = {};
    this.cacheLoaded = true;

    if (this.autoSave) {
      await this.saveCache();
    }
  }

  async getAll(): Promise<Record<string, any>> {
    await this.loadCache();

    // Return copy to prevent external modifications
    const result: Record<string, any> = {};

    for (const [key, value] of Object.entries(this.cache)) {
      // Decrypt sensitive values for the getAll operation
      if (typeof value === 'string' && this.isSensitiveKey(key)) {
        result[key] = this.decryptValue(value);
      } else {
        result[key] = value;
      }
    }

    return result;
  }

  async setMany(data: Record<string, any>): Promise<void> {
    await this.loadCache();

    for (const [key, value] of Object.entries(data)) {
      let processedValue = value;

      // Encrypt sensitive data
      if (typeof value === 'string' && this.isSensitiveKey(key)) {
        processedValue = this.encryptValue(value);
      }

      this.cache[key] = processedValue;
    }

    if (this.autoSave) {
      await this.saveCache();
    }
  }

  /**
   * Force save cache to file (useful when autoSave is false)
   */
  async flush(): Promise<void> {
    await this.saveCache();
  }

  async close(): Promise<void> {
    // Ensure any pending writes are completed
    if (!this.autoSave && this.cacheLoaded) {
      await this.saveCache();
    }

    // Clear cache
    this.cache = {};
    this.cacheLoaded = false;

    logger.debug('FileStorageProvider closed');
  }

  async healthCheck(): Promise<{ healthy: boolean; details?: any }> {
    try {
      // Test read access
      await this.loadCache();

      // Test write access
      const testKey = '__health_check__';
      const testValue = Date.now().toString();

      await this.set(testKey, testValue);
      const retrieved = await this.get(testKey);
      await this.delete(testKey);

      const healthy = retrieved === testValue;

      return {
        healthy,
        details: {
          filePath: this.filePath,
          cacheLoaded: this.cacheLoaded,
          keyCount: Object.keys(this.cache).length,
          encryptionEnabled: this.encrypt,
          autoSaveEnabled: this.autoSave,
          backupsEnabled: this.createBackups,
        },
      };
    } catch (error) {
      return {
        healthy: false,
        details: {
          filePath: this.filePath,
          error: error instanceof Error ? error.message : String(error),
        },
      };
    }
  }
}
