import { useLocation, useNavigate } from "react-router-dom";
// import DashboardIcon from "../assets/dashboard.svg";
// import DiskPerformanceIcon from "../assets/diskPerformance.svg";
// import InstalledAppsIcon from "../assets/installedApps.svg";
// import RunningAppsIcon from "../assets/runningApps.svg";
// import NetworkInterfaceIcon from "../assets/networkInterface.svg";
import "./CustomCss/sideBar.css";

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const getLinkClasses = (path: string): string => {
    return location.pathname === path
      ? "flex items-center p-2 text-white background rounded-lg hover:background group"
      : "flex items-center p-2 textColor rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group";
  };

  // const getIconClasses = (path: string): string => {
  //   return location.pathname === path
  //     ? "w-5 h-5 text-white transition duration-75 group-hover:text-white"
  //     : "w-5 h-5 textColor transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
  // };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white shadow-lg border-r border-gray-200"
      aria-label="Sidebar"
      style={{ width: "19vw" }}
    >
      <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
        <div
          className=" ExampleCSS flex items-center ps-2.5 mb-5 cursor-pointer"
          onClick={() => handleNavigation("/scanServer")}
        >
          <span
            className="self-center text-2xl whitespace-nowrap dark:text-white"
            style={{ color: "#006E74", marginTop: "7px" }}
          >
            <b>UST</b>&nbsp;DiscoveryTool
          </span>
        </div>
        <ul className="space-y-2 font-medium" style={{ marginTop: "80px" }}>
          <li className="clickable">
            <div
              className={getLinkClasses("/dashboard")}
              onClick={() => handleNavigation("/dashboard")}
            >
              {/* <DashboardIcon
              // className={getIconClasses("/dashboard")}
              // fill={location.pathname === "/dashboard" ? "white" : "#0097AC"}
              /> */}
              <span className="ms-3">Dashboard</span>
            </div>
          </li>
          <li className="clickable">
            <div
              className={getLinkClasses("/networkInterface")}
              onClick={() => handleNavigation("/networkInterface")}
            >
              {/* <NetworkInterfaceIcon
              // className={getIconClasses("/networkInterface")}
              // fill={
              //   location.pathname === "/networkInterface"
              //     ? "white"
              //     : "#0097AC"
              // }
              /> */}
              <span className="flex-1 ms-3 whitespace-nowrap">
                Network Interface
              </span>
            </div>
          </li>
          <li className="clickable">
            <div
              className={getLinkClasses("/diskPerformance")}
              onClick={() => handleNavigation("/diskPerformance")}
            >
              {/* <DiskPerformanceIcon
              // className={getIconClasses("/diskPerformance")}
              // fill={
              //   location.pathname === "/diskPerformance" ? "white" : "#0097AC"
              // }
              /> */}
              <span className="flex-1 ms-3 whitespace-nowrap">
                Disk Performance
              </span>
            </div>
          </li>
          <li className="clickable">
            <div
              className={getLinkClasses("/installedApps")}
              onClick={() => handleNavigation("/installedApps")}
            >
              {/* <InstalledAppsIcon
              // className={getIconClasses("/installedApps")}
              // fill={
              //   location.pathname === "/installedApps" ? "white" : "#0097AC"
              // }
              /> */}
              <span className="flex-1 ms-3 whitespace-nowrap">
                Installed Apps
              </span>
            </div>
          </li>
          <li className="clickable">
            <div
              className={getLinkClasses("/runningApps")}
              onClick={() => handleNavigation("/runningApps")}
            >
              {/* <RunningAppsIcon
              // className={getIconClasses("/runningApps")}
              // fill={
              //   location.pathname === "/runningApps" ? "white" : "#0097AC"
              // }
              /> */}
              <span className="flex-1 ms-3 whitespace-nowrap">
                Running Processes
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
