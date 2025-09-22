import { z } from 'zod';

// Helper to coerce string to number with fallback
const numericString = (defaultValue: number) =>
  z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) || defaultValue : defaultValue));

// Helper to coerce string to boolean with fallback
const booleanString = (defaultValue: boolean) =>
  z
    .string()
    .optional()
    .transform((val) => (val === undefined ? defaultValue : val === 'true'));

// Environment schema validation
const envSchema = z.object({
  // Server configuration
  PORT: numericString(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  // Browser Configuration
  BROWSER_HEADLESS: booleanString(true),
  BROWSER_SLOWMO: numericString(100),
  BROWSER_TIMEOUT: numericString(30000),
  USE_EXISTING_BROWSER: booleanString(false),
  CHROME_DEBUG_URL: z.string().default('http://localhost:9222'),

  // Logging
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
  LOG_FILE_ENABLED: booleanString(true),
  LOG_CONSOLE_ENABLED: booleanString(true),

  // MCP Server Template Configuration
  MCP_SERVER_TEMPLATE_CONFIG_DIR: z.string().optional(),

  // Upload Configuration
  MAX_CONCURRENT_UPLOADS: numericString(2),
  UPLOAD_TIMEOUT: numericString(300000),
  RETRY_ATTEMPTS: numericString(3),
  RETRY_DELAY: numericString(5000),

  // Security
  ENCRYPT_CREDENTIALS: booleanString(true),
  SECRET_KEY: z.string().optional(),

  // File Processing
  MAX_FILE_SIZE: z.string().default('50MB'),
  SUPPORTED_FORMATS: z.string().default('png,jpg,jpeg,gif'),
  THUMBNAIL_SIZE: numericString(300),

  // Storage
  STORAGE_PATH: z.string().default('./data/session.json'),
});

// Validate environment variables
function validateEnv() {
  try {
    const parsed = envSchema.parse(process.env);
    return parsed;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Environment validation failed:');
      error.issues.forEach((err) => {
        console.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
      console.error('\nPlease check your .env file and fix the above issues.');
      process.exit(1);
    }
    throw error;
  }
}

// Export validated environment variables
export const env = validateEnv();

// Type for the validated environment
export type Env = z.infer<typeof envSchema>;

// Helper functions to check environment
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';

// Derived configuration helpers
export const getSupportedFormats = () =>
  env.SUPPORTED_FORMATS.split(',').map((s) => s.trim());

export const getLogConfig = () => ({
  level: env.LOG_LEVEL,
  fileEnabled: env.LOG_FILE_ENABLED,
  consoleEnabled: env.LOG_CONSOLE_ENABLED,
});

export const getBrowserConfig = () => ({
  headless: env.BROWSER_HEADLESS,
  slowMo: env.BROWSER_SLOWMO,
  timeout: env.BROWSER_TIMEOUT,
  useExistingBrowser: env.USE_EXISTING_BROWSER,
  chromeDebugUrl: env.CHROME_DEBUG_URL,
});

export const getStorageConfig = () => ({
  storagePath: env.STORAGE_PATH,
});

export const getUploadConfig = () => ({
  maxConcurrent: env.MAX_CONCURRENT_UPLOADS,
  timeout: env.UPLOAD_TIMEOUT,
  retryAttempts: env.RETRY_ATTEMPTS,
  retryDelay: env.RETRY_DELAY,
});

export const getSecurityConfig = () => ({
  encryptCredentials: env.ENCRYPT_CREDENTIALS,
  secretKey: env.SECRET_KEY,
});
