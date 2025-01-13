import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userIcon from "../assets/user-profile.svg";
import config from "../config";
import "./CustomCss/navBar.css";
import axios from "../components/services/authConfig";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState<boolean>(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/logout`);
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Logout failed", response.status);
      }
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <div className="navBar bg-white text-[#006e74] flex items-center justify-between w-full px-4 relative">
      <div className="flex items-center">
        <h2
          className="text-2xl navbarTitle cursor-default"
          style={{ fontWeight: "bold" }}
        >
          UST &nbsp;
        </h2>
        <h2 className="text-2xl navbarTitle cursor-default">DiscoveryTool</h2>
        <div className="flex ml-16 gap-5">
          <h1
            className={`text-base ${
              location.pathname === "/infraSummary" ? "active-nav-item" : ""
            }`}
            onClick={() => handleNavigate("/infraSummary")}
          >
            Infra dashboard
          </h1>
          <h1
            className={`text-base ${
              location.pathname === "/scanServer" ? "active-nav-item" : ""
            }`}
            onClick={() => handleNavigate("/scanServer")}
          >
            Discovery
          </h1>
          <h1
            className={`text-base ${
              location.pathname === "/sslCertificate" ? "active-nav-item" : ""
            }`}
            onClick={() => handleNavigate("/sslCertificate")}
          >
            SSL Certificates
          </h1>
          <h1
            className={`text-base ${
              location.pathname === "/allCertificate" ? "active-nav-item" : ""
            }`}
            onClick={() => handleNavigate("/allCertificate")}
          >
            All Certificates
          </h1>

          <h1
            className={`text-base ${
              location.pathname === "/LogSettings"
                ? "active-nav-item"
                : ""
            }`}
            onClick={() => handleNavigate("/LogSettings")}
          >
           Log Analysis
          </h1>
          <h1
            className={`text-base ${
              location.pathname === "/IPAddressManagement"
                ? "active-nav-item"
                : ""
            }`}
            onClick={() => handleNavigate("/IPAddressManagement")}
          >
            IP Address Management
          </h1>
          <h1
            className={`text-base ${
              location.pathname === "/azure"
                ? "active-nav-item"
                : ""
            }`}
            onClick={() => handleNavigate("/azure")}
          >
           Azure
          </h1>
          <h1
            className={`text-base ${
              location.pathname === "/databaseDiscovery"
                ? "active-nav-item"
                : ""
            }`}
            onClick={() => handleNavigate("/databaseDiscovery")}
          >
           DB Discovery
          </h1>
        </div>
       
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => setShowLogout(!showLogout)}
      >
        <img
          src={userIcon}
          alt="User"
          style={{
            width: "30px",
            height: "30px",
            marginLeft: "30px",
            // marginTop: "66px",
            cursor: "pointer",
          }}
        />

        {showLogout && ( // Show logout option when showLogout state is true
          <>
            <div className="logoutOption">
              <p
                className="individualOption"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </p>
            </div>
          </>
        )}
      </div>
      <hr className="border-t w-full absolute bottom-0 left-0" />
    </div>
  );
}
