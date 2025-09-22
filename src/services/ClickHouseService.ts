import fetch, { type RequestInit } from 'node-fetch';
import { createModuleLogger } from '../utils/logger';
import { getClickHouseConfig } from '../utils/env';
import type {
  ClickHouseConfig,
  ClickHouseQueryRequest,
  ClickHouseQueryResponse,
  ClickHouseError,
  OtelLogRow,
  OtelTraceRow,
  OtelMetricGaugeRow,
  HyperDxSessionRow,
  LogQueryFilters,
  TraceQueryFilters,
  MetricQueryFilters,
  CLICKHOUSE_TABLES,
} from '../types/clickhouse';

export class ClickHouseService {
  private config: ClickHouseConfig;
  private logger = createModuleLogger('ClickHouseService');

  constructor(config?: Partial<ClickHouseConfig>) {
    const defaultConfig = getClickHouseConfig();
    this.config = { ...defaultConfig, ...config };

    this.logger.info('ClickHouse service initialized', {
      url: this.config.url,
      database: this.config.database,
      user: this.config.user,
    });
  }

  /**
   * Execute a raw ClickHouse query
   */
  async executeQuery<T = unknown>(
    request: ClickHouseQueryRequest
  ): Promise<ClickHouseQueryResponse<T>> {
    const { query, params = {}, format = 'JSON' } = request;

    // Build query URL with parameters
    const queryParams = new URLSearchParams({
      ...Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>),
      database: this.config.database,
      default_format: format,
    });

