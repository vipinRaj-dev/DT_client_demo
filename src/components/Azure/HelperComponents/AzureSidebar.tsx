import { useState } from "react";
import { BurgerSwipe as Icon } from "react-icons-animated";
import { Link } from "react-router-dom";

const AzureSidebar = () => {
  const [closeSideBar, setCloseSideBar] = useState(false);

  return ( 
    <aside
      className={`bg-[#003C51] flex flex-col py-4 px-1 space-y-3 h-full transition-all duration-1000 ${
        closeSideBar ? "w-72" : "w-20 items-center"
      }`}
    >
      {closeSideBar ? (
        <img className="h-10" src="/Icons/Microsoft-Azure-Icon.svg" alt="" />
      ) : (
        <img className="h-10" src="/Icons/AzureIcon.png" alt="" />
      )}

      <div className="flex justify-end">
        <button
          className="mt-5"
          onClick={() => setCloseSideBar(!closeSideBar)}
          style={{
            width: "40px",
            height: "40px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Icon isClosed={closeSideBar} />
        </button>
      </div>

      <div className="text-white cursor-pointer">
        <Link to="/azure">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img className="p-4" src="/Icons/AccountIcon.svg" alt="icon" />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              Account
            </span>
          </div>
        </Link>
        <Link to="/azure/appservices">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img className="p-4" src="/Icons/AppServicesIcon.svg" alt="icon" />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              App Services
            </span>
          </div>
        </Link>
        <Link to="/azure/ServicePrincipals">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img className="p-4" src="/Icons/AzureADIcon.svg" alt="icon" />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              Azure AD Service Principals
            </span>
          </div>
        </Link>
        <Link to="/azure/AzureADUser">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img className="p-4" src="/Icons/AzureADUserIcon.svg" alt="icon" />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              Azure AD User
            </span>
          </div>
        </Link>
        <Link to="/azure/ContainerList">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img
              className="p-4"
              src="/Icons/containerListIcon.svg"
              alt="icon"
            />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              Container List
            </span>
          </div>
        </Link>
        <Link to="/azure/ResourceGroup">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img
              className="p-4"
              src="/Icons/ResourceGroupIcon.svg"
              alt="icon"
            />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              Resource Group
            </span>
          </div>
        </Link>
        <Link to="/azure/SQLServers">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img className="p-4" src="/Icons/SqlServerIcon.svg" alt="icon" />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              SQL Server
            </span>
          </div>
        </Link>
        <Link to="/azure/StorageAccount">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img
              className="p-4"
              src="/Icons/StorageAccountIcon.svg"
              alt="icon"
            />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              Storage Account
            </span>
          </div>
        </Link>
        <Link to="/azure/VMDetails">
          <div className={`flex items-center ${!closeSideBar && "ml-10"} `}>
            <img className="p-4" src="/Icons/VMDetailsIcon.svg" alt="icon" />
            <span
              className={`transition-opacity duration-700 ${
                closeSideBar ? "opacity-100 delay-500" : "opacity-0 "
              }`}
            >
              VM Details
            </span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default AzureSidebar;
