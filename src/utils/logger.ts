import winston from "winston";
import path from "path";
import { fileURLToPath } from "url";
import { getLogConfig } from "./env";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDir = path.join(__dirname, "../../logs");

// Get log configuration from centralized env
const logConfig = getLogConfig();

// Custom format for console output
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.colorize(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    let metaString = "";
    if (Object.keys(meta).length > 0) {
      metaString = `\n${JSON.stringify(meta, null, 2)}`;
    }
    return `${timestamp} [${level}]: ${message}${metaString}`;
  }),
);

// Custom format for file output
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.json(),
);

// Create logger instance
const logger = winston.createLogger({
  level: logConfig.level,
  format: winston.format.errors({ stack: true }),
  defaultMeta: { service: "mcp-server-template" },
  transports: [],
});

// Add console transport if enabled
if (logConfig.consoleEnabled) {
  logger.add(
    new winston.transports.Console({
      format: consoleFormat,
    }),
  );
}

// Add file transport if enabled
if (logConfig.fileEnabled) {
  // General application logs
  logger.add(
    new winston.transports.File({
      filename: path.join(logDir, "app.log"),
      format: fileFormat,
      maxsize: 10 * 1024 * 1024, // 10MB
      maxFiles: 5,
      tailable: true,
    }),
  );

  // Error logs
  logger.add(
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
      format: fileFormat,
      maxsize: 10 * 1024 * 1024, // 10MB
      maxFiles: 5,
      tailable: true,
    }),
  );

  // Test specific logs
  logger.add(
    new winston.transports.File({
      filename: path.join(logDir, "test.log"),
      format: fileFormat,
      maxsize: 10 * 1024 * 1024, // 10MB
      maxFiles: 10,
      tailable: true,
    }),
  );
}

// Create specialized loggers for different modules
export const createModuleLogger = (moduleName: string) => {
  return logger.child({ module: moduleName });
};



// Performance logging utility
export const measurePerformance = <T>(
  operation: string,
  fn: () => Promise<T> | T,
): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    const startTime = Date.now();
    logger.debug(`Starting operation: ${operation}`);

    try {
      const result = await fn();
      const duration = Date.now() - startTime;
      logger.info(`Operation completed: ${operation}`, { duration });
      resolve(result);
    } catch (error) {
      const duration = Date.now() - startTime;
      logger.error(`Operation failed: ${operation}`, {
        error: error instanceof Error ? error.message : error,
        duration,
      });
      reject(error);
    }
  });
};

export default logger;
