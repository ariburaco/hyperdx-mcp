/**
 * Tool result helper for MCP handlers
 */

export interface ToolResultData {
  [key: string]: unknown;
}

export interface ToolContent {
  [x: string]: unknown;
  type: 'text';
  text: string;
}

export interface ToolResult {
  [x: string]: unknown;
  content: ToolContent[];
}

/**
 * Create a standardized tool result for MCP handlers
 */
export function createToolResult(
  success: boolean,
  message: string,
  data?: ToolResultData
): ToolResult {
  const result = {
    success,
    message,
    timestamp: new Date().toISOString(),
    ...data,
  };

  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
}

/**
 * Create a success tool result
 */
export function createSuccessResult(
  message: string,
  data?: ToolResultData
): ToolResult {
  return createToolResult(true, message, data);
}

/**
 * Create an error tool result
 */
export function createErrorResult(
  message: string,
  error?: unknown,
  data?: ToolResultData
): ToolResult {
  return createToolResult(false, message, {
    error: error instanceof Error ? error.message : String(error),
    ...data,
  });
}