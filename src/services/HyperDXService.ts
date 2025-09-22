import { createModuleLogger } from '../utils/logger';
import { getHyperDXConfig } from '../utils/env';
import { ClickHouseService } from './ClickHouseService';
import type {
  HyperDXConfig,
  HyperDXSearchResponse,
  HyperDXTraceSearchResponse,
  HyperDXMetricSearchResponse,
  HyperDXSessionReplayResponse,
  HyperDXSourcesResponse,
} from '../types/hyperdx';
import type {
  LogQueryFilters,
  TraceQueryFilters,
  MetricQueryFilters,
} from '../types/clickhouse';

export class HyperDXService {
  private config: HyperDXConfig;
  private clickHouse: ClickHouseService;
  private logger = createModuleLogger('HyperDXService');

  constructor(config?: Partial<HyperDXConfig>) {
    const defaultConfig = getHyperDXConfig();
    this.config = { ...defaultConfig, ...config };
    this.clickHouse = new ClickHouseService();

    this.logger.info('HyperDX service initialized with ClickHouse backend', {
      apiUrl: this.config.apiUrl,
      hasApiKey: !!this.config.apiKey,
    });
  }

  /**
   * Search logs with full-text search and filters
   */
  async searchLogs(params: {
    query: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    sortOrder?: 'asc' | 'desc';
  }): Promise<HyperDXSearchResponse> {
    const {
      query,
      startTime,
      endTime,
      limit = 100,
    } = params;

    const filters: LogQueryFilters = {
      startTime: startTime || Date.now() - 24 * 60 * 60 * 1000,
      endTime: endTime || Date.now(),
      limit,
    };

    // Handle different query types
    if (query && query !== '*') {
      filters.bodyContains = query;
    }

    const logs = await this.clickHouse.queryLogs(filters);

    // Transform ClickHouse response to HyperDX format
    return {
      data: logs.map((log) => ({
        timestamp: log.TimestampTime,
        message: log.Body,
        level: log.SeverityText,
        service: log.ServiceName,
        trace_id: log.TraceId,
        span_id: log.SpanId,
        ...log,
      })),
      total: logs.length,
      hasMore: logs.length === limit,
    };
  }

  /**
   * Search traces by query string
   */
  async searchTraces(params: {
    query: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    serviceFilter?: string;
  }): Promise<HyperDXTraceSearchResponse> {
    const { query, startTime, endTime, limit = 50, serviceFilter } = params;

    const filters: TraceQueryFilters = {
      startTime: startTime || Date.now() - 24 * 60 * 60 * 1000,
      endTime: endTime || Date.now(),
      limit,
    };

    // Handle service filter
    if (serviceFilter) {
      filters.serviceNames = [serviceFilter];
    }

    // Handle span name search
    if (query && query !== '*') {
      filters.spanNames = [query];
    }

    const traces = await this.clickHouse.queryTraces(filters);

    // Transform ClickHouse response to HyperDX format
    return {
      data: traces.map((trace) => ({
        trace_id: trace.TraceId,
        spans: [], // Would need additional query to get all spans for trace
        duration_ms: Math.round(trace.Duration / 1_000_000), // Convert from nanoseconds
        start_time: trace.Timestamp,
        end_time: trace.Timestamp, // Same as start for individual spans
        service_count: 1, // Would need aggregation across trace
        span_count: 1, // Individual span
      })),
      total: traces.length,
      hasMore: traces.length === limit,
    };
  }

  /**
   * Search metrics by name and filters
   */
  async searchMetrics(params: {
    metricName?: string;
    startTime?: number;
    endTime?: number;
    aggregation?: 'avg' | 'count' | 'count_distinct' | 'last_value' | 'max' | 'min' | 'quantile' | 'sum';
    groupBy?: string[];
  }): Promise<HyperDXMetricSearchResponse> {
    const {
      metricName,
      startTime,
      endTime,
      aggregation = 'avg',
      groupBy = [],
    } = params;

    const filters: MetricQueryFilters = {
      startTime: startTime || Date.now() - 24 * 60 * 60 * 1000,
      endTime: endTime || Date.now(),
      aggregation,
      groupBy,
    };

    if (metricName) {
      filters.metricNames = [metricName];
    }

    const metrics = await this.clickHouse.queryMetrics(filters);

    // Transform ClickHouse response to HyperDX format
    return {
      data: [
        {
          name: metricName || 'unknown',
          type: 'gauge',
          description: `Metric query: ${metricName || 'all metrics'}`,
          points: metrics.map((metric) => ({
            timestamp: new Date(metric.TimeUnix * 1000).toISOString(),
            value: metric.Value,
            labels: metric.Attributes,
          })),
        },
      ],
      total: metrics.length,
    };
  }

