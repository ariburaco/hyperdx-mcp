import { z } from 'zod';


// Additional schema for empty parameter tools
const EmptyParamsSchema = z.object({});

// HyperDX Tool Schemas
const SearchLogsSchema = z.object({
  query: z.string().describe('Search query using HyperDX search syntax (e.g., "level:error", "service:api")'),
  startTime: z.number().optional().describe('Start timestamp in milliseconds (default: 24 hours ago)'),
  endTime: z.number().optional().describe('End timestamp in milliseconds (default: now)'),
  limit: z.number().optional().default(100).describe('Maximum number of results to return'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc').describe('Sort order for results'),
});

const SearchTracesSchema = z.object({
  query: z.string().describe('Search query for traces using HyperDX syntax'),
  startTime: z.number().optional().describe('Start timestamp in milliseconds (default: 24 hours ago)'),
  endTime: z.number().optional().describe('End timestamp in milliseconds (default: now)'),
  limit: z.number().optional().default(50).describe('Maximum number of traces to return'),
  serviceFilter: z.string().optional().describe('Filter by specific service name'),
});

const SearchMetricsSchema = z.object({
  metricName: z.string().optional().describe('Name of the metric to search for (optional for general search)'),
  startTime: z.number().optional().describe('Start timestamp in milliseconds (default: 24 hours ago)'),
  endTime: z.number().optional().describe('End timestamp in milliseconds (default: now)'),
  aggregation: z.enum(['avg', 'count', 'count_distinct', 'last_value', 'max', 'min', 'quantile', 'sum']).optional().default('avg').describe('Aggregation function to apply'),
  groupBy: z.array(z.string()).optional().default([]).describe('Fields to group metrics by'),
});

const GetSessionReplaySchema = z.object({
  sessionId: z.string().describe('Session ID to retrieve replay data for'),
});

const QueryDashboardSchema = z.object({
  query: z.string().describe('Custom query using HyperDX search syntax'),
  type: z.enum(['logs', 'metrics', 'traces']).optional().default('logs').describe('Type of data to query'),
  startTime: z.number().optional().describe('Start timestamp in milliseconds (default: 24 hours ago)'),
  endTime: z.number().optional().describe('End timestamp in milliseconds (default: now)'),
  aggregation: z.string().optional().default('count').describe('Aggregation function (count, avg, max, etc.)'),
  groupBy: z.array(z.string()).optional().default([]).describe('Fields to group results by'),
  timeRange: z.enum(['1h', '4h', '12h', '24h', '7d', '30d']).optional().describe('Predefined time range (overrides start/endTime)'),
});

const TestConnectionSchema = z.object({});

export {
  EmptyParamsSchema,
  SearchLogsSchema,
  SearchTracesSchema,
  SearchMetricsSchema,
  GetSessionReplaySchema,
  QueryDashboardSchema,
  TestConnectionSchema
};
