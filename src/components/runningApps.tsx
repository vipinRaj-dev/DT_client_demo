import React, {  useState } from "react";
import Breadcrumbs from "./breadCrumbs";
import SideBar from "./sideBar";
import RunningAppsTreemap from "./runningAppsTreemap";
import Pagination from "./Pagination";
import { useDashboard } from "./dasboardContext";

// Define interfaces
interface AppData {
  CPU: string;
  Memory: string;
  Process: string;
  Service: string | null;
  User: string;
}

interface RunningAppsTableProps {
  data: AppData[];
}

const RunningAppsTable: React.FC<RunningAppsTableProps> = ({ data }) => {

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Change items per page
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };
  return (
    <div
      className="overflow-x-auto"
      style={{ marginTop: "7vh", width: "76vw" }}
    >
      <table className="table w-full">
        <thead style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}>
          <tr>
            <th className="text-left">Sl NO</th>
            <th className="text-left">Process Name</th>
            <th className="text-left">User</th>
            <th className="text-left">Service</th>
            <th className="text-left">CPU</th>
            <th className="text-left">Memory</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <td className="text-left border-b">{index + 1}</td>
              <td className="text-left border-b">{row.Process}</td>
              <td className="text-left border-b">{row.User}</td>
              <td className="text-left border-b">{row.Service}</td>
              <td className="text-left border-b">{row.CPU}</td>
              <td className="text-left border-b">{row.Memory}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

const transformMemoryData = (data: any[]) => {
  // const cpuChildren = data.map((item) => ({
  //   name: item.Process,
  //   value: parseFloat(item.CPU),
  // }));

  const memoryChildren = data.map((item) => ({
    name: item.Process,
    value: parseFloat(item.Memory),
  }));

  return [
    // {
    //   name: "CPU",
    //   children: cpuChildren,
    // },
    {
      name: "Memory",
      children: memoryChildren,
    },
  ];
};

const transformCPUData = (data: any[]) => {
  const cpuChildren = data.map((item) => ({
    name: item.Process,
    value: parseFloat(item.CPU),
  }));

  // const memoryChildren = data.map((item) => ({
  //   name: item.Process,
  //   value: parseFloat(item.Memory),
  // }));

  return [
    {
      name: "CPU",
      children: cpuChildren,
    },
    // {
    //   name: "Memory",
    //   children: memoryChildren,
    // },
  ];
};

