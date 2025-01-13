import NavBar from "../navBar";
import { Outlet } from "react-router-dom";

export default function DatabaseDiscovery() {
  return (
    <div className="w-screen h-screen overflow-hidden ">
      <NavBar />
      <div className="w-screen mx-auto px-20 bg-LightTealBackground h-screen">
        <Outlet />
      </div>
    </div>
  );
}
