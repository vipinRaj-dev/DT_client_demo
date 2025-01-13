import  { useState } from "react";
import LinuxConfig from "./Components/linuxConfig";

import WindowsConfig from "./Components/windowsConfig";
import NavBar from "../navBar";


export default function LogSettings() {
    const [selectedTab, setSelectedTab] = useState("linux");

    return (
        <div className="w-[screen] h-[100vh] flex flex-col overflow-hidden">
            <NavBar />
            <div className="flex w-screen h-[90vh] overflow-auto cursor-default">
                <div className="w-full h-[97vh] flex justify-center items-center bg-[#f2f7f8]">
                    <div className="flex flex-col w-[90vw] h-[auto] bg-[#ffffff] rounded-[1rem] gap-y-[2vh] mb-[5vh]">
                        <div className="text-[#006e74] text-[1.3rem] flex w-[100%] h-[5vh] mt-[2vh] ml-[5vh] justify-start">
                            {/* Settings */}
                        </div>
                        <div className="flex flex-col w-[100%] gap-y-[1vh] px-[5vh] mt-[1vh]">
                            <div className="flex justify-start gap-x-[2vw] border-b border-[#dcdcdc]">
                                <button
                                    className={`px-[2rem] py-[0.5rem] rounded-tl-[1rem] rounded-tr-[1rem] ${selectedTab === "linux" ? "bg-[#006e74] text-white" : "bg-[#f2f7f8] text-[#006e74]"} border-b-2 border-[#006e74]`}
                                    onClick={() => setSelectedTab("linux")}
                                >
                                    Linux
                                </button>
                                <button
                                    className={`px-[2rem] py-[0.5rem] rounded-tl-[1rem] rounded-tr-[1rem] ${selectedTab === "windows" ? "bg-[#006e74] text-white" : "bg-[#f2f7f8] text-[#006e74]"} border-b-2 border-[#006e74]`}
                                    onClick={() => setSelectedTab("windows")}
                                >
                                    Windows
                                </button>
                            </div>
                            <div className="flex flex-col w-full h-[70vh] p-[2vh] bg-[#ffffff] overflow-auto">
                                {selectedTab === "linux" && <LinuxConfig />}
                                {selectedTab === "windows" && <WindowsConfig />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
