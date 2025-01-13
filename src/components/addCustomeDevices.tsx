import "./CustomCss/settings.css";
import Navbar from "./navBar";
import Sidebar from "./settingsSidebar";
import Breadcrumbs from "./breadCrumbs";
import { useEffect, useState } from "react";
import config from "../config";
import axios from '../components/services/authConfig'; // Import the axios instance

// Define interface for the data structure
interface Network {
    env_name: string;
    pk_id: number;
}

// interface FormData {
//     envName: string;
//     os: string;
//     username: string;
//     password: string;
//     port: string;
// }
export default function CustomDevices() {
    // const navigate = useNavigate();
    const [os, setOs] = useState(''); // State to manage selected operating system

    // const [formData, setFormData] = useState<FormData>({
    //     envName: "",
    //     os: "",
    //     username: "",
    //     password: "",
    //     port: ""
    // });

    const [networks, setNetworks] = useState<Network[]>([]); // Specify type as Network[]

    // const handleAddEnvClick = () => {
    //     navigate('/settings/addEnv');
    // };

    const breadcrumbItems = [
        { label: "Environment", url: "/settings" },
        { label: "Add Custom Device", url: "/customDevices" },
    ];




    useEffect(() => {
        axios.get(`${config.API_BASE_URL}/environments`)
            .then((response: { data: { data: React.SetStateAction<Network[]>; }; }) => {
                setNetworks(response.data.data); // Assuming response.data.data is correctly structured as an array of Network objects

            })
            .catch((error: any) => {
                console.error("Error fetching data:", error);

            });
    }, []);

    return (
        <div className="FullPageSettings">
            <Navbar />
            <div className="SettingsBody">
                <Sidebar />
                <div className="addEnvSettingsInside">
                    <div className="BreadCrumb">
                        <Breadcrumbs items={breadcrumbItems} />{" "}
                    </div>

                    <div className="addEnvTopHeading">
                        <div className="addEnvHeadingFull">
                            <div className="addEnvHeadingText">
                                Add Custom Devices
                            </div>
                            <div className="SubHeadingText">
                                {/* Enter the Details of the Environment. */}
                            </div>
                        </div>
                    </div>

                    <div className="addEnvBodyList">
                        <div className="addEnvDetails" style={{ gap: "3vh" }}>
                            <div className="addEnvHeader">
                                Environment
                            </div>

                            <div className="addEnvBody">
                                <div className="addEnvName">
                                    <select
                                        className="border border-gray-300 p-2 rounded outline-none"
                                    // value={selectedEnvironment}
                                    // onChange={(e) => setSelectedEnvironment(e.target.value)}
                                    >
                                        <option value="">Select Environment</option>
                                        {networks.map((network) => (
                                            <option key={network.pk_id} value={network.pk_id}>
                                                {network.env_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="addEnvHeader">
                                Operating System
                            </div>

                            <div className="addEnvBody">
                                <div className="osOptions">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Windows"
                                            checked={os === 'Windows'}
                                            onChange={() => setOs('Windows')}
                                        />
                                        Windows
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Linux"
                                            checked={os === 'Linux'}
                                            onChange={() => setOs('Linux')}
                                        />
                                        Linux
                                    </label>
                                </div>
                            </div>


                            <div className="addEnvBody">
                                <div className="addEnvName">
                                    <label htmlFor="envName" style={{ fontWeight: "400" }}>Username</label>
                                    <input id="envName" className="inputStyle" placeholder="" />
                                </div>

                                <div className="addEnvName">
                                    <label htmlFor="envName" style={{ fontWeight: "400" }}>Password</label>
                                    <input id="envName" className="inputStyle" placeholder="" />
                                </div>

                                <div className="addEnvName">
                                    <label htmlFor="envName" style={{ fontWeight: "400" }}>Port</label>
                                    <input id="envName" className="inputStyle" placeholder="" />
                                </div>
                            </div>


                            <div className="ButtonsTab">
                                <button className="Save">Save</button>
                                <button className="Cancel">Cancel</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
