
import Breadcrumbs from "./breadCrumbs";
import SideBar from "./sideBar";
import DiskPerformanceMatrix from "./DiskPerformanceMatrix";
import { useDashboard } from "./dasboardContext";

export default function DiskPerformance() {
 
  let diskPerformance = [
    {
      Device: "loop0",
      iops_read: "0.08",
      iops_write: "0.00",
      tps: "0.02",
    },
    {
      Device: "loop1",
      iops_read: "0.25",
      iops_write: "0.00",
      tps: "0.04",
    },
    {
      Device: "loop2",
      iops_read: "0.03",
      iops_write: "0.00",
      tps: "0.00",
    },
    {
      Device: "loop3",
      iops_read: "0.10",
      iops_write: "0.00",
      tps: "0.01",
    },
    {
      Device: "loop4",
      iops_read: "2.26",
      iops_write: "0.00",
      tps: "0.06",
    },
    {
      Device: "loop5",
      iops_read: "0.00",
      iops_write: "0.00",
      tps: "0.00",
    },
    {
      Device: "sda",
      iops_read: "88.81",
      iops_write: "288.87",
      tps: "35.84",
    },
    {
      Device: "sdb",
      iops_read: "1.13",
      iops_write: "59.72",
      tps: "0.10",
    },
  ];
  // const [diskPerformance, setDiskPerformance] = useState([]);

  const { data } = useDashboard();

  const breadcrumbItems = [
    { label: "Servers", url: "/scanResult" },
    { label: data && data["Server_IP"] ? data["Server_IP"] : "N/A" }
  ];

  // useEffect(() => {
  //   const disk = data?.["diskDetails"]
  //   setDiskPerformance(disk);
  // })

  
  return (
    <div className="w-screen h-screen flex flex-col">
      <SideBar />

      <div className="p-4 ml-[19vw]" style={{ overflowX: "hidden" }}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2
          className="text-teal-600 text-xl mb-4 ml-4 mt-4"
          style={{ color: "#006E74" }}
        >
          Disk Performance Metrics
        </h2>
        <div className="flex flex-wrap">
          {diskPerformance.map((item, index) => (
            <DiskPerformanceMatrix key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
