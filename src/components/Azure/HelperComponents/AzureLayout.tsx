import { Outlet } from "react-router-dom";
import AzureSidebar from "./AzureSidebar";
import AzureNavbar from "./AzureNavbar";

const AzureLayout = () => {
  return (
    // <div className="flex flex-col h-screen overflow-x-hidden ">
    //   <AzureNavbar />
    //   <div className="flex flex-grow ">
    //     <AzureSidebar />
    //     <div className="flex-grow bg-LightTealBackground">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>

    <div>
      {/* <AzureNavbar /> */}

      <div className="flex w-full h-full fixed">
        <div className="flex flex-grow">
          <AzureSidebar />
        </div>
        <div className="w-full flex-grow overflow-y-scroll bg-LightTealBackground">
          <AzureNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AzureLayout;
