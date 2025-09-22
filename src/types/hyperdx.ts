// HyperDX API Types

export interface HyperDXConfig {
  apiUrl: string;
  apiKey?: string;
  requestTimeout: number;
}

// Time series query structures for v2 API
export interface HyperDXSeries {
  sourceId: string; // ObjectId of the data source
  aggFn: 'avg' | 'count' | 'count_distinct' | 'last_value' | 'max' | 'min' | 'quantile' | 'sum';
  field?: string; // Field to aggregate
  where?: string; // Filter condition in Lucene query syntax
  whereLanguage?: 'lucene' | 'sql'; // Query language used in the where clause
  groupBy?: string[]; // Fields to group the results by
  metricName?: string; // Name of the metric (for metric data sources)
  metricDataType?: 'sum' | 'gauge' | 'histogram'; // Type of metric data
}

export interface HyperDXTimeSeriesRequest {
  series: HyperDXSeries[];
  startTime: number; // millisecond timestamp
  endTime: number; // millisecond timestamp
  granularity?: '30s' | '1m' | '5m' | '10m' | '15m' | '30m' | '1h' | '2h' | '6h' | '12h' | '1d' | '2d' | '7d' | '30d' | 'auto';
  seriesReturnType?: 'ratio' | 'column';
}

// v2 API Response format
export interface HyperDXTimeSeriesDataPoint {
  ts_bucket?: number; // timestamp in milliseconds (bucket start time)
  group?: string[]; // Group by values if groupBy was specified
  [key: string]: unknown; // series_N.data values (e.g., "series_0.data": 42)
}

export interface HyperDXTimeSeriesResponse {
  data: HyperDXTimeSeriesDataPoint[];
}

// Log search structures
export interface HyperDXLogEntry {
  timestamp: string;
  level?: string;
  message?: string;
  service?: string;
  trace_id?: string;
  span_id?: string;
  [key: string]: unknown; // additional fields
}

export interface HyperDXSearchRequest {
  q: string; // search query
  startTime?: number;
  endTime?: number;
  limit?: number;
  offset?: number;
  sortOrder?: 'asc' | 'desc';
}

export interface HyperDXSearchResponse {
  data: HyperDXLogEntry[];
  total: number;
  hasMore?: boolean;
}

// Trace structures
export interface HyperDXSpan {
  trace_id: string;
  span_id: string;
  parent_span_id?: string;
  operation_name: string;
  service_name: string;
  start_time: string;
  end_time: string;
  duration_ms: number;
  status?: string;
  tags?: Record<string, unknown>;
}

export interface HyperDXTrace {
  trace_id: string;
  spans: HyperDXSpan[];
  duration_ms: number;
  start_time: string;
  end_time: string;
  service_count: number;
  span_count: number;
}

export interface HyperDXTraceSearchResponse {
  data: HyperDXTrace[];
  total: number;
  hasMore?: boolean;
}

// Metric structures
export interface HyperDXMetricPoint {
  timestamp: string;
  value: number;
  labels?: Record<string, string>;
}

export interface HyperDXMetric {
  name: string;
  type: 'counter' | 'gauge' | 'histogram' | 'summary';
  description?: string;
  unit?: string;
  points: HyperDXMetricPoint[];
}

export interface HyperDXMetricSearchResponse {
  data: HyperDXMetric[];
  total: number;
}

// Session replay structures
export interface HyperDXSessionReplay {
  session_id: string;
  user_id?: string;
  start_time: string;
  end_time: string;
  duration_ms: number;
  page_views: number;
  events: unknown[]; // session replay events
  metadata?: Record<string, unknown>;
}

export interface HyperDXSessionReplayResponse {
  data: HyperDXSessionReplay;
}

// API Error responses
export interface HyperDXError {
  error: string;
  message: string;
  statusCode: number;
  details?: unknown;
}

// Source configuration
export interface HyperDXSource {
  _id: string; // ObjectId
  name: string;
  kind: 'log' | 'trace' | 'metric' | 'session';
  from: {
    databaseName: string;
    tableName: string;
  };
  timestampValueExpression: string;
  displayedTimestampValueExpression: string;
  implicitColumnExpression: string;
  serviceNameExpression: string;
  bodyExpression: string;
  eventAttributesExpression: string;
  resourceAttributesExpression: string;
  defaultTableSelectExpression: string;
  severityTextExpression?: string;
  traceIdExpression?: string;
  spanIdExpression?: string;
  connection: string; // ObjectId reference
  team: string; // ObjectId reference
  createdAt: string;
  updatedAt: string;
  // Trace-specific fields
  durationExpression?: string;
  durationPrecision?: number;
  parentSpanIdExpression?: string;
  spanNameExpression?: string;
  spanKindExpression?: string;
  statusCodeExpression?: string;
  statusMessageExpression?: string;
  // Metric-specific fields
  metricTables?: {
    gauge: string;
    histogram: string;
    sum: string;
    _id: string;
    id: string;
  };
  // Cross-references
  logSourceId?: string;
  traceSourceId?: string;
  sessionSourceId?: string;
  metricSourceId?: string;
}

export interface HyperDXSourcesResponse {
  data: HyperDXSource[];
}

// Default source configuration for all-in-one setup
export interface HyperDXDefaultSources {
  logs: string; // ObjectId
  traces: string; // ObjectId
  metrics: string; // ObjectId
  sessions: string; // ObjectId
}