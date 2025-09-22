/**
 * Storage Provider Interface
 *
 * Defines a common interface for different storage backends.
 * This allows switching between file-based, memory-based, or other storage systems.
 */

export interface StorageProvider {
  /**
   * Get a value by key
   */
  get<T = any>(key: string): Promise<T | null>;

  /**
   * Set a value for a key
   */
  set<T = any>(key: string, value: T): Promise<void>;

  /**
   * Delete a key
   */
  delete(key: string): Promise<void>;

  /**
   * Check if a key exists
   */
  exists(key: string): Promise<boolean>;

  /**
   * Get all keys matching a pattern (optional, for advanced queries)
   */
  keys?(pattern?: string): Promise<string[]>;

  /**
   * Clear all data
   */
  clear(): Promise<void>;

  /**
   * Get all data as an object (useful for debugging/export)
   */
  getAll?(): Promise<Record<string, any>>;

  /**
   * Set multiple key-value pairs at once (atomic operation)
   */
  setMany?(data: Record<string, any>): Promise<void>;

  /**
   * Close/cleanup the storage provider
   */
  close?(): Promise<void>;

  /**
   * Health check for the storage provider
   */
  healthCheck?(): Promise<{ healthy: boolean; details?: any }>;
}

/**
 * Storage Provider Configuration
 */
export interface StorageProviderConfig {
  /**
   * Storage file path (for file-based providers)
   */
  filePath?: string;

  /**
   * Enable encryption for sensitive data
   */
  encrypt?: boolean;

  /**
   * Encryption key for sensitive data
   */
  encryptionKey?: string;

  /**
   * Auto-save changes immediately (vs batched writes)
   */
  autoSave?: boolean;

  /**
   * Create backup files
   */
  createBackups?: boolean;

  /**
   * Pretty print JSON (for debugging)
   */
  prettyPrint?: boolean;
}