  /**
   * Get session replay by session ID
   */
  async getSessionReplay(
    sessionId: string
  ): Promise<HyperDXSessionReplayResponse> {
    const filters: LogQueryFilters = {
      startTime: Date.now() - 30 * 24 * 60 * 60 * 1000, // Last 30 days
      endTime: Date.now(),
      traceId: sessionId, // Assuming session ID is stored as trace ID
    };

    const sessions = await this.clickHouse.querySessions(filters);

    // Transform ClickHouse response to session replay format
    return {
      data: {
        session_id: sessionId,
        user_id: 'unknown',
        start_time: sessions[0]?.TimestampTime || new Date().toISOString(),
        end_time: sessions[sessions.length - 1]?.TimestampTime || new Date().toISOString(),
        duration_ms: 0, // Would need to calculate from start/end
        page_views: sessions.length,
        events: sessions.map((session) => ({
          timestamp: session.TimestampTime,
          data: session,
        })),
        metadata: { query: `session_id:${sessionId}` },
      },
    };
  }

  /**
   * Execute custom dashboard query with HyperDX search syntax
   */
  async queryDashboard(params: {
    query: string;
    type?: 'logs' | 'metrics' | 'traces';
    startTime?: number;
    endTime?: number;
    aggregation?: string;
    groupBy?: string[];
  }): Promise<{ data: unknown[] }> {
    const {
      query,
      type = 'logs',
      startTime,
      endTime,
    } = params;

    const commonFilters = {
      startTime: startTime || Date.now() - 24 * 60 * 60 * 1000,
      endTime: endTime || Date.now(),
    };

    switch (type) {
      case 'logs': {
        const filters: LogQueryFilters = {
          ...commonFilters,
          bodyContains: query !== '*' ? query : undefined,
        };
        const logs = await this.clickHouse.queryLogs(filters);
        return { data: logs };
      }
      case 'traces': {
        const filters: TraceQueryFilters = {
          ...commonFilters,
          spanNames: query !== '*' ? [query] : undefined,
        };
        const traces = await this.clickHouse.queryTraces(filters);
        return { data: traces };
      }
      case 'metrics': {
        const filters: MetricQueryFilters = {
          ...commonFilters,
          metricNames: query !== '*' ? [query] : undefined,
        };
        const metrics = await this.clickHouse.queryMetrics(filters);
        return { data: metrics };
      }
      default:
        throw new Error(`Unsupported query type: ${type}`);
    }
  }

  /**
   * List available data sources (mock implementation)
   */
  async getSources(): Promise<HyperDXSourcesResponse> {
    // This would normally query the sources from ClickHouse system tables
    // For now, return mock data based on known table structure
    return {
      data: [
        {
          _id: 'logs',
          name: 'Logs',
          kind: 'log' as const,
          from: { databaseName: 'default', tableName: 'otel_logs' },
          timestampValueExpression: 'TimestampTime',
          displayedTimestampValueExpression: 'Timestamp',
          implicitColumnExpression: 'Body',
          serviceNameExpression: 'ServiceName',
          bodyExpression: 'Body',
          eventAttributesExpression: 'LogAttributes',
          resourceAttributesExpression: 'ResourceAttributes',
          defaultTableSelectExpression: 'Timestamp,ServiceName,SeverityText,Body',
          severityTextExpression: 'SeverityText',
          traceIdExpression: 'TraceId',
          spanIdExpression: 'SpanId',
          connection: 'clickhouse',
          team: 'default',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          _id: 'traces',
          name: 'Traces',
          kind: 'trace' as const,
          from: { databaseName: 'default', tableName: 'otel_traces' },
          timestampValueExpression: 'Timestamp',
          displayedTimestampValueExpression: 'Timestamp',
          implicitColumnExpression: 'SpanName',
          serviceNameExpression: 'ServiceName',
          bodyExpression: 'SpanName',
          eventAttributesExpression: 'SpanAttributes',
          resourceAttributesExpression: 'ResourceAttributes',
          defaultTableSelectExpression: 'Timestamp,ServiceName,StatusCode,Duration,SpanName',
          traceIdExpression: 'TraceId',
          spanIdExpression: 'SpanId',
          connection: 'clickhouse',
          team: 'default',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    };
  }

  /**
   * Test the connection to HyperDX (via ClickHouse)
   */
  async testConnection(): Promise<{ connected: boolean; message: string }> {
    try {
      const result = await this.clickHouse.testConnection();
      if (result.connected) {
        const tables = await this.clickHouse.getTables();
        return {
          connected: true,
          message: `Successfully connected to ClickHouse. Found ${tables.length} tables: ${tables.join(', ')}`,
        };
      }
      return result;
    } catch (error) {
      return {
        connected: false,
        message:
          error instanceof Error ? error.message : 'Unknown connection error',
      };
    }
  }

  /**
   * Build a time range helper for common queries
   */
  static getTimeRange(period: string): { startTime: number; endTime: number } {
    const now = Date.now();
    const periods: Record<string, number> = {
      '1h': 60 * 60 * 1000,
      '4h': 4 * 60 * 60 * 1000,
      '12h': 12 * 60 * 60 * 1000,
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000,
    };

    const duration = periods[period] || periods['24h'];
    return {
      startTime: now - duration,
      endTime: now,
    };
  }
}