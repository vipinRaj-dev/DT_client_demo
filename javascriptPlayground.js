let value = [
  {
    name: "MachineType",
    value: {
      type: "Virtual Machine",
    },
  },
  {
    name: "PublicIP",
    value: {
      ip: "52.140.35.219",
    },
  },
  {
    name: "PrivateIP",
    value: [
      {
        alias: "Ethernet01",
        ip: "10.2.0.8",
      },
      {
        alias: "Loopback Pseudo-Interface 1",
        ip: "127.0.0.1",
      },
    ],
  },
  {
    name: "InstalledApp",
    value: [
      {
        name: "Python 3.6.8 Development Libraries (64-bit)",
        version: "3.6.8150.0",
      },
      {
        name: "Python 3.10.5 Utility Scripts (64-bit)",
        version: "3.10.5150.0",
      },
      {
        name: "Python 3.6.8 Tcl/Tk Support (64-bit)",
        version: "3.6.8150.0",
      },
    ],
  },
  {
    name: "Process",
    value: [
      {
        cpu: 9.40625,
        id: 10004,
        name: "chrome",
        service: "N/A",
      },
      {
        cpu: 29.046875,
        id: 9620,
        name: "chrome",
        service: "N/A",
      },
      {
        cpu: 0.890625,
        id: 10992,
        name: "chrome",
        service: "N/A",
      },
      {
        cpu: 7.46875,
        id: 10560,
        name: "chrome",
        service: "N/A",
      },
    ],
  },
  {
    name: "OSInfo",
    value: {
      architecture: "64-bit",
      caption: "Microsoft Windows Server 2019 Datacenter",
      hostname: "CIS-DT-ClientVM",
      manufacturer: "Microsoft Corporation",
      version: "10.0.17763",
    },
  },
  {
    name: "DiskDetail",
    value: [
      {
        disk: "HarddiskVolume2",
        reads: 0,
        transfers: 0,
        writes: 0,
      },
      {
        disk: "HarddiskVolume3",
        reads: 65,
        transfers: 112,
        writes: 47,
      },
      {
        disk: "C:",
        reads: 99075,
        transfers: 150055,
        writes: 50980,
      },
      {
        disk: "D:",
        reads: 5,
        transfers: 246,
        writes: 241,
      },
    ],
  },
  {
    name: "DriveDetails",
    value: [
      {
        file_system_label: "Temporary Storage",
        file_system_type: "NTFS",
        health_status: "Healthy",
        letter: "D",
        operational_status: "OK",
        size: "32.03 GB",
        size_remaining: "29.53 GB",
        type: "Fixed",
        unit_size: 4096,
        used: "2.5 GB",
      },
      {
        file_system_label: "Windows",
        file_system_type: "NTFS",
        health_status: "Healthy",
        letter: "C",
        operational_status: "OK",
        size: "126.57 GB",
        size_remaining: "42.51 GB",
        type: "Fixed",
        unit_size: 4096,
        used: "84.06 GB",
      },
    ],
  },
  {
    name: "CpuInfo",
    value: {
      core_thread: "4",
      cpu_cores: "14",
      cpu_speed: "2295",
      no_of_socket: "1",
      total_threads: "2277",
      v_cpu: "4",
    },
  },
  {
    name: "DiskInfo",
    value: [
      {
        allocated_size: "127.13 GB",
        disk_number: 0,
        friendly_name: "Msft Virtual Disk",
        health_status: "Healthy",
        location: "Integrated : Adapter 0 : Port 0 : Target 0 : LUN 0",
        logical_sector_size: 512,
        manufacturer: "Msft",
        model: "Virtual Disk",
        number: 0,
        number_of_partitions: 4,
        operational_status: "Online",
        partition_style: "GPT",
        physical_sector_size: 4096,
        provisioning_type: "Thin",
        size: "127.13 GB",
      },
      {
        allocated_size: "32.03 GB",
        disk_number: 1,
        friendly_name: "Msft Virtual Disk",
        health_status: "Healthy",
        location: "Integrated : Adapter 0 : Port 0 : Target 0 : LUN 1",
        logical_sector_size: 512,
        manufacturer: "Msft",
        model: "Virtual Disk",
        number: 1,
        number_of_partitions: 1,
        operational_status: "Online",
        partition_style: "MBR",
        physical_sector_size: 4096,
        provisioning_type: "Thin",
        size: "32.03 GB",
      },
    ],
  },
  {
    name: "CpuDetails",
    value: {
      remaining: 79.70488208874261,
      used: 20.2951179112574,
    },
  },
  {
    name: "NetworkInfo",
    value: [
      {
        Name: "Ethernet01",
        ReceivedBroadcastBytes: 0,
        ReceivedBroadcastPackets: 0,
        ReceivedBytes: 16211366,
        ReceivedDiscardedPackets: 0,
        ReceivedMulticastBytes: 0,
        ReceivedMulticastPackets: 0,
        ReceivedPacketErrors: 0,
        ReceivedUnicastBytes: 16211366,
        ReceivedUnicastPackets: 48093,
        SentBroadcastBytes: 4063,
        SentBroadcastPackets: 35,
        SentBytes: 65604259,
        SentMulticastBytes: 3555,
        SentMulticastPackets: 36,
        SentUnicastBytes: 65596641,
        SentUnicastPackets: 39373,
      },
    ],
  },
  {
    name: "PhysicalMemory",
    value: {
      available: 1006,
      total: 1638,
      used: 632,
    },
  },
  {
    name: "MacAddress",
    value: [
      {
        address: "00-22-48-D5-CC-B7",
        name: "Ethernet01",
      },
    ],
  },
  {
    name: "Service",
    value: [
      {
        ip: "::",
        name: "services",
        port: 49715,
        protocol: "TCP",
      },
      {
        ip: "::",
        name: "svchost",
        port: 49673,
        protocol: "TCP",
      },
      {
        ip: "::",
        name: "svchost",
        port: 49673,
        protocol: "TCP",
      },
      {
        ip: "::",
        name: "svchost",
        port: 49673,
        protocol: "TCP",
      },
      {
        ip: "::",
        name: "https",
        port: 80,
        protocol: "TCP",
      },
      {
        ip: "::",
        name: "postgres",
        port: 8010,
        protocol: "TCP",
      },
      {
        ip: "::",
        name: "http",
        port: 443,
        protocol: "TCP",
      },
    ],
  },
];