const RunningApps: React.FC = () => {


  const [activeTab, setActiveTab] = useState("CPU Graph");

  // const [running_process, setRunningProcess] = useState([]);

  const { data } = useDashboard();

  const breadcrumbItems = [
    { label: "Servers", url: "/scanResult" },
    { label: data && data["Server_IP"] ? data["Server_IP"] : "N/A" }
  ];


  // useEffect(() => {
  //   const process = data?.["processes"]
  //   setRunningProcess(process);
  // })

  const running_process = [
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/sbin/init",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kthreadd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "rcu_gp",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "rcu_par_gp",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "slub_flushwq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "netns",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/0:0H-events_highpri",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mm_percpu_wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "rcu_tasks_rude_",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "rcu_tasks_trace",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ksoftirqd/0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "rcu_sched",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "migration/0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "cpuhp/0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "cpuhp/1",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "migration/1",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ksoftirqd/1",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/1:0H-events_highpri",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "cpuhp/2",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "migration/2",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ksoftirqd/2",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/2:0H-events_highpri",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "cpuhp/3",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "migration/3",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ksoftirqd/3",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/3:0H-events_highpri",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kdevtmpfs",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "inet_frag_wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kauditd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "khungtaskd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "oom_reaper",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "writeback",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kcompactd0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ksmd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "khugepaged",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kintegrityd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kblockd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "blkcg_punt_bio",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "tpm_dev_wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ata_sff",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "md",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "edac-poller",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "hv_vmbus_con",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "hv_pri_chan",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "hv_sub_chan",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "devfreq_wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "watchdogd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/0:1H-kblockd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kswapd0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ecryptfs-kthrea",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kthrotld",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "nfit",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "scsi_eh_0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "nvme-wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "scsi_eh_1",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "scsi_tmf_0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "nvme-reset-wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "scsi_tmf_1",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "nvme-delete-wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "vfio-irqfd-clea",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mld",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/2:1H-kblockd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ipv6_addrconf",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "hv_balloon",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kstrp",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "zswap-shrink",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/u9:0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "jbd2/sda1-8",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ext4-rsv-conver",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/1:1H-kblockd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/3:1H-kblockd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.3",
      Process: "/lib/systemd/systemd-journald",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/lib/systemd/systemd-udevd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "cryptd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/lib/linux-tools/5.15.0-1053-azure/hv_kvp_daemon",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5_health2c8b",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5_page_alloc",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "bpfilter_umh",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5_cmd_2c8b:0",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5_events",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5_fw_reset_e",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5_hv_vhca",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5_fc",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5e",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mlx5e_arfs",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ib-comp-wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ib-comp-unb-wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ib_mcast",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ib_nl_sa_wq",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "mkey_cache",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kaluad",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kmpath_rdacd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kmpathd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kmpath_handlerd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.1",
      Process: "/sbin/multipathd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/lib/systemd/systemd-networkd",
      Service: null,
      User: "systemd+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/lib/systemd/systemd-resolved",
      Service: null,
      User: "systemd+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "jbd2/sdb1-8",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ext4-rsv-conver",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/lib/accountsservice/accounts-daemon",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/cron",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/bin/dbus-daemon",
      Service: null,
      User: "message+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/dovecot",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/inetd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/irqbalance",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.1",
      Process: "/usr/bin/python3",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/lib/policykit-1/polkitd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/rsyslogd",
      Service: null,
      User: "syslog",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/lib/snapd/snapd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/ntpd",
      Service: null,
      User: "ntp",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/lib/systemd/systemd-logind",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/lib/udisks2/udisksd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.1",
      Process: "/usr/bin/python3",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/atd",
      Service: null,
      User: "daemon",
    },
    {
      CPU: "0.0",
      Memory: "0.3",
      Process: "/usr/bin/containerd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/snmpd",
      Service: null,
      User: "Debian-+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/ModemManager",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/sbin/agetty",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/anvil",
      Service: null,
      User: "dovecot",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/log",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "sshd:",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/config",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/sbin/agetty",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.1",
      Process: "/usr/bin/python3",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_agentd",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_agentd:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_agentd:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_agentd:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_agentd:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_agentd:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.1",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.1",
      Memory: "0.1",
      Process: "python3",
      Service: null,
      User: "root",
    },
    {
      CPU: "2.6",
      Memory: "4.1",
      Process: "/usr/sbin/mysqld",
      Service: null,
      User: "mysql",
    },
    {
      CPU: "0.0",
      Memory: "0.5",
      Process: "/usr/bin/dockerd",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/lib/postfix/sbin/master",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "qmgr",
      Service: null,
      User: "postfix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process:
        "/var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.1",
      Process:
        "/var/lib/waagent/Microsoft.Azure.NetworkWatcher.NetworkWatcherAgentLinux-1.4.3147.1/amd64/NetworkWatcherAgent",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.1",
      Memory: "0.1",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.1",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/zabbix_server:",
      Service: null,
      User: "zabbix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/1:1-cgroup_destroy",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/3:0-cgroup_destroy",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "pickup",
      Service: null,
      User: "postfix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/stats",
      Service: null,
      User: "dovecot",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "tlsmgr",
      Service: null,
      User: "postfix",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "sshd:",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/lib/systemd/systemd",
      Service: null,
      User: "azureus+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "(sd-pam)",
      Service: null,
      User: "azureus+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "sshd:",
      Service: null,
      User: "azureus+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "-bash",
      Service: null,
      User: "azureus+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "sudo",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "-bash",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/2:0-cgroup_destroy",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/u8:1-events_unbound",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/2:2-events",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/0:0-cgroup_destroy",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/1:0-events",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/0:1-events",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/3:2-events",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/u8:2-writeback",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/u8:0-writeback",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.2",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "kworker/2:1-events",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "/usr/sbin/apache2",
      Service: null,
      User: "www-data",
    },
    {
      CPU: "0.5",
      Memory: "0.0",
      Process: "sshd:",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.6",
      Memory: "0.0",
      Process: "sshd:",
      Service: null,
      User: "azureus+",
    },
    {
      CPU: "7.0",
      Memory: "0.0",
      Process: "/lib/systemd/systemd-hostnamed",
      Service: null,
      User: "root",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "smtpd",
      Service: null,
      User: "postfix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/pop3-login",
      Service: null,
      User: "dovenull",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/auth",
      Service: null,
      User: "dovecot",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "proxymap",
      Service: null,
      User: "postfix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/pop3-login",
      Service: null,
      User: "dovenull",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "dovecot/imap-login",
      Service: null,
      User: "dovenull",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "anvil",
      Service: null,
      User: "postfix",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "bash",
      Service: null,
      User: "azureus+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "ps",
      Service: null,
      User: "azureus+",
    },
    {
      CPU: "0.0",
      Memory: "0.0",
      Process: "uniq",
      Service: null,
      User: "azureus+",
    },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const buttonClass = (tabName: string) =>
    `flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none ${activeTab === tabName
      ? "text-teal-600 bg-white"
      : "hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
    }`;

  return (
    <div className="w-screen h-screen flex flex-col">
      <SideBar />

      <div className="p-4 ml-[19vw]" style={{ overflowX: "hidden" }}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2
          className="text-teal-600 text-xl mb-4 ml-4 mt-4"
          style={{ color: "#006E74" }}
        >
          CPU and Memory Utilization
        </h2>

        <div className="flex justify-center">
          <nav className="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
            <button
              role="tab"
              type="button"
              className={buttonClass("CPU Graph")}
              onClick={() => handleTabClick("CPU Graph")}
            >
              CPU Graph
            </button>
            <button
              role="tab"
              type="button"
              className={buttonClass("Memory Graph")}
              onClick={() => handleTabClick("Memory Graph")}
            >
              Memory Graph
            </button>
            <button
              role="tab"
              type="button"
              className={buttonClass("Tabular Form")}
              onClick={() => handleTabClick("Tabular Form")}
            >
              Tabular Form
            </button>
          </nav>
        </div>

        <div className="flex flex-wrap">
          {activeTab === "CPU Graph" && (
            <RunningAppsTreemap
              data={transformCPUData(running_process)}
              width={990}
              height={600}
            />
          )}
          {activeTab === "Memory Graph" && (
            <RunningAppsTreemap
              data={transformMemoryData(running_process)}
              width={990}
              height={600}
            />
          )}
          {activeTab === "Tabular Form" && (
            <RunningAppsTable data={running_process} />
          )}
        </div>
      </div>
    </div>
  );
};
export default RunningApps;
