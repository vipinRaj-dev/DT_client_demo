import { useLocation, useNavigate } from "react-router-dom";
import "./CustomCss/sideBar.css";

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const getLinkClasses = (path: string): string => {
    return location.pathname === path
      ? "flex items-center p-2 text-white background rounded-lg hover:background group"
      : "flex items-center p-2 textColor rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group";
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white shadow-lg border-r border-gray-200"
      aria-label="Sidebar"
      style={{ width: "19vw", height: "89vh", position: "relative" }}
    >
      <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
        <ul className="space-y-2 font-medium" style={{ marginTop: "10px" }}>
          <li>
            <div
              className={getLinkClasses("/settings")}
              onClick={() => handleNavigation("/settings")}
              style={{ cursor: "pointer" }}
            >
              <span className="ms-3">Environment</span>
            </div>
          </li>

          <li>
            <div
              className={getLinkClasses("/customDevices")}
              onClick={() => handleNavigation("/customDevices")}
              style={{ cursor: "pointer" }}
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                Custom Devices
              </span>
            </div>
          </li>

          <li>
            <div
              className={getLinkClasses("/mongoDBsettings")}
              onClick={() => handleNavigation("/mongoDBsettings")}
              style={{ cursor: "pointer" }}
            >
              <span className="flex-1 ms-3 whitespace-nowrap">MongoDB</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
