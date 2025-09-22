import { Hono } from 'hono';
import { createMcpHandler } from 'mcp-handler';
import { createModuleLogger } from './utils/logger';

import {
  EmptyParamsSchema,
  SearchLogsSchema,
  SearchTracesSchema,
  SearchMetricsSchema,
  GetSessionReplaySchema,
  QueryDashboardSchema,
  TestConnectionSchema
} from './mcp/schemas';
import { createSuccessResult, createErrorResult } from './utils/toolResult';

import { LocalSessionManager } from './services/LocalSessionManager';
import { HyperDXService } from './services/HyperDXService';

const logger = createModuleLogger('MCPHandlerServer');

// Initialize session manager
const sessionManager = new LocalSessionManager();

// Initialize HyperDX service
const hyperDXService = new HyperDXService();

// Create the Hono app
const app = new Hono();

// Create MCP handler
const handler = createMcpHandler(
  (server) => {
    // Test tool
    server.tool('test', 'Test the tool', EmptyParamsSchema.shape, async () => {
      return createSuccessResult('Successfully tested the tool');
    });

    // HyperDX Connection Test
    server.tool('hyperdx_test_connection', 'Test connection to HyperDX API', TestConnectionSchema.shape, async () => {
      try {
        const result = await hyperDXService.testConnection();
        if (result.connected) {
          return createSuccessResult(result.message);
        } else {
          return createErrorResult(result.message);
        }
      } catch (error) {
        return createErrorResult(`Connection test failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    });

    // Search Logs
    server.tool('hyperdx_search_logs', 'Search logs in HyperDX using query syntax', SearchLogsSchema.shape, async (params) => {
      try {
        const result = await hyperDXService.searchLogs(params);
        return createSuccessResult(JSON.stringify(result, null, 2));
      } catch (error) {
        return createErrorResult(`Log search failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    });

    // Search Traces
    server.tool('hyperdx_search_traces', 'Search distributed traces in HyperDX', SearchTracesSchema.shape, async (params) => {
      try {
        const result = await hyperDXService.searchTraces(params);
        return createSuccessResult(JSON.stringify(result, null, 2));
      } catch (error) {
        return createErrorResult(`Trace search failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    });

    // Search Metrics
    server.tool('hyperdx_search_metrics', 'Search and query metrics data in HyperDX', SearchMetricsSchema.shape, async (params) => {
      try {
        const result = await hyperDXService.searchMetrics(params);
        return createSuccessResult(JSON.stringify(result, null, 2));
      } catch (error) {
        return createErrorResult(`Metric search failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    });

    // Get Session Replay
    server.tool('hyperdx_get_session_replay', 'Retrieve session replay data by session ID', GetSessionReplaySchema.shape, async (params) => {
      try {
        const result = await hyperDXService.getSessionReplay(params.sessionId);
        return createSuccessResult(JSON.stringify(result, null, 2));
      } catch (error) {
        return createErrorResult(`Session replay retrieval failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    });

    // Custom Dashboard Query
    server.tool('hyperdx_query_dashboard', 'Execute custom queries on HyperDX dashboard data', QueryDashboardSchema.shape, async (params) => {
      try {
        let { startTime, endTime } = params;

        // Handle predefined time ranges
        if (params.timeRange) {
          const timeRange = HyperDXService.getTimeRange(params.timeRange);
          startTime = timeRange.startTime;
          endTime = timeRange.endTime;
        }

        const result = await hyperDXService.queryDashboard({
          ...params,
          startTime,
          endTime,
        });
        return createSuccessResult(JSON.stringify(result, null, 2));
      } catch (error) {
        return createErrorResult(`Dashboard query failed: ${error instanceof Error ? error.message : String(error)}`);
      }
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
      service: 'HyperDX MCP Server',
      version: '2.0.0',
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
        service: 'HyperDX MCP Server',
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
    message: 'HyperDX MCP Server',
    version: '2.0.0',
    endpoints: {
      mcp: '/mcp',
      health: '/health',
      description: 'MCP server for HyperDX telemetry dashboard integration',
    },
    tools: [
      'test',
      'hyperdx_test_connection',
      'hyperdx_search_logs',
      'hyperdx_search_traces',
      'hyperdx_search_metrics',
      'hyperdx_get_session_replay',
      'hyperdx_query_dashboard'
    ],
    hyperdx: {
      description: 'Query logs, traces, metrics, and session replays from HyperDX observability platform',
      documentation: 'Configure HYPERDX_API_URL and HYPERDX_API_KEY environment variables',
    },
  });
});

export default app;
