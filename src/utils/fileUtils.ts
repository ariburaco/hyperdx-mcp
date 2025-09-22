import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";
import { createModuleLogger } from "./logger";

const logger = createModuleLogger("fileUtils");

/**
 * Ensure directory exists
 */
export const ensureDirectory = async (dirPath: string): Promise<void> => {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    logger.debug(`Created directory: ${dirPath}`);
  }
};

/**
 * Copy file with error handling
 */
export const copyFile = async (
  source: string,
  destination: string,
): Promise<void> => {
  try {
    await ensureDirectory(path.dirname(destination));
    await fs.copyFile(source, destination);
    logger.debug(`File copied: ${source} -> ${destination}`);
  } catch (error) {
    logger.error(`Failed to copy file: ${source} -> ${destination}`, { error });
    throw new Error(
      `Failed to copy file: ${error instanceof Error ? error.message : error}`,
    );
  }
};

/**
 * Delete file safely
 */
export const deleteFile = async (filePath: string): Promise<void> => {
  try {
    await fs.unlink(filePath);
    logger.debug(`File deleted: ${filePath}`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      logger.error(`Failed to delete file: ${filePath}`, { error });
      throw error;
    }
  }
};

/**
 * Check if file exists
 */
export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

/**
 * Get file size in bytes
 */
export const getFileSize = async (filePath: string): Promise<number> => {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (error) {
    logger.error(`Failed to get file size for ${filePath}`, { error });
    throw new Error(
      `Failed to get file size: ${error instanceof Error ? error.message : error}`,
    );
  }
};

/**
 * Format file size in human readable format
 */
export const formatFileSize = (bytes: number): string => {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
};
