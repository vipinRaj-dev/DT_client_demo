import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomCss/addEnvironment.css";
import Navbar from "./navBar";
import config from "../config";
import Breadcrumbs from "./breadCrumbs";
import SideBar from "./settingsSidebar";
import axios from '../components/services/authConfig'; // Import the axios instance


interface FormData {
    envName: string;
    DFName: string;
    winappAddress: string;
    windowsUsername: string;
    windowsPassword: string;
    SMPPort: string;
    linuxUsername: string;
    linuxPassword: string;
    SSHPort: string;
}



export default function AddEnvironment() {
    const navigate = useNavigate();


    const [formData, setFormData] = useState<FormData>({
        envName: "",
        DFName: "",
        winappAddress: "",
        windowsUsername: "",
        windowsPassword: "",
        SMPPort: "",
        linuxUsername: "",
        linuxPassword: "",
        SSHPort: "",
    });

    const breadcrumbItems = [
        { label: "Environment", url: "/settings" },
        { label: "Add Environment", url: "/settings" },
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSave = async () => {
        try {
            console.log(JSON.stringify(formData))
            const [apiUrl, apiPort] = formData.DFName.split(":");
            const [ winappPort] = formData.winappAddress.split(":");
            var jsonData = {
                [formData.envName]: {
                    "common": {
                        "windows_username": formData.windowsUsername,
                        "windows_password": formData.windowsPassword,
                        "windows_custom_port": formData.SMPPort,
                        "linux_username": formData.linuxUsername,
                        "linux_password": formData.linuxPassword,
                        "linux_custom_port": formData.SSHPort,
                        "windows_app_port": winappPort,
                    },
                    "api_url": apiUrl,
                    "api_port": apiPort
                }
            }

            const response = await axios.post(`${config.API_BASE_URL}/centralAddCommonCreds`, jsonData);

            console.log(response)
            if (response.data.status === true && response.status===200) {
                alert("Environment saved successfully!");
                navigate("/settings");
            } else {
                alert("Failed to save environment. Please try again.");
            }
        } catch (error) {
            console.error("Error saving environment:", error);
            alert("An error occurred while saving the environment.");
        }
    };

    return (
        <div className="FullPageSettings">
            <Navbar />
            <div className="SettingsBody">
                <SideBar />
                <div className="addEnvSettingsInside">
                    <div className="BreadCrumb">
                        <Breadcrumbs items={breadcrumbItems} />{" "}
                    </div>
                    <div className="addEnvTopHeading">
                        <div className="addEnvHeadingFull">
                            <div className="addEnvHeadingText">
                                Add Environment
                            </div>
                            <div className="SubHeadingText">
                                Enter the Details of the Environment.
                            </div>
                        </div>
                    </div>
                    <div className="addEnvBodyList">
                        <div className="addEnvDetails">
                            <div className="addEnvHeader">
                                Environment
                            </div>
                            <div className="addEnvBody">
                                <div className="addEnvName">
                                    <label htmlFor="envName" style={{ fontWeight: "400" }}>Name</label>
                                    <input id="envName" className="inputStyle" placeholder="Production, Dev...etc" value={formData.envName} onChange={handleInputChange} />
                                </div>
                                <div className="addDataFetcher">
                                    <label htmlFor="DFName" style={{ fontWeight: "400", }}>Data Fetcher Address</label>
                                    <input id="DFName" className="inputStyle" placeholder="127.0.0.1:8010" value={formData.DFName} onChange={handleInputChange} />
                                </div>
                                <div className="addWinApp">
                                    <label htmlFor="winappAddress" style={{ fontWeight: "400", }}>WinApp Address</label>
                                    <input id="winappAddress" className="inputStyle" placeholder="127.0.0.1:8001" value={formData.winappAddress} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="addWindowsDetails">
                            <div className="addWindowsHeader">
                                Windows
                            </div>
                            <div className="addWindowsBody">
                                <div className="addWindowsUsername">
                                    <label htmlFor="windowsUsername" style={{ fontWeight: "400" }}>Username</label>
                                    <input id="windowsUsername" className="inputStyle" placeholder="admin" value={formData.windowsUsername} onChange={handleInputChange} />
                                </div>
                                <div className="addWindowsPassword">
                                    <label htmlFor="windowsPassword" style={{ fontWeight: "400", }}>Password</label>
                                    <input id="windowsPassword" className="inputStyle" type="password" value={formData.windowsPassword} onChange={handleInputChange} />
                                </div>
                                <div className="addWindowsPort">
                                    <label htmlFor="SMPPort" style={{ fontWeight: "400", }}>SMB Port</label>
                                    <input id="SMPPort" className="inputStyle" placeholder="445" value={formData.SMPPort} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="addLinuxDetails">
                            <div className="addLinuxHeader">
                                Linux
                            </div>
                            <div className="addLinuxBody">
                                <div className="addLinuxUsername">
                                    <label htmlFor="linuxUsername" style={{ fontWeight: "400" }}>Username</label>
                                    <input id="linuxUsername" className="inputStyle" placeholder="admin" value={formData.linuxUsername} onChange={handleInputChange} />
                                </div>
                                <div className="addLinuxPassword">
                                    <label htmlFor="linuxPassword" style={{ fontWeight: "400", }}>Password</label>
                                    <input id="linuxPassword" className="inputStyle" type="password" value={formData.linuxPassword} onChange={handleInputChange} />
                                </div>
                                <div className="addLinuxPort">
                                    <label htmlFor="SSHPort" style={{ fontWeight: "400", }}>SSH Port</label>
                                    <input id="SSHPort" className="inputStyle" placeholder="22" value={formData.SSHPort} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="ButtonsTab">
                            <button className="Save" onClick={handleSave}>Save</button>
                            <button onClick={() => handleNavigation("/settings")} className="Cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
