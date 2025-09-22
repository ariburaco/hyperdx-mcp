import { Hono } from 'hono';
import { createMcpHandler } from 'mcp-handler';
import { createModuleLogger } from './utils/logger';

import { EmptyParamsSchema } from './mcp/schemas';
import { createSuccessResult } from './utils/toolResult';

import { LocalSessionManager } from './services/LocalSessionManager';

const logger = createModuleLogger('MCPHandlerServer');

// Initialize session manager
const sessionManager = new LocalSessionManager();

// Create the Hono app
const app = new Hono();

// Create MCP handler
const handler = createMcpHandler(
  (server) => {
    // Test tool
    server.tool('test', 'Test the tool', EmptyParamsSchema.shape, async () => {
      return createSuccessResult('Successfully tested the tool');
    });
  },
  {
    capabilities: {},
  },
  {
    basePath: '/',
    maxDuration: 10 * 60,
    verboseLogs: true,
  }
);

// Mount MCP handler
app.all('/mcp/*', async (c) => {
  return await handler(c.req.raw);
});

// Health check endpoint
app.get('/health', async (c) => {
  try {
    const uptime = process.uptime();

    const healthData = {
      status: 'healthy',
      service: 'MCP Server Template',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(uptime),
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
      },
      node: {
        version: process.version,
        platform: process.platform,
      },
    };

    return c.json(healthData);
  } catch (error) {
    logger.error('Health check failed', { error });
    return c.json(
      {
        status: 'unhealthy',
        service: 'MCP Server Template',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 503 }
    );
  }
});

// Welcome route
app.get('/', (c) => {
  return c.json({
    message: 'MCP Server Template',
    version: '1.0.0',
    endpoints: {
      mcp: '/mcp',
      health: '/health',
      description: 'MCP server for MCP Server Template',
    },
    tools: ['test'],
  });
});

export default app;
