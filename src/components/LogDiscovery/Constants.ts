export interface LogEntry {
  cluster: number;
  hostname: string;
  'Cluster Sample': string;
  count: number;
}

let clusterResponseData = {
  data: '[{"cluster":1,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"[origin software=\\"rsyslogd\\" swVersion=\\"8.2001.0\\" x-pid=\\"847\\" x-info=\\"https:\\/\\/www.rsyslog.com\\"] rsyslogd was HUPed","count":539},{"cluster":2,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"dbus.socket: Succeeded.","count":32},{"cluster":3,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"Listening on GnuPG cryptographic agent and passphrase cache (access for web browsers).","count":32},{"cluster":4,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"[ 917.006364] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#144 cmd 0x37 status: scsi 0x2 srb 0x86 hv 0xc0000001","count":26},{"cluster":5,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"[ 917.006010] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#34 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001","count":28},{"cluster":6,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"Reached target Multi-User System.","count":31},{"cluster":7,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"+ uname -m","count":1568},{"cluster":8,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"ubuntu-advantage.service: Succeeded.","count":58},{"cluster":9,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"Starting Collect apt metrics for prometheus-node-exporter...","count":36},{"cluster":10,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"2024-09-30T04:34:03.637771Z INFO ExtHandler [Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1] Command: .\\/install.sh enable","count":54},{"cluster":11,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"logger=ngalert.sender.router rule_uid=bdrf3k8dy0bgga org_id=1 t=2024-09-30T04:34:30.073397355Z level=info msg=\\"Sending alerts to local notifier\\" count=2","count":150},{"cluster":12,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"logger=settings t=2024-09-30T04:34:03.98902873Z level=info msg=\\"Starting Grafana\\" version=11.2.0 commit=c57667e4481563f5e6cf945b03bc0626caa4dbeb branch=HEAD compiled=2024-09-30T04:34:03Z","count":33},{"cluster":13,"hostname":"CIS-Demo-Ubuntu-VM3","Cluster Sample":"logger=ngalert.notifier.alertmanager org=1 t=2024-09-30T04:34:30.077498699Z level=error component=alertmanager orgID=1 component=dispatcher msg=\\"Notify for alerts failed\\" num_alerts=2 err=\\"grafana-default-email\\/email[0]: notify retry canceled due to unrecoverable error after 1 attempts: SMTP not configured, check your grafana.ini config file\'s [smtp] section\\"","count":30}]',
};

export const logs: LogEntry[] = JSON.parse(clusterResponseData.data);
export interface Summary {
  [key: string]: string;
}

export interface LogCount {
  timestamp: string;
  hostname: string;
  process: string;
  message: string;
  update_status: string;
}

export interface DetailedLogInformation {
  timestamp: string;
  hostname: string;
  process: string;
  message: string;
}

export interface DetailedLogPage {
  summary: Summary[];
  logCount: LogCount[];
  detailedLogCluster: DetailedLogInformation[];
}

