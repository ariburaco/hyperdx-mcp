import * as os from 'os';
import * as path from 'path';
import { createModuleLogger } from './logger';
import { env } from './env';

const logger = createModuleLogger('ConfigPaths');

/**
 * Get the global configuration directory following OS conventions
 */
export function getGlobalConfigDir(): string {
  const platform = process.platform;
  const homeDir = os.homedir();

  let configDir: string;

  if (platform === 'darwin') {
    // macOS - use ~/.config following modern convention
    configDir = path.join(homeDir, '.config', 'mcp-server-template');
  } else if (platform === 'win32') {
    // Windows - use APPDATA
    const appData = process.env.APPDATA || path.join(homeDir, 'AppData', 'Roaming');
    configDir = path.join(appData, 'mcp-server-template');
  } else {
    // Linux and other Unix-like systems - use XDG Base Directory spec
    const xdgConfig = process.env.XDG_CONFIG_HOME || path.join(homeDir, '.config');
    configDir = path.join(xdgConfig, 'mcp-server-template');
  }

  // Allow environment variable override
  const envOverride = env.MCP_SERVER_TEMPLATE_CONFIG_DIR;
  if (envOverride) {
    configDir = path.resolve(envOverride);
    logger.debug('Using custom config directory from environment', { configDir });
  }

  return configDir;
}

/**
 * Get the full path for a specific config file
 */
export function getGlobalConfigPath(filename: string): string {
  return path.join(getGlobalConfigDir(), filename);
}

/**
 * Get default config file paths
 */
export const getConfigPaths = () => ({
  session: getGlobalConfigPath('session.json'),
  credentials: getGlobalConfigPath('credentials.json'),
  config: getGlobalConfigPath('config.json'),
  logs: getGlobalConfigPath('logs'),
});

/**
 * Get the legacy (local) config paths for migration
 */
export const getLegacyConfigPaths = (projectRoot?: string) => {
  const root = projectRoot || process.cwd();
  return {
    session: path.join(root, 'data', 'session.json'),
    credentials: path.join(root, 'data', 'credentials.json'),
    config: path.join(root, 'data', 'config.json'),
    dataDir: path.join(root, 'data'),
  };
};

/**
 * Log configuration paths for debugging
 */
export function logConfigInfo(): void {
  const globalPaths = getConfigPaths();
  const legacyPaths = getLegacyConfigPaths();

  logger.info('Configuration paths', {
    platform: process.platform,
    globalConfigDir: getGlobalConfigDir(),
    globalPaths,
    legacyPaths,
  });
}