    const url = `${this.config.url}/?${queryParams.toString()}`;

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        ...(this.config.user && {
          'X-ClickHouse-User': this.config.user,
        }),
        ...(this.config.password && {
          'X-ClickHouse-Key': this.config.password,
        }),
      },
      body: query,
      signal: AbortSignal.timeout(this.config.timeout),
    };

    this.logger.debug('Executing ClickHouse query', {
      query: query.substring(0, 200) + (query.length > 200 ? '...' : ''),
      url: url.replace(/password=[^&]*/g, 'password=***'),
    });

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        let errorData: ClickHouseError;
        try {
          const errorText = await response.text();
          errorData = {
            code: response.status,
            message: errorText || `HTTP ${response.status}: ${response.statusText}`,
          };
        } catch {
          errorData = {
            code: response.status,
            message: `HTTP ${response.status}: ${response.statusText}`,
          };
        }

        this.logger.error('ClickHouse query failed', {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });

        throw new Error(`ClickHouse Error: ${errorData.message}`);
      }

      const data = (await response.json()) as ClickHouseQueryResponse<T>;
      this.logger.debug('ClickHouse query successful', {
        rowCount: data.data?.length || 0,
      });

      return data;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        this.logger.error('ClickHouse query timeout', {
          timeout: this.config.timeout,
        });
        throw new Error('ClickHouse query timed out');
      }

      this.logger.error('ClickHouse query error', { error });
      throw error;
    }
  }

  /**
   * Query logs from otel_logs table
   */
  async queryLogs(filters: LogQueryFilters = {}): Promise<OtelLogRow[]> {
    const {
      startTime,
      endTime,
      serviceNames,
      severityLevels,
      traceId,
      spanId,
      bodyContains,
      attributes,
      limit = 100,
      offset = 0,
    } = filters;

    const whereConditions: string[] = [];

    // Time range
    if (startTime) {
      const timestamp = startTime instanceof Date ? startTime.getTime() : startTime;
      whereConditions.push(`TimestampTime >= fromUnixTimestamp64Milli(${timestamp})`);
    }
    if (endTime) {
      const timestamp = endTime instanceof Date ? endTime.getTime() : endTime;
      whereConditions.push(`TimestampTime <= fromUnixTimestamp64Milli(${timestamp})`);
    }

    // Service names
    if (serviceNames && serviceNames.length > 0) {
      const serviceList = serviceNames.map(s => `'${s}'`).join(', ');
      whereConditions.push(`ServiceName IN (${serviceList})`);
    }

    // Severity levels
    if (severityLevels && severityLevels.length > 0) {
      const severityList = severityLevels.map(s => `'${s}'`).join(', ');
      whereConditions.push(`SeverityText IN (${severityList})`);
    }

    // Trace/Span IDs
    if (traceId) {
      whereConditions.push(`TraceId = '${traceId}'`);
    }
    if (spanId) {
      whereConditions.push(`SpanId = '${spanId}'`);
    }

    // Body search
    if (bodyContains) {
      whereConditions.push(`Body LIKE '%${bodyContains}%'`);
    }

    // Attributes search
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        whereConditions.push(`LogAttributes['${key}'] = '${value}'`);
      });
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : '';

    const query = `
      SELECT
        Timestamp,
        TimestampTime,
        TraceId,
        SpanId,
        TraceFlags,
        SeverityText,
        SeverityNumber,
        ServiceName,
        Body,
        ResourceSchemaUrl,
        ResourceAttributes,
        ScopeSchemaUrl,
        ScopeName,
        ScopeVersion,
        ScopeAttributes,
        LogAttributes
      FROM default.otel_logs
      ${whereClause}
      ORDER BY TimestampTime DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    const response = await this.executeQuery<OtelLogRow>({ query });
    return response.data;
  }

  /**
   * Query traces from otel_traces table
   */
  async queryTraces(filters: TraceQueryFilters = {}): Promise<OtelTraceRow[]> {
    const {
      startTime,
      endTime,
      serviceNames,
      traceIds,
      spanNames,
      minDuration,
      maxDuration,
      statusCodes,
      attributes,
      limit = 50,
      offset = 0,
    } = filters;

    const whereConditions: string[] = [];

    // Time range
    if (startTime) {
      const timestamp = startTime instanceof Date ? startTime.getTime() : startTime;
      whereConditions.push(`Timestamp >= fromUnixTimestamp64Milli(${timestamp})`);
    }
    if (endTime) {
      const timestamp = endTime instanceof Date ? endTime.getTime() : endTime;
      whereConditions.push(`Timestamp <= fromUnixTimestamp64Milli(${timestamp})`);
    }

    // Service names
    if (serviceNames && serviceNames.length > 0) {
      const serviceList = serviceNames.map(s => `'${s}'`).join(', ');
      whereConditions.push(`ServiceName IN (${serviceList})`);
    }

    // Trace IDs
    if (traceIds && traceIds.length > 0) {
      const traceList = traceIds.map(t => `'${t}'`).join(', ');
      whereConditions.push(`TraceId IN (${traceList})`);
    }

    // Span names
    if (spanNames && spanNames.length > 0) {
      const spanList = spanNames.map(s => `'${s}'`).join(', ');
      whereConditions.push(`SpanName IN (${spanList})`);
    }

    // Duration range (nanoseconds)
    if (minDuration !== undefined) {
      whereConditions.push(`Duration >= ${minDuration}`);
    }
    if (maxDuration !== undefined) {
      whereConditions.push(`Duration <= ${maxDuration}`);
    }

    // Status codes
    if (statusCodes && statusCodes.length > 0) {
      const statusList = statusCodes.map(s => `'${s}'`).join(', ');
      whereConditions.push(`StatusCode IN (${statusList})`);
    }

    // Attributes search
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        whereConditions.push(`SpanAttributes['${key}'] = '${value}'`);
      });
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : '';

    const query = `
      SELECT
        Timestamp,
        TraceId,
        SpanId,
        ParentSpanId,
        TraceState,
        SpanName,
        SpanKind,
        ServiceName,
        ResourceAttributes,
        ScopeName,
        ScopeVersion,
        SpanAttributes,
        Duration,
        StatusCode,
        StatusMessage,
        Events,
        Links
      FROM default.otel_traces
      ${whereClause}
      ORDER BY Timestamp DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    const response = await this.executeQuery<OtelTraceRow>({ query });
    return response.data;
  }

  /**
   * Query metrics from otel_metrics_gauge table
   */
  async queryMetrics(filters: MetricQueryFilters = {}): Promise<OtelMetricGaugeRow[]> {
    const {
      startTime,
      endTime,
      metricNames,
      serviceNames,
      attributes,
      aggregation = 'avg',
      groupBy = [],
      limit = 100,
    } = filters;

    const whereConditions: string[] = [];

    // Time range
    if (startTime) {
      const timestamp = startTime instanceof Date ? Math.floor(startTime.getTime() / 1000) : Math.floor(startTime / 1000);
      whereConditions.push(`TimeUnix >= ${timestamp}`);
    }
    if (endTime) {
      const timestamp = endTime instanceof Date ? Math.floor(endTime.getTime() / 1000) : Math.floor(endTime / 1000);
      whereConditions.push(`TimeUnix <= ${timestamp}`);
    }

    // Metric names
    if (metricNames && metricNames.length > 0) {
      const metricList = metricNames.map(m => `'${m}'`).join(', ');
      whereConditions.push(`MetricName IN (${metricList})`);
    }

    // Service names (from resource attributes)
    if (serviceNames && serviceNames.length > 0) {
      const serviceList = serviceNames.map(s => `'${s}'`).join(', ');
      whereConditions.push(`ResourceAttributes['service.name'] IN (${serviceList})`);
    }

    // Attributes search
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        whereConditions.push(`Attributes['${key}'] = '${value}'`);
      });
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : '';

    // Build aggregation and group by
    const valueAgg = aggregation === 'count' ? 'count()' : `${aggregation}(Value)`;

    // For aggregation queries, we need to group by all non-aggregated columns
    const baseGroupBy = ['MetricName', 'MetricDescription', 'MetricUnit'];
    const allGroupBy = [...baseGroupBy, ...groupBy];
    const groupByClause = `GROUP BY ${allGroupBy.join(', ')}`;

    const query = `
      SELECT
        MetricName,
        MetricDescription,
        MetricUnit,
        ${valueAgg} as Value,
        ${groupBy.length > 0 ? groupBy.join(', ') + ',' : ''}
        any(ResourceAttributes) as ResourceAttributes,
        any(Attributes) as Attributes
      FROM default.otel_metrics_gauge
      ${whereClause}
      ${groupByClause}
      ORDER BY Value DESC
      LIMIT ${limit}
    `;

    const response = await this.executeQuery<OtelMetricGaugeRow>({ query });
    return response.data;
  }

  /**
   * Query sessions from hyperdx_sessions table
   */
  async querySessions(filters: LogQueryFilters = {}): Promise<HyperDxSessionRow[]> {
    const {
      startTime,
      endTime,
      serviceNames,
      traceId,
      limit = 50,
      offset = 0,
    } = filters;

    const whereConditions: string[] = [];

    // Time range
    if (startTime) {
      const timestamp = startTime instanceof Date ? startTime.getTime() : startTime;
      whereConditions.push(`TimestampTime >= fromUnixTimestamp64Milli(${timestamp})`);
    }
    if (endTime) {
      const timestamp = endTime instanceof Date ? endTime.getTime() : endTime;
      whereConditions.push(`TimestampTime <= fromUnixTimestamp64Milli(${timestamp})`);
    }

    // Service names
    if (serviceNames && serviceNames.length > 0) {
      const serviceList = serviceNames.map(s => `'${s}'`).join(', ');
      whereConditions.push(`ServiceName IN (${serviceList})`);
    }

    // Trace ID
    if (traceId) {
      whereConditions.push(`TraceId = '${traceId}'`);
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : '';

    const query = `
      SELECT *
      FROM default.hyperdx_sessions
      ${whereClause}
      ORDER BY TimestampTime DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    const response = await this.executeQuery<HyperDxSessionRow>({ query });
    return response.data;
  }

  /**
   * Test the connection to ClickHouse
   */
  async testConnection(): Promise<{ connected: boolean; message: string }> {
    try {
      const result = await this.executeQuery<{ version: string }>({
        query: 'SELECT version() as version',
      });

      return {
        connected: true,
        message: `Successfully connected to ClickHouse version: ${result.data[0]?.version || 'unknown'}`,
      };
    } catch (error) {
      return {
        connected: false,
        message:
          error instanceof Error ? error.message : 'Unknown connection error',
      };
    }
  }

  /**
   * Get table information
   */
  async getTables(): Promise<string[]> {
    const result = await this.executeQuery<{ name: string }>({
      query: `SHOW TABLES FROM ${this.config.database}`,
    });

    return result.data.map(row => row.name);
  }

  /**
   * Get table schema
   */
  async getTableSchema(tableName: string): Promise<{ name: string; type: string }[]> {
    const result = await this.executeQuery<{ name: string; type: string }>({
      query: `SELECT name, type FROM system.columns WHERE table = '${tableName}' AND database = '${this.config.database}'`,
    });

    return result.data;
  }
}