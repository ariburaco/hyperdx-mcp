// ClickHouse Types for HyperDX OpenTelemetry Tables

export interface ClickHouseConfig {
  url: string;
  database: string;
  user: string;
  password?: string;
  timeout: number;
}

// OpenTelemetry Logs Table Structure (default.otel_logs)
export interface OtelLogRow {
  Timestamp: string; // DateTime64(9)
  TimestampTime: string; // DateTime
  TraceId: string;
  SpanId: string;
  TraceFlags: number; // UInt8
  SeverityText: string; // LowCardinality(String)
  SeverityNumber: number; // UInt8
  ServiceName: string; // LowCardinality(String)
  Body: string;
  ResourceSchemaUrl: string; // LowCardinality(String)
  ResourceAttributes: Record<string, string>; // Map(LowCardinality(String), String)
  ScopeSchemaUrl: string; // LowCardinality(String)
  ScopeName: string;
  ScopeVersion: string; // LowCardinality(String)
  ScopeAttributes: Record<string, string>; // Map(LowCardinality(String), String)
  LogAttributes: Record<string, string>; // Map(LowCardinality(String), String)
}

// OpenTelemetry Traces Table Structure (default.otel_traces)
export interface OtelTraceRow {
  Timestamp: string; // DateTime64(9)
  TraceId: string;
  SpanId: string;
  ParentSpanId: string;
  TraceState: string;
  SpanName: string; // LowCardinality(String)
  SpanKind: string; // LowCardinality(String)
  ServiceName: string; // LowCardinality(String)
  ResourceAttributes: Record<string, string>; // Map(LowCardinality(String), String)
  ScopeName: string;
  ScopeVersion: string;
  SpanAttributes: Record<string, string>; // Map(LowCardinality(String), String)
  Duration: number; // UInt64 (nanoseconds)
  StatusCode: string; // LowCardinality(String)
  StatusMessage: string;
  Events: {
    Timestamp: string;
    Name: string;
    Attributes: Record<string, string>;
  }[];
  Links: {
    TraceId: string;
    SpanId: string;
    TraceState: string;
    Attributes: Record<string, string>;
  }[];
}

// OpenTelemetry Metrics Tables
export interface OtelMetricGaugeRow {
  ResourceAttributes: Record<string, string>;
  ResourceSchemaUrl: string;
  ScopeName: string;
  ScopeVersion: string;
  ScopeAttributes: Record<string, string>;
  ScopeSchemaUrl: string;
  MetricName: string;
  MetricDescription: string;
  MetricUnit: string;
  Attributes: Record<string, string>;
  StartTimeUnix: number;
  TimeUnix: number;
  Value: number;
}

export interface OtelMetricSumRow extends OtelMetricGaugeRow {
  IsMonotonic: boolean;
  AggregationTemporality: number;
}

export interface OtelMetricHistogramRow {
  ResourceAttributes: Record<string, string>;
  ResourceSchemaUrl: string;
  ScopeName: string;
  ScopeVersion: string;
  ScopeAttributes: Record<string, string>;
  ScopeSchemaUrl: string;
  MetricName: string;
  MetricDescription: string;
  MetricUnit: string;
  Attributes: Record<string, string>;
  StartTimeUnix: number;
  TimeUnix: number;
  Count: number;
  Sum: number;
  BucketCounts: number[];
  ExplicitBounds: number[];
}

// Sessions Table Structure (default.hyperdx_sessions)
export interface HyperDxSessionRow {
  Timestamp: string;
  TimestampTime: string;
  TraceId: string;
  SpanId: string;
  TraceFlags: number;
  SeverityText: string;
  SeverityNumber: number;
  ServiceName: string;
  Body: string;
  ResourceSchemaUrl: string;
  ResourceAttributes: Record<string, string>;
  ScopeSchemaUrl: string;
  ScopeName: string;
  ScopeVersion: string;
  ScopeAttributes: Record<string, string>;
  LogAttributes: Record<string, string>;
}

// Query Request/Response Types
export interface ClickHouseQueryRequest {
  query: string;
  params?: Record<string, string | number>;
  format?: 'JSON' | 'JSONCompact' | 'JSONEachRow' | 'TabSeparated';
}

export interface ClickHouseQueryResponse<T = unknown> {
  data: T[];
  meta?: {
    name: string;
    type: string;
  }[];
  rows?: number;
  statistics?: {
    elapsed: number;
    rows_read: number;
    bytes_read: number;
  };
}

// Table Names Constants
export const CLICKHOUSE_TABLES = {
  LOGS: 'default.otel_logs',
  TRACES: 'default.otel_traces',
  METRICS_GAUGE: 'default.otel_metrics_gauge',
  METRICS_SUM: 'default.otel_metrics_sum',
  METRICS_HISTOGRAM: 'default.otel_metrics_histogram',
  SESSIONS: 'default.hyperdx_sessions',
} as const;

// Query Filter Types
export interface LogQueryFilters {
  startTime?: Date | number;
  endTime?: Date | number;
  serviceNames?: string[];
  severityLevels?: string[];
  traceId?: string;
  spanId?: string;
  bodyContains?: string;
  attributes?: Record<string, string>;
  limit?: number;
  offset?: number;
}

export interface TraceQueryFilters {
  startTime?: Date | number;
  endTime?: Date | number;
  serviceNames?: string[];
  traceIds?: string[];
  spanNames?: string[];
  minDuration?: number; // nanoseconds
  maxDuration?: number; // nanoseconds
  statusCodes?: string[];
  attributes?: Record<string, string>;
  limit?: number;
  offset?: number;
}

export interface MetricQueryFilters {
  startTime?: Date | number;
  endTime?: Date | number;
  metricNames?: string[];
  serviceNames?: string[];
  attributes?: Record<string, string>;
  aggregation?: 'avg' | 'count' | 'count_distinct' | 'last_value' | 'max' | 'min' | 'quantile' | 'sum';
  groupBy?: string[];
  limit?: number;
}

// Error Types
export interface ClickHouseError {
  code: number;
  message: string;
  exception?: string;
}