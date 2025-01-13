type MemorySize = {
  Innodb_buffer_pool_bytes_data: number;
  Innodb_buffer_pool_bytes_dirty: number;
  Parameter: string;
  timestamp: string;
};

type TrafficInfo = {
  Bytes_received: number;
  Bytes_sent: number;
  Parameter: string;
  traffic_timestamp?: string;
  timestamp?: string;
};

export type NewDataType = {
  "db-diskdetails": {
    Parameter: string;
    discoverytool: number;
    information_schema: number;
    mysql: number;
    performance_schema: number;
    sys: number;
    timestamp: string;
  };
  latency: {
    Parameter: string;
    Slow_queries: number;
    timestamp: string;
  };
  "memory-size": MemorySize[];
  server_details: {
    IP_Address: string;
    "Server Name (VM Name)": string;
    VERSION: string;
    port: string;
  };
  throughput: {
    Parameter: string;
    Queries: number;
    timestamp: string;
  };
  "traffic-info": TrafficInfo[];
  uptime: {
    Uptime: number;
    availability: string;
    mysql_start_time: string;
  };
};

export let newData: NewDataType = {
  "db-diskdetails": {
    Parameter: "DB-DiskSize",
    discoverytool: 0.02,
    information_schema: 0.0,
    mysql: 2.64,
    performance_schema: 0.0,
    sys: 0.02,
    timestamp: "2024-12-23 10:18:05",
  },
  latency: {
    Parameter: "Latency",
    Slow_queries: 0,
    timestamp: "2024-12-23 10:18:05",
  },
  "memory-size": [
    {
      Innodb_buffer_pool_bytes_data: 2000,
      Innodb_buffer_pool_bytes_dirty: 2500,
      Parameter: "Memory-Size",
      timestamp: "0",
    },
    {
      Innodb_buffer_pool_bytes_data: 3000,
      Innodb_buffer_pool_bytes_dirty: 2500,
      Parameter: "Memory-Size",
      timestamp: "0",
    },
    {
      Innodb_buffer_pool_bytes_data: 2500,
      Innodb_buffer_pool_bytes_dirty: 3500,
      Parameter: "Memory-Size",
      timestamp: "0",
    },
    {
      Innodb_buffer_pool_bytes_data: 5000,
      Innodb_buffer_pool_bytes_dirty: 2500,
      Parameter: "Memory-Size",
      timestamp: "2024-12-23 10:18:05",
    },
    {
      Innodb_buffer_pool_bytes_data: 2500,
      Innodb_buffer_pool_bytes_dirty: 5000,
      Parameter: "Memory-Size",
      timestamp: "2024-12-23 10:18:05",
    },
  ],
  server_details: {
    IP_Address: "10.2.1.5",
    "Server Name (VM Name)": "Dynatrace-Demo-",
    VERSION: "9.0.1",
    port: "3306",
  },
  throughput: {
    Parameter: "Throughput",
    Queries: 15924,
    timestamp: "2024-12-23 10:18:05",
  },
  "traffic-info": [
    {
      Bytes_received: 0,
      Bytes_sent: 0,
      Parameter: "Traffic-info",
      timestamp: "0",
    },
    {
      Bytes_received: 0,
      Bytes_sent: 0,
      Parameter: "Traffic-info",
      timestamp: "0",
    },
    {
      Bytes_received: 0,
      Bytes_sent: 0,
      Parameter: "Traffic-info",
      timestamp: "0",
    },
    {
      Bytes_received: 1366953,
      Bytes_sent: 7646634,
      Parameter: "Traffic-info",
      timestamp: "2024-12-23 10:18:05",
    },
    {
      Bytes_received: 1366953,
      Bytes_sent: 7646634,
      Parameter: "Traffic-info",
      timestamp: "2024-12-23 10:18:05",
    },
  ],
  uptime: {
    Uptime: 1056031,
    availability: "100.0",
    mysql_start_time: "2024-12-11 04:57:34",
  },
};