export const detailedLogPage: DetailedLogPage = {
  summary: [
    {
      logSummary:
        "Cluster logs indicate a high frequency of error messages from server A between 2-3 PM.",
    },
    {
      chatGPTSummary:
        "Cluster logs indicate a moderate frequency of warning messages from server B between 4-5 PM.",
    },
  ],
  logCount: [
    {
      timestamp: "2024-09-30T11:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service started successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T12:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service stopped successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T13:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service restarted successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T14:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service failed to start.",
      update_status: "failure",
    },
    {
      timestamp: "2024-09-30T15:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service started successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T16:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service stopped successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T17:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service restarted successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T18:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service failed to start.",
      update_status: "failure",
    },
    {
      timestamp: "2024-09-30T19:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service started successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T20:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service stopped successfully.",
      update_status: "success",
    },
    {
      timestamp: "2024-09-30T21:00:00Z",
      hostname: "CIS-Demo-Ubuntu-VM3",
      process: "systemd",
      message: "Service restarted successfully.",
      update_status: "success",
    },
  ],
  detailedLogCluster: [
    // {
    //   timestamp: "2024-09-30T06:33:52",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[10064]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T04:48:45",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[3427]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T05:03:45",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[4279]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T05:03:45",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[4279]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T05:03:45",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[4279]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T05:03:45",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[4279]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T05:18:47",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[5162]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T05:33:48",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[6014]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T05:48:49",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[7052]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T06:03:50",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[8033]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T06:18:50",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[9063]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T06:33:52",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[10064]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },
    // {
    //   timestamp: "2024-09-30T06:48:54",
    //   hostname: "CIS-Demo-Ubuntu-VM3",
    //   process: "bash[11191]:",
    //   message:
    //     "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
    // },




    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[origin software=\"rsyslogd\" swVersion=\"8.2001.0\" x-pid=\"847\" x-info=\"https://www.rsyslog.com\"] rsyslogd was HUPed",
      "process": "rsyslogd:",
      "timestamp": "2024-09-30T04:33:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logrotate.service: Failed with result 'exit-code'.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Failed to start Rotate log files.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:55.760Z caller=head.go:766 level=info component=tsdb msg=\"WAL segment loaded\" segment=874 maxSegment=876",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:56.004221140Z\" level=info msg=\"Starting up\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:56.038014846Z\" level=info msg=\"detected 127.0.0.53 nameserver, assuming systemd-resolved, so using resolv.conf: /run/systemd/resolve/resolv.conf\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.094Z caller=head.go:766 level=info component=tsdb msg=\"WAL segment loaded\" segment=875 maxSegment=876",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.096Z caller=head.go:766 level=info component=tsdb msg=\"WAL segment loaded\" segment=876 maxSegment=876",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.096Z caller=head.go:803 level=info component=tsdb msg=\"WAL replay completed\" checkpoint_replay_duration=282.231747ms wal_replay_duration=1.471867471s wbl_replay_duration=200ns total_replay_duration=2.351213542s",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 27.473519] audit: type=1400 audit(1727670836.097:52): apparmor=\"STATUS\" operation=\"profile_load\" profile=\"unconfined\" name=\"docker-default\" pid=2538 comm=\"apparmor_parser\"",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.112Z caller=main.go:1060 level=info fs_type=EXT4_SUPER_MAGIC",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.112Z caller=main.go:1063 level=info msg=\"TSDB started\"",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.116Z caller=main.go:1245 level=info msg=\"Loading configuration file\" filename=/etc/prometheus/prometheus.yml",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.125Z caller=main.go:1282 level=info msg=\"Completed loading of configuration file\" filename=/etc/prometheus/prometheus.yml totalDuration=12.922322ms db_storage=1.4µs remote_storage=1.4µs web_handler=700ns query_engine=1.3µs scrape=4.542395ms scrape_sd=100.509µs notify=178.115µs notify_sd=19.601µs rules=1.7µs tracing=17.201µs",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.125Z caller=main.go:1024 level=info msg=\"Server is ready to receive web requests.\"",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:33:56.126Z caller=manager.go:146 level=info component=\"rule manager\" msg=\"Starting rule manager...\"",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:56.776603186Z\" level=info msg=\"[graphdriver] using prior storage driver: overlay2\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:56"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:57.027053192Z\" level=info msg=\"Loading containers: start.\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 28.446024] bridge: filtering via arp/ip/ip6tables is no longer available by default. Update your scripts to load br_netfilter if you need this.",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 28.454933] Bridge firewalling registered",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 28.580451] Initializing XFRM netlink socket",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "rtnl: received neighbor for link '5' we don't know about, ignoring.",
      "process": "systemd-networkd[620]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "message repeated 3 times: [ rtnl: received neighbor for link '5' we don't know about, ignoring.]",
      "process": "systemd-networkd[620]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "WARNING:Unknown index 5 seen, reloading interface list",
      "process": "networkd-dispatcher[782]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Using default interface naming scheme 'v245'.",
      "process": "systemd-udevd[2518]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ethtool: autonegotiation is unset or enabled, the speed and duplex are not writable.",
      "process": "systemd-udevd[2518]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "docker0: Link UP",
      "process": "systemd-networkd[620]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "rtnl: received neighbor for link '6' we don't know about, ignoring.",
      "process": "systemd-networkd[620]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "message repeated 3 times: [ rtnl: received neighbor for link '6' we don't know about, ignoring.]",
      "process": "systemd-networkd[620]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "WARNING:Unknown index 6 seen, reloading interface list",
      "process": "networkd-dispatcher[782]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ethtool: autonegotiation is unset or enabled, the speed and duplex are not writable.",
      "process": "systemd-udevd[2518]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "br-16d6b3f4f39a: Link UP",
      "process": "systemd-networkd[620]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:57.462978777Z\" level=info msg=\"Default bridge (docker0) is assigned with an IP address 172.17.0.0/16. Daemon option --bip can be used to set a preferred IP address\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:57.556603920Z\" level=info msg=\"Loading containers: done.\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[\"2024-09-30T04:33:57.883\", \"INFO\", \"ubuntupro.daemon\", \"main\", 67, \"mode: poll for pro license\", {}]",
      "process": "python3[893]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:57.987533181Z\" level=warning msg=\"Not using native diff for overlay2, this may cause degraded performance for building images: kernel has CONFIG_OVERLAY_FS_REDIRECT_DIR enabled\" storage-driver=overlay2",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:57.987898512Z\" level=info msg=\"Docker daemon\" commit=\"24.0.7-0ubuntu2~20.04.1\" graphdriver=overlay2 version=24.0.7",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:57.994187845Z\" level=info msg=\"Daemon has completed initialization\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:57"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Docker Application Container Engine.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=\"2024-09-30T04:33:58.074890014Z\" level=info msg=\"API listen on /run/docker.sock\"",
      "process": "dockerd[2244]:",
      "timestamp": "2024-09-30T04:33:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "level=info ts=2024-09-30T04:33:58.341Z caller=cluster.go:587 component=cluster msg=\"gossip settled; proceeding\" elapsed=10.001784035s",
      "process": "prometheus-alertmanager[817]:",
      "timestamp": "2024-09-30T04:33:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[\"2024-09-30T04:33:58.588\", \"INFO\", \"ubuntupro.daemon.poll_for_pro_license\", \"poll_for_pro_license\", 80, \"Configured to not poll for pro license, shutting down\", {}]",
      "process": "python3[893]:",
      "timestamp": "2024-09-30T04:33:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[\"2024-09-30T04:33:58.589\", \"INFO\", \"ubuntupro.daemon\", \"main\", 76, \"daemon ending\", {}]",
      "process": "python3[893]:",
      "timestamp": "2024-09-30T04:33:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started MySQL Community Server.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:59"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Grafana instance.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:59"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Zabbix Server...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:59"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Zabbix Server.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:59"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Cloud-init: Final Stage...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:59"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Update UTMP about System Runlevel Changes...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:59"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Update UTMP about System Runlevel Changes.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:33:59"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Cloud-init v. 24.2-0ubuntu1~20.04.1 running 'modules:final' at Mon, 30 Sep 2024 04:34:00 +0000. Up 31.80 seconds.",
      "process": "cloud-init[2762]:",
      "timestamp": "2024-09-30T04:34:00"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Cloud-init v. 24.2-0ubuntu1~20.04.1 finished at Mon, 30 Sep 2024 04:34:00 +0000. Datasource DataSourceAzure [seed=/var/lib/waagent]. Up 31.94 seconds",
      "process": "cloud-init[2762]:",
      "timestamp": "2024-09-30T04:34:00"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Cloud-init: Final Stage.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:34:00"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stdout]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Processor architecture idetified as x86_64",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Using NetworkWatcherAgent present at /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Checking if system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "This system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Azure Network Watcher Agent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Force kill all NetworkWatcher Agent related processes",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting AzureNetworkWatcherAgent...Started[0]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stderr]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly NETWORKWATCHERAGENT_PROCESS_NAME=NetworkWatcherA",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly NWAPIDFILE=/var/run/AzureNetworkWatcherAgent.pid",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ pwd",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly NETWORKWATCHERAGENT_ROOT_DIR=/var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly ARCHITECTURE=x86_64",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ NETWORKWATCHERAGENT_BINARY_LOCATION=/var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Processor architecture idetified as x86_64",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Using NetworkWatcherAgent present at /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ GLIBC_MINVERSION=2.17",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ GLIBC_MINVERSION_MAJOR=2",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ GLIBC_MINVERSION_MINOR=17",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Checking if system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ -f /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent Test /service /autoStart",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 0 -ne 0 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ ldd --version",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ output=ldd (Ubuntu GLIBC 2.31-0ubuntu9.16) 2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Copyright (C) 2020 Free Software Foundation, Inc.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "This is free software; see the source for copying conditions. There is NO",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Written by Roland McGrath and Ulrich Drepper.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 0 -eq 0 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Copyright (C) 2020 Free Software Foundation, Inc.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "This is free software; see the source for copying conditions. There is NO",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Written by Roland McGrath and Ulrich Drepper.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ awk /ldd/{print $NF}",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ thisversion=2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_version_supported 2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ curversion=2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ local hasdot=0",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ local delim=.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ hasdot=1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 1 -eq 1 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ cut -d . -f 1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ firstval=2",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 2 -gt 2 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 2 -lt 2 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ cut -d . -f 2",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ secondval=31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ return 1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 1 -eq 1 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ return 1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 1 -eq 0 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo This system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ enable",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_current_agent_running",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ ! -f /var/run/AzureNetworkWatcherAgent.pid ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ return 1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Starting Azure Network Watcher Agent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ start_agent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ forceKillOldAgent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ pkill -SIGKILL NetworkWatcherA",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ /etc/init.d/AzureNetworkWatcherAgent start",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ sleep 7s",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ exit 0",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.640131Z INFO ExtHandler ExtHandler Downloading extension manifest",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.670529Z INFO ExtHandler [Microsoft.CPlat.Core.RunCommandLinux-1.0.5] Target handler state: enabled [incarnation_1]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.677740Z INFO ExtHandler [Microsoft.CPlat.Core.RunCommandLinux-1.0.5] [Enable] current handler state is: enabled",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.677967Z INFO ExtHandler [Microsoft.CPlat.Core.RunCommandLinux-1.0.5] Update settings file: 6.settings",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.678387Z INFO ExtHandler [Microsoft.CPlat.Core.RunCommandLinux-1.0.5] Requested extension state: enabled",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.686277Z INFO ExtHandler [Microsoft.CPlat.Core.RunCommandLinux-1.0.5] Executing command: /var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5/bin/run-command-shim enable with environment variables: {\"AZURE_GUEST_AGENT_UNINSTALL_CMD_EXIT_CODE\": \"NOT_RUN\", \"AZURE_GUEST_AGENT_EXTENSION_PATH\": \"/var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5\", \"AZURE_GUEST_AGENT_EXTENSION_VERSION\": \"1.0.5\", \"AZURE_GUEST_AGENT_WIRE_PROTOCOL_ADDRESS\": \"168.63.129.16\", \"ConfigSequenceNumber\": \"6\", \"AZURE_GUEST_AGENT_EXTENSION_SUPPORTED_FEATURES\": \"[{\\\"Key\\\": \\\"ExtensionTelemetryPipeline\\\", \\\"Value\\\": \\\"1.0\\\"}]\"}",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.691138Z INFO ExtHandler ExtHandler Started tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/cpu,cpuacct/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:03.691300Z INFO ExtHandler ExtHandler Started tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/memory/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice Slice for Azure VM extension Microsoft.CPlat.Core.RunCommandLinux-1.0.5.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started /var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5/bin/run-command-shim enable.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:34:03"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.993870945Z level=info msg=\"Config loaded from\" file=/usr/share/grafana/conf/defaults.ini",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.993914941Z level=info msg=\"Config loaded from\" file=/etc/grafana/grafana.ini",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.99392744Z level=info msg=\"Config overridden from command line\" arg=\"default.paths.data=/var/lib/grafana\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.993937439Z level=info msg=\"Config overridden from command line\" arg=\"default.paths.logs=/var/log/grafana\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.993947638Z level=info msg=\"Config overridden from command line\" arg=\"default.paths.plugins=/var/lib/grafana/plugins\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.993959336Z level=info msg=\"Config overridden from command line\" arg=\"default.paths.provisioning=/etc/grafana/provisioning\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.993969635Z level=info msg=Target target=[all]",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.993992733Z level=info msg=\"Path Home\" path=/usr/share/grafana",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.994009631Z level=info msg=\"Path Data\" path=/var/lib/grafana",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.994032529Z level=info msg=\"Path Logs\" path=/var/log/grafana",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.994050827Z level=info msg=\"Path Plugins\" path=/var/lib/grafana/plugins",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.994060626Z level=info msg=\"Path Provisioning\" path=/etc/grafana/provisioning",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=settings t=2024-09-30T04:34:03.994077425Z level=info msg=\"App mode production\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=featuremgmt t=2024-09-30T04:34:03.994681764Z level=info msg=FeatureToggles exploreMetrics=true panelMonitoring=true logsExploreTableVisualisation=true topnav=true publicDashboards=true prometheusAzureOverrideAudience=true prometheusConfigOverhaulAuth=true alertingInsights=true dataplaneFrontendFallback=true prometheusDataplane=true correlations=true cloudWatchRoundUpEndTime=true lokiQuerySplitting=true lokiQueryHints=true cloudWatchNewLabelParsing=true recoveryThreshold=true prometheusMetricEncyclopedia=true recordedQueriesMulti=true formatString=true lokiMetricDataplane=true awsAsyncQueryCaching=true alertingNoDataErrorExecution=true dashgpt=true nestedFolders=true lokiStructuredMetadata=true transformationsRedesign=true alertingSimplifiedRouting=true tlsMemcached=true annotationPermissionUpdate=true managedPluginsInstall=true logsInfiniteScrolling=true autoMigrateXYChartPanel=true cloudWatchCrossAccountQuerying=true transformationsVariableSupport=true logRowsPopoverMenu=true influxdbBackendMigration=true logsContextDatasourceUi=true addFieldFromCalculationStatFunctions=true ssoSettingsApi=true groupToNestedTableTransformation=true kubernetesPlaylists=true angularDeprecationUI=true",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=migrator t=2024-09-30T04:34:04.189789791Z level=info msg=\"Locking database\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=migrator t=2024-09-30T04:34:04.272206201Z level=info msg=\"migrations completed\" performed=0 skipped=594 duration=1.212281ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=migrator t=2024-09-30T04:34:04.272957827Z level=info msg=\"Unlocking database\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:04"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stdout]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Not writing a placeholder status file, already exists: /var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5/status/6.status",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ nohup /var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5/bin/run-command-extension enable",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=2024-09-30T04:34:04Z version=v1.0.4/git@b3be41d-dirty operation=enable seq=6 event=start",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=2024-09-30T04:34:04Z version=v1.0.4/git@b3be41d-dirty operation=enable seq=6 event=pre-check",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=2024-09-30T04:34:04Z version=v1.0.4/git@b3be41d-dirty operation=enable seq=6 event=\"comparing seqnum\" path=mrseq",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "\"this",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stderr]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:05.695762Z INFO ExtHandler ExtHandler Downloading extension manifest",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:05.729096Z INFO ExtHandler [Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0] Target handler state: enabled [incarnation_1]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:05.738133Z INFO ExtHandler [Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0] Requested extension state: enabled",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:05.746107Z INFO ExtHandler [Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0] Enable extension: [main/handle.sh enable]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:05.750440Z INFO ExtHandler ExtHandler Started extension in unit 'enable_4847bc57-9e4f-4c76-bffa-b6dda1db47be.scope'",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice Slice for Azure VM extension Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started /var/lib/waagent/Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0/main/handle.sh enable.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T04:34:05.807127337Z level=info msg=\"Update check succeeded\" duration=283.330338ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:07.753815Z INFO ExtHandler [Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0] Command: main/handle.sh enable",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stdout]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Information: Space available in event directory : 39981250B",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Information: Dispose(), called on EventLogger. Event processing is terminating...",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Information: Event Logger has terminated",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stderr]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:07.768951Z INFO ExtHandler ExtHandler ProcessExtensionsGoalState completed [incarnation_1 13383 ms]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:07.804947Z INFO ExtHandler ExtHandler Looking for existing remote access users.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:34:07.835506Z INFO ExtHandler ExtHandler [HEARTBEAT] Agent WALinuxAgent-2.11.1.12 is running as the goal state agent [DEBUG HeartbeatCounter: 0;HeartbeatId: 7C220506-9CCE-4B65-9D20-2F9C01DA406F;DroppedPackets: 0;UpdateGSErrors: 0;AutoUpdate: 1]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:34:07"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:10.821Z caller=compact.go:530 level=info component=tsdb msg=\"write block\" mint=1727524800000 maxt=1727532000000 ulid=01J90KA4ZS55FZ936ADFB7TCB2 duration=268.221663ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:10"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:10.832Z caller=head.go:1325 level=info component=tsdb msg=\"Head GC completed\" caller=truncateMemory duration=9.144023ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:10"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:11.004Z caller=compact.go:530 level=info component=tsdb msg=\"write block\" mint=1727532000593 maxt=1727539200000 ulid=01J90KA58HT7D2FRQMFK9W7GVT duration=170.941544ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:11"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:11.017Z caller=head.go:1325 level=info component=tsdb msg=\"Head GC completed\" caller=truncateMemory duration=11.983825ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:11"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:11.019Z caller=checkpoint.go:100 level=info component=tsdb msg=\"Creating checkpoint\" from_segment=872 to_segment=874 mint=1727539200000",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:11"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:11.391Z caller=head.go:1287 level=info component=tsdb msg=\"WAL checkpoint complete\" first=872 last=874 duration=372.564661ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:11"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:12.166Z caller=compact.go:471 level=info component=tsdb msg=\"compact blocks\" count=3 mint=1727503200593 maxt=1727524800000 ulid=01J90KA5T01A9SZV8AEAF6ZC1J sources=\"[01J8VXQRQV37MGYCZ6TD0QW7CW 01J8W4KG18GKDGH6J0HF7BZ006 01J8WBF77DAMPCN52FE2FQAB55]\" duration=773.397536ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:12"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:12.173Z caller=db.go:1665 level=info component=tsdb msg=\"Deleting obsolete block\" block=01J8WBF77DAMPCN52FE2FQAB55",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:12"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:12.181Z caller=db.go:1665 level=info component=tsdb msg=\"Deleting obsolete block\" block=01J8W4KG18GKDGH6J0HF7BZ006",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:12"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T04:34:12.190Z caller=db.go:1665 level=info component=tsdb msg=\"Deleting obsolete block\" block=01J8VXQRQV37MGYCZ6TD0QW7CW",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T04:34:12"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 50.703215] hv_balloon: Max. dynamic memory size: 16384 MB",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:34:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=ngalert.state.historian backend=annotations rule_uid=bdrf3k8dy0bgga org_id=1 t=2024-09-30T04:34:30.074501332Z level=error msg=\"Error getting dashboard for alert annotation\" dashboardUID=rpfmFFz7z error=\"Dashboard not found\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:30"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=infra.usagestats t=2024-09-30T04:34:58.569388174Z level=info msg=\"Usage stats are ready to report\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:34:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[2959]:",
      "timestamp": "2024-09-30T04:35:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[system] Activating via systemd: service name='org.freedesktop.timedate1' unit='dbus-org.freedesktop.timedate1.service' requested by ':1.10' (uid=0 pid=880 comm=\"/usr/lib/snapd/snapd \" label=\"unconfined\")",
      "process": "dbus-daemon[762]:",
      "timestamp": "2024-09-30T04:38:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Time & Date Service...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:38:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Time & Date Service.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:38:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:38:54.272228Z INFO CollectLogsHandler ExtHandler WireServer endpoint 168.63.129.16 read from file",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:38:54.272513Z INFO CollectLogsHandler ExtHandler Wire server endpoint:168.63.129.16",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:38:54.272767Z INFO CollectLogsHandler ExtHandler Starting log collection...",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice azure-walinuxagent.slice.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice Slice for Azure VM Agent Periodic Log Collector.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started /usr/bin/python3 -u bin/WALinuxAgent-2.11.1.12-py3.9.egg -collect-logs.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:38:54.435081Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/cpu,cpuacct/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:38:54.435301Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/memory/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:38:54.435457Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0 [/sys/fs/cgroup/cpu,cpuacct/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.Azure.RecoveryServices.VMSnapshotLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:38:54.435624Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0 [/sys/fs/cgroup/memory/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.Azure.RecoveryServices.VMSnapshotLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:38:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "storehelpers.go:923: cannot refresh: snap has no updates available: \"core20\", \"lxd\", \"snapd\"",
      "process": "snapd[880]:",
      "timestamp": "2024-09-30T04:38:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Clean php session files...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:39:00"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Clean php session files.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:39:00"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD ( [ -x /usr/lib/php/sessionclean ] && if [ ! -d /run/systemd/system ]; then /usr/lib/php/sessionclean; fi)",
      "process": "CRON[3117]:",
      "timestamp": "2024-09-30T04:39:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "collect-logs.scope: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:39:13"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:39:13.671300Z INFO CollectLogsHandler ExtHandler Disabling periodic log collection until service restart due to exceeded process memory limit.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T04:39:13"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "185.125.190.57 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:43:39"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "185.125.190.58 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:43:47"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "162.159.200.123 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:43:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "95.216.144.226 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:44:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "95.216.192.15 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:44:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T04:44:05.564367738Z level=info msg=\"Completed cleanup jobs\" duration=37.783775ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:44:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T04:44:06.063694304Z level=info msg=\"Update check succeeded\" duration=255.309729ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:44:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[3306]:",
      "timestamp": "2024-09-30T04:45:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "192.46.215.60 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:47:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "129.154.46.154 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:48:22"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "162.159.200.1 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:48:22"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "143.244.134.227 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:48:27"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Cleanup of Temporary Directories...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:48:29"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Cleanup of Temporary Directories.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:48:29"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[3427]:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 916.842356] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#23 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 916.842559] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#24 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 916.842694] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#25 cmd 0xb7 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 916.842838] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#26 cmd 0x37 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 917.005918] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#33 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 917.006228] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#35 cmd 0xb7 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T04:48:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T04:48:48.003540Z INFO Daemon Agent WALinuxAgent-2.11.1.12 launched with command 'python3 -u bin/WALinuxAgent-2.11.1.12-py3.9.egg -run-exthandlers' is successfully running",
      "process": "python3[900]:",
      "timestamp": "2024-09-30T04:48:48"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "192.46.215.141 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:50:39"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "192.46.211.253 local addr 10.2.0.23 -> <null>",
      "process": "ntpd[856]:",
      "timestamp": "2024-09-30T04:50:40"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T04:54:05.547935763Z level=info msg=\"Completed cleanup jobs\" duration=21.817245ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:54:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T04:54:06.068140959Z level=info msg=\"Update check succeeded\" duration=260.443647ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T04:54:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[4016]:",
      "timestamp": "2024-09-30T04:55:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[4279]:",
      "timestamp": "2024-09-30T05:03:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:03:45"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T05:04:05.558485533Z level=info msg=\"Completed cleanup jobs\" duration=31.956363ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:04:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T05:04:06.085051668Z level=info msg=\"Update check succeeded\" duration=277.756406ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:04:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T05:04:09.344288Z INFO ExtHandler ExtHandler [HEARTBEAT] Agent WALinuxAgent-2.11.1.12 is running as the goal state agent [DEBUG HeartbeatCounter: 1;HeartbeatId: 7C220506-9CCE-4B65-9D20-2F9C01DA406F;DroppedPackets: 0;UpdateGSErrors: 0;AutoUpdate: 1]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T05:04:09"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=infra.usagestats t=2024-09-30T05:04:58.580872534Z level=info msg=\"Usage stats are ready to report\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:04:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[4723]:",
      "timestamp": "2024-09-30T05:05:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD ( [ -x /usr/lib/php/sessionclean ] && if [ ! -d /run/systemd/system ]; then /usr/lib/php/sessionclean; fi)",
      "process": "CRON[4843]:",
      "timestamp": "2024-09-30T05:09:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Clean php session files...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:09:02"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Clean php session files.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:09:02"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T05:14:05.542426369Z level=info msg=\"Completed cleanup jobs\" duration=15.991733ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:14:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T05:14:06.061738906Z level=info msg=\"Update check succeeded\" duration=253.820852ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:14:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[5059]:",
      "timestamp": "2024-09-30T05:15:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD ( cd / && run-parts --report /etc/cron.hourly)",
      "process": "CRON[5106]:",
      "timestamp": "2024-09-30T05:17:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[5162]:",
      "timestamp": "2024-09-30T05:18:47"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 2719.172922] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#11 cmd 0xb7 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:18:47"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 2719.173364] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#12 cmd 0x37 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:18:47"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:18:47"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Daily apt upgrade and clean activities...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:23:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Daily apt upgrade and clean activities.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:23:18"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T05:24:05.560199843Z level=info msg=\"Completed cleanup jobs\" duration=33.809367ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:24:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T05:24:06.063761266Z level=info msg=\"Update check succeeded\" duration=255.382497ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:24:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[5787]:",
      "timestamp": "2024-09-30T05:25:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[6014]:",
      "timestamp": "2024-09-30T05:33:48"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 3620.247139] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#54 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:33:48"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 3620.247750] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#56 cmd 0xb7 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:33:48"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 3620.247921] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#57 cmd 0x37 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:33:48"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 3620.431758] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#11 cmd 0x37 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:33:49"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:33:49"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T05:33:58.791157Z INFO ExtHandler ExtHandler Downloading agent manifest",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T05:33:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T05:34:05.541891084Z level=info msg=\"Completed cleanup jobs\" duration=16.226634ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T05:34:06.089151943Z level=info msg=\"Update check succeeded\" duration=281.111349ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:34:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T05:34:10.875175Z INFO ExtHandler ExtHandler [HEARTBEAT] Agent WALinuxAgent-2.11.1.12 is running as the goal state agent [DEBUG HeartbeatCounter: 2;HeartbeatId: 7C220506-9CCE-4B65-9D20-2F9C01DA406F;DroppedPackets: 0;UpdateGSErrors: 0;AutoUpdate: 1]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T05:34:10"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=infra.usagestats t=2024-09-30T05:34:58.580513696Z level=info msg=\"Usage stats are ready to report\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:34:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[6452]:",
      "timestamp": "2024-09-30T05:35:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Clean php session files...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:39:00"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Clean php session files.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:39:00"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD ( [ -x /usr/lib/php/sessionclean ] && if [ ! -d /run/systemd/system ]; then /usr/lib/php/sessionclean; fi)",
      "process": "CRON[6674]:",
      "timestamp": "2024-09-30T05:39:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T05:44:05.547929821Z level=info msg=\"Completed cleanup jobs\" duration=21.609311ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:44:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T05:44:06.062593094Z level=info msg=\"Update check succeeded\" duration=255.265945ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:44:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[6909]:",
      "timestamp": "2024-09-30T05:45:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[7052]:",
      "timestamp": "2024-09-30T05:48:49"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 4521.682767] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#38 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:48:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 4521.683045] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#39 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:48:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 4521.683207] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#40 cmd 0xb7 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:48:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 4521.683339] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#41 cmd 0x37 status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T05:48:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:48:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T05:54:05.546502144Z level=info msg=\"Completed cleanup jobs\" duration=20.829016ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:54:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T05:54:06.06299075Z level=info msg=\"Update check succeeded\" duration=254.853466ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T05:54:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[7668]:",
      "timestamp": "2024-09-30T05:55:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Message of the Day...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:58:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "* Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s",
      "process": "50-motd-news[7834]:",
      "timestamp": "2024-09-30T05:58:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "just raised the bar for easy, resilient and secure K8s cluster deployment.",
      "process": "50-motd-news[7834]:",
      "timestamp": "2024-09-30T05:58:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "https://ubuntu.com/engage/secure-kubernetes-at-the-edge",
      "process": "50-motd-news[7834]:",
      "timestamp": "2024-09-30T05:58:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Message of the Day.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T05:58:53"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[8033]:",
      "timestamp": "2024-09-30T06:03:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:03:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T06:04:05.548018148Z level=info msg=\"Completed cleanup jobs\" duration=21.278013ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:04:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T06:04:06.170155214Z level=info msg=\"Update check succeeded\" duration=362.049125ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:04:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:04:12.265197Z INFO ExtHandler ExtHandler [HEARTBEAT] Agent WALinuxAgent-2.11.1.12 is running as the goal state agent [DEBUG HeartbeatCounter: 3;HeartbeatId: 7C220506-9CCE-4B65-9D20-2F9C01DA406F;DroppedPackets: 0;UpdateGSErrors: 0;AutoUpdate: 1]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:04:12"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=infra.usagestats t=2024-09-30T06:04:58.580035145Z level=info msg=\"Usage stats are ready to report\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:04:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[8478]:",
      "timestamp": "2024-09-30T06:05:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Daily apt upgrade and clean activities...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:07:09"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Daily apt upgrade and clean activities.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:07:10"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD ( [ -x /usr/lib/php/sessionclean ] && if [ ! -d /run/systemd/system ]; then /usr/lib/php/sessionclean; fi)",
      "process": "CRON[8677]:",
      "timestamp": "2024-09-30T06:09:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Clean php session files...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:09:02"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Clean php session files.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:09:02"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T06:14:05.541673587Z level=info msg=\"Completed cleanup jobs\" duration=15.018038ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:14:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T06:14:06.062490559Z level=info msg=\"Update check succeeded\" duration=254.244661ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:14:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[8935]:",
      "timestamp": "2024-09-30T06:15:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD ( cd / && run-parts --report /etc/cron.hourly)",
      "process": "CRON[8994]:",
      "timestamp": "2024-09-30T06:17:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[9063]:",
      "timestamp": "2024-09-30T06:18:50"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:18:51"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T06:24:05.546184231Z level=info msg=\"Completed cleanup jobs\" duration=20.111118ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:24:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T06:24:06.270759667Z level=info msg=\"Update check succeeded\" duration=462.661308ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:24:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[9629]:",
      "timestamp": "2024-09-30T06:25:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (test -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily ))",
      "process": "CRON[9630]:",
      "timestamp": "2024-09-30T06:25:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:24"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:24"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting D-Bus User Message Bus Socket.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on GnuPG network certificate management daemon.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on debconf communication socket.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on REST API socket for snapd user session agent.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on D-Bus User Message Bus Socket.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Startup finished in 126ms.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Session 20 of user azureuser.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "session-20.scope: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:28"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopping User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Basic System.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Paths.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Sockets.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Timers.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed D-Bus User Message Bus Socket.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed GnuPG network certificate management daemon.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed debconf communication socket.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed REST API socket for snapd user session agent.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Exit the Session.",
      "process": "systemd[9838]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Removed slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:30:38"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[10064]:",
      "timestamp": "2024-09-30T06:33:52"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[ 7224.017587] hv_storvsc f8b3781a-1e82-4818-a1c3-63d806ec15bb: tag#17 cmd 0x4d status: scsi 0x2 srb 0x86 hv 0xc0000001",
      "process": "kernel:",
      "timestamp": "2024-09-30T06:33:52"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:33:52"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:34:01.619728Z INFO ExtHandler ExtHandler Downloading agent manifest",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:34:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T06:34:05.614842538Z level=info msg=\"Completed cleanup jobs\" duration=88.699766ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:34:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T06:34:06.059930162Z level=info msg=\"Update check succeeded\" duration=251.744252ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:34:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T06:34:11.739Z caller=compact.go:521 level=info component=tsdb msg=\"write block resulted in empty block\" mint=1727667249748 maxt=1727668800000 duration=54.293795ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T06:34:11"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "ts=2024-09-30T06:34:11.752Z caller=head.go:1325 level=info component=tsdb msg=\"Head GC completed\" caller=truncateMemory duration=10.295261ms",
      "process": "prometheus[844]:",
      "timestamp": "2024-09-30T06:34:11"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:34:13.777129Z INFO ExtHandler ExtHandler [HEARTBEAT] Agent WALinuxAgent-2.11.1.12 is running as the goal state agent [DEBUG HeartbeatCounter: 4;HeartbeatId: 7C220506-9CCE-4B65-9D20-2F9C01DA406F;DroppedPackets: 0;UpdateGSErrors: 0;AutoUpdate: 1]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:34:13"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=infra.usagestats t=2024-09-30T06:34:58.580785179Z level=info msg=\"Usage stats are ready to report\"",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:34:58"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[10496]:",
      "timestamp": "2024-09-30T06:35:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD ( [ -x /usr/lib/php/sessionclean ] && if [ ! -d /run/systemd/system ]; then /usr/lib/php/sessionclean; fi)",
      "process": "CRON[10599]:",
      "timestamp": "2024-09-30T06:39:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting Clean php session files...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:39:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Clean php session files.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:39:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:21.025880Z INFO ExtHandler",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:21"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:21.026060Z INFO ExtHandler Fetched new vmSettings [HostGAPlugin correlation ID: b746e0ec-e814-4a81-ac24-620540097f42 eTag: 15354895144685803481 source: FastTrack]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:21"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:21.028328Z INFO ExtHandler ExtHandler ProcessExtensionsGoalState started [etag_15354895144685803481 channel: HostGAPlugin source: FastTrack activity: 62d15107-52a7-40a4-949e-62496ef41ca7 correlation 092ebc85-7bf9-4fcf-abf4-464df4482628 created: 2024-09-30T06:39:17.609077Z]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:21"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:21.029027Z INFO ExtHandler ExtHandler Downloading extension manifest",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:21"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:21.059705Z INFO ExtHandler [Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1] Update settings file: 0.settings",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:21"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:21.065008Z INFO ExtHandler ExtHandler Started extension in unit 'enable_6979dc55-2029-4666-b290-921b6a140390.scope'",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:21"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stdout]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Processor architecture idetified as x86_64",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Using NetworkWatcherAgent present at /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Checking if system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "This system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Last logged agent pid=2468",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "PID TTY TIME CMD",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2469 ? 00:00:01 NetworkWatcherA",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Current Azure Network Watcher Agent already running",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stderr]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly NETWORKWATCHERAGENT_PROCESS_NAME=NetworkWatcherA",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly NWAPIDFILE=/var/run/AzureNetworkWatcherAgent.pid",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ pwd",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly NETWORKWATCHERAGENT_ROOT_DIR=/var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ readonly ARCHITECTURE=x86_64",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ NETWORKWATCHERAGENT_BINARY_LOCATION=/var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Processor architecture idetified as x86_64",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Using NetworkWatcherAgent present at /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ GLIBC_MINVERSION=2.17",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ GLIBC_MINVERSION_MAJOR=2",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ GLIBC_MINVERSION_MINOR=17",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Checking if system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ -f /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent Test /service /autoStart",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 0 -ne 0 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ ldd --version",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ output=ldd (Ubuntu GLIBC 2.31-0ubuntu9.16) 2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Copyright (C) 2020 Free Software Foundation, Inc.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "This is free software; see the source for copying conditions. There is NO",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Written by Roland McGrath and Ulrich Drepper.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 0 -eq 0 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo ldd (Ubuntu GLIBC 2.31-0ubuntu9.16) 2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Copyright (C) 2020 Free Software Foundation, Inc.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "This is free software; see the source for copying conditions. There is NO",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Written by Roland McGrath and Ulrich Drepper.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ awk /ldd/{print $NF}",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ thisversion=2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_version_supported 2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ curversion=2.31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ local hasdot=0",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ local delim=.",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ hasdot=1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 1 -eq 1 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ cut -d . -f 1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ firstval=2",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 2 -gt 2 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 2 -lt 2 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ cut -d . -f 2",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ secondval=31",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ return 1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 1 -eq 1 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ return 1",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 1 -eq 0 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo This system is supported",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ enable",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_current_agent_running",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ ! -f /var/run/AzureNetworkWatcherAgent.pid ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ cat /var/run/AzureNetworkWatcherAgent.pid",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ NWAPID=2468",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Last logged agent pid=2468",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_agent_running 2468",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ ps --pid 2468 -o command=",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ PROCESS_COMMANDLINE=/var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent Monitor /service",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ [ 0 -ne 0 ]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_process_commandline_networkwatcheragent /var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent Monitor /service",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ return 0",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ is_agent_forked 2468",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ ps --ppid 2468",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ echo Current Azure Network Watcher Agent already running",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ exit 0",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:23.071659Z INFO ExtHandler ExtHandler Downloading extension manifest",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:23.097978Z INFO ExtHandler [Microsoft.CPlat.Core.RunCommandLinux-1.0.5] Update settings file: 6.settings",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:23.104505Z INFO ExtHandler ExtHandler Started tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/cpu,cpuacct/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:23.104733Z INFO ExtHandler ExtHandler Started tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/memory/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started /var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5/bin/run-command-shim enable.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "enable_e39170ca-da11-4818-b97b-c6551a21c59e.scope: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:39:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stdout]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Not writing a placeholder status file, already exists: /var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5/status/6.status",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "+ nohup /var/lib/waagent/Microsoft.CPlat.Core.RunCommandLinux-1.0.5/bin/run-command-extension enable",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=2024-09-30T06:39:23Z version=v1.0.4/git@b3be41d-dirty operation=enable seq=6 event=start",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=2024-09-30T06:39:23Z version=v1.0.4/git@b3be41d-dirty operation=enable seq=6 event=pre-check",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "time=2024-09-30T06:39:23Z version=v1.0.4/git@b3be41d-dirty operation=enable seq=6 event=\"comparing seqnum\" path=mrseq",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "\"this",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stderr]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:25.109577Z INFO ExtHandler ExtHandler Downloading extension manifest",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started /var/lib/waagent/Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0/main/handle.sh enable.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:39:25"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stdout]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:27"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Information: Space available in event directory : 39981250B",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:27"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Information: Dispose(), called on EventLogger. Event processing is terminating...",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:27"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Information: Event Logger has terminated",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:27"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "[stderr]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:27"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:39:27.159929Z INFO ExtHandler ExtHandler ProcessExtensionsGoalState completed [etag_15354895144685803481 6131 ms]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:39:27"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting D-Bus User Message Bus Socket.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on GnuPG network certificate management daemon.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on debconf communication socket.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on REST API socket for snapd user session agent.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on D-Bus User Message Bus Socket.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Startup finished in 88ms.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Session 24 of user azureuser.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:14"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "session-24.scope: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:15"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Session 26 of user azureuser.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:16"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "session-26.scope: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:16"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopping User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Basic System.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Paths.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Sockets.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Timers.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed D-Bus User Message Bus Socket.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed GnuPG network certificate management daemon.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed debconf communication socket.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed REST API socket for snapd user session agent.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Exit the Session.",
      "process": "systemd[10830]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Removed slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:41:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:43:55.424307Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/cpu,cpuacct/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:43:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:43:55.424546Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.CPlat.Core.RunCommandLinux-1.0.5 [/sys/fs/cgroup/memory/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.CPlat.Core.RunCommandLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:43:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:43:55.424647Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0 [/sys/fs/cgroup/cpu,cpuacct/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.Azure.RecoveryServices.VMSnapshotLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:43:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "2024-09-30T06:43:55.424744Z INFO MonitorHandler ExtHandler Stopped tracking cgroup Microsoft.Azure.RecoveryServices.VMSnapshotLinux-1.0.9220.0 [/sys/fs/cgroup/memory/azure.slice/azure-vmextensions.slice/azure-vmextensions-Microsoft.Azure.RecoveryServices.VMSnapshotLinux.slice]",
      "process": "python3[1611]:",
      "timestamp": "2024-09-30T06:43:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T06:44:05.54219427Z level=info msg=\"Completed cleanup jobs\" duration=15.69594ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:44:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T06:44:06.073532815Z level=info msg=\"Update check succeeded\" duration=265.458973ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:44:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[11087]:",
      "timestamp": "2024-09-30T06:45:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "awk: cmd. line:1: warning: regexp escape sequence `\\\"' is not a known regexp operator",
      "process": "bash[11191]:",
      "timestamp": "2024-09-30T06:48:54"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "prometheus-node-exporter-smartmon.service: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:48:55"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=cleanup t=2024-09-30T06:54:05.544718339Z level=info msg=\"Completed cleanup jobs\" duration=18.384323ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:54:05"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "logger=plugins.update.checker t=2024-09-30T06:54:06.060165064Z level=info msg=\"Update check succeeded\" duration=252.034937ms",
      "process": "grafana[2742]:",
      "timestamp": "2024-09-30T06:54:06"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "(root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)",
      "process": "CRON[11736]:",
      "timestamp": "2024-09-30T06:55:01"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:18"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:18"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting D-Bus User Message Bus Socket.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on GnuPG network certificate management daemon.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on debconf communication socket.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on REST API socket for snapd user session agent.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on D-Bus User Message Bus Socket.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Startup finished in 118ms.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Session 29 of user azureuser.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:19"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "session-29.scope: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:22"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopping User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Basic System.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Paths.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Sockets.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Timers.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed D-Bus User Message Bus Socket.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed GnuPG network certificate management daemon.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed debconf communication socket.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed REST API socket for snapd user session agent.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Exit the Session.",
      "process": "systemd[11776]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Removed slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T06:56:32"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Created slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Starting D-Bus User Message Bus Socket.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on GnuPG network certificate management daemon.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on debconf communication socket.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on REST API socket for snapd user session agent.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Listening on D-Bus User Message Bus Socket.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Startup finished in 100ms.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Started Session 31 of user azureuser.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:00:23"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "session-31.scope: Succeeded.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:01:16"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopping User Manager for UID 1000...",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Basic System.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Paths.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Sockets.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped target Timers.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed D-Bus User Message Bus Socket.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed GnuPG network certificate management daemon.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed debconf communication socket.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Closed REST API socket for snapd user session agent.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Finished Exit the Session.",
      "process": "systemd[11967]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Stopped User Manager for UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:01:26"
    },
    {
      "hostname": "CIS-Demo-Ubuntu-VM3",
      "message": "Removed slice User Slice of UID 1000.",
      "process": "systemd[1]:",
      "timestamp": "2024-09-30T07:01:26"
    }
  ],
};