export let postgree = {
  Enqueue_waits: {
    Parameter: "Enqueue_waits",
    enqueue_waits: 0,
    timestamp: "2025-01-06 07:04:02",
  },
  Shared_buffer: {
    Parameter: "shared_buffer",
    shared_buffers_mb: 128.0,
    timestamp: "2025-01-06 07:04:02",
  },
  Slow_Query: {
    Parameter: "Slow_Query",
    slow_queries: 0,
    timestamp: "2025-01-06 07:04:03",
  },
  "avaialability-details": {
    Parameter: "Availability",
    PostgreSQL_availability: "100%",
    PostgreSQL_server_start_in_second: 7484.1021,
    PostgreSQL_server_starttime: "2025-01-06 04:59:18",
  },
  "commit&rollback": [
    {
      Parameter: "commit&rollback",
      enqueue_waits: "0",
      timestamp: "0",
      total_commits: 2500,
      total_rollbacks: 5000,
    },
    {
      Parameter: "commit&rollback",
      enqueue_waits: "0",
      timestamp: "0",
      total_commits: 5000,
      total_rollbacks: 1000,
    },
    {
      Parameter: "commit&rollback",
      enqueue_waits: "0",
      timestamp: "0",
      total_commits: 1500,
      total_rollbacks: 5000,
    },
    {
      Parameter: "commit&rollback",
      enqueue_waits: "0",
      timestamp: "0",
      total_commits: 2000,
      total_rollbacks: 7000,
    },
    {
      Parameter: "commit&rollback",
      timestamp: "2025-01-06 07:04:02",
      total_commits: 8471,
      total_rollbacks: 273,
    },
  ],
  "connection-details": {
    Parameter: "Connections",
    active_connections: 6,
    connection_availability: 94,
    max_connections: 100,
    timestamp: "2025-01-06 07:04:02",
  },
  "db-diskdetails": {
    Parameter: "db-diskdetails",
    first_test_sample_db: "8073 kB",
    postgres: "7953 kB",
    template0: "7809 kB",
    template1: "7953 kB",
    timestamp: "2025-01-06 07:04:03",
  },
  memory_details: [
    {
      Parameter: "memory_details",
      free_memory_mb: 6000,
      timestamp: "2025-01-06 07:04:05",
      total_memory_used_mb: 4000,
    },
    {
      Parameter: "memory_details",
      free_memory_mb: 3000,
      timestamp: "2025-01-06 07:04:10",
      total_memory_used_mb: 7000,
    },
    {
      Parameter: "memory_details",
      free_memory_mb: 8000,
      timestamp: "2025-01-06 07:04:15",
      total_memory_used_mb: 2000,
    },
    {
      Parameter: "memory_details",
      free_memory_mb: 2000,
      timestamp: "2025-01-06 07:04:20",
      total_memory_used_mb: 8000,
    },
    {
      Parameter: "memory_details",
      free_memory_mb: 8000.0,
      timestamp: "2025-01-06 07:04:25",
      total_memory_used_mb: 2000.0,
    },
  ],
  "server-details": {
    Hostname: "Zabbix-Proxy-DT-01",
    Parameter: "Server_details",
    ServerIP: "127.0.0.1",
    postgres_full_version:
      "PostgreSQL 12.22 (Ubuntu \n12.22-0ubuntu0.20.04.1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 9.4.0-1ubuntu1~20.04.2) 9.4.0, 64-bit",
    postgres_port: 5432,
    postgres_version: "12.22",
  },
  total_work_memory: {
    Parameter: "total_work_memory",
    timestamp: "2025-01-06 07:04:02",
    total_work_mem_used_mb: 4.0,
  },
  transaction_details: {
    Parameter: "Transaction_details",
    Transaction_QPS: 0,
    timestamp: "2025-01-06 07:04:03",
  },
};

export type PostgreeDataType = {
  Enqueue_waits: {
    Parameter: string;
    enqueue_waits: number;
    timestamp: string;
  };
  Shared_buffer: {
    Parameter: string;
    shared_buffers_mb: number;
    timestamp: string;
  };
  Slow_Query: {
    Parameter: string;
    slow_queries: number;
    timestamp: string;
  };
  "avaialability-details": {
    Parameter: string;
    PostgreSQL_availability: string;
    PostgreSQL_server_start_in_second: number;
    PostgreSQL_server_starttime: string;
  };
  "commit&rollback": Array<{
    Parameter: string;
    enqueue_waits?: string; // Optional since it's missing in the last object
    timestamp: string;
    total_commits: number;
    total_rollbacks: number;
  }>;
  "connection-details": {
    Parameter: string;
    active_connections: number;
    connection_availability: number;
    max_connections: number;
    timestamp: string;
  };
  "db-diskdetails": {
    Parameter: string;
    first_test_sample_db: string;
    postgres: string;
    template0: string;
    template1: string;
    timestamp: string;
  };
  memory_details: Array<{
    Parameter: string;
    free_memory_mb?: number; // Optional due to potential inconsistent naming
    timestamp: string;
    total_memory_used_mb: number;
  }>;
  "server-details": {
    Hostname: string;
    Parameter: string;
    ServerIP: string;
    postgres_full_version: string;
    postgres_port: number;
    postgres_version: string;
  };
  total_work_memory: {
    Parameter: string;
    timestamp: string;
    total_work_mem_used_mb: number;
  };
  transaction_details: {
    Parameter: string;
    Transaction_QPS: number;
    timestamp: string;
  };
};
