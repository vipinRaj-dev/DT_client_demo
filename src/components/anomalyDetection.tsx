import React, { useState } from "react";
import NavBar from "./navBar";
import "./CustomCss/anomalyDetection.css";

const AnomalyDetection = () => {



    const modalData = {
        data: [
            {
                value: "LSTM",
                label: "LSTM",
            },
            {
                value: "Isolation Forest",
                label: "Isolation Forest",
            },
            {
                value: "Zscore",
                label: "Zscore",
            },
            {
                value: "ZscoreMedian",
                label: "ZscoreMedian",
            },
            {
                value: "MAD",
                label: "MAD",
            },

        ],
    };

    const [modalValues] = useState(modalData);

    const [modal, setModal] = useState('');

    const handleModalChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setModal(e.target.value);
        console.log(e.target.value)
    };


    return (
        <div className="FullAnomaly">
            <NavBar />
            <div className="AnomalyBody">
                <div className="AnomalyTitle">
                    <div style={{ display: "flex" }}>
                        <div className="MainHeading">
                            Server Anomaly Detection
                        </div>

                        <div style={{ width: "20vw" }}>
                            <select
                                name="modal"
                                value={modal}
                                onChange={handleModalChange}
                                className="w-[11vw] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">Select Model</option>
                                {modalValues.data.map((ele) => (
                                    <option key={ele.value} value={ele.value}>
                                        {ele.label}
                                    </option>
                                ))}
                            </select>








                        </div>
                    </div>

                    <div className="SubHeading">
                        Explore anomalies detected during scheduled scans
                    </div>
                </div>


                <div className="AnomalyCountCards" style={{ marginTop: "10px" }}>
                    <div>
                        <h3 className="titles">High</h3>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className="HighCountCard">
                                <h4>CPU</h4><p>1</p>
                                {/* <img className="PriorityImage" src={PriorityHigh}></img> */}
                            </div>
                            <div className="HighCountCard">
                                <h4>Memory</h4><p>0</p>
                                {/* <img className="PriorityImage" src={PriorityHigh}></img> */}
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className="titles">Medium</h3>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className="MediumCountCard">
                                <h4>CPU</h4><p>1</p>
                                {/* <h4>Medium</h4><p>3</p><img className="PriorityImage" src={PriorityMedium}></img> */}
                            </div>
                            <div className="MediumCountCard">
                                <h4>Memory</h4><p>0</p>
                                {/* <h4>Medium</h4><p>3</p><img className="PriorityImage" src={PriorityMedium}></img> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="titles">Low</h3>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className="LowCountCard">
                                <h4>CPU</h4><p>1</p>
                                {/* <h4>Low</h4><p>0</p><img className="PriorityImage" src={PriorityLow}></img> */}
                            </div>
                            <div className="LowCountCard">
                                <h4>Memory</h4><p>2</p>
                                {/* <h4>Low</h4><p>0</p><img className="PriorityImage" src={PriorityLow}></img> */}
                            </div>
                        </div>
                    </div>



                </div>
                <div className="SearchAnomalyFunction">
                    <input className="SearchBar" type="text" placeholder="Search" />
                </div>
                <div className="AnomalyTableBody">
                    <div
                        className="overflow-x-auto"
                        style={{ width: "76vw", border: "1px solid lightgray", borderRadius: "5px" }}
                    >
                        <table className="table w-full rounded-md">
                            <thead style={{ backgroundColor: "#F2F7F8", color: "#003C51", borderRadius: "10px" }}>
                                <tr>
                                    <th className="text-center">Sl. No</th>
                                    <th className="text-center">Server</th>
                                    <th className="text-center">Last Update</th>
                                    <th className="text-center">Severity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key="1">
                                    <td className="text-center border-b">1</td>
                                    <td className="text-center border-b">10.2.0.1</td>
                                    <td className="text-center border-b">
                                        July 2, 2024 at 9:00 AM
                                    </td>
                                    <td className="text-center border-b">Medium</td>
                                </tr>
                                <tr key="2">
                                    <td className="text-center border-b">2</td>
                                    <td className="text-center border-b">10.2.0.3</td>
                                    <td className="text-center border-b">
                                        July 2, 2024 at 12:30 PM
                                    </td>
                                    <td className="text-center border-b">Medium</td>
                                </tr>
                                <tr key="3">
                                    <td className="text-center border-b">3</td>
                                    <td className="text-center border-b">10.2.0.5</td>
                                    <td className="text-center border-b">
                                        July 2, 2024 at 3:45 PM
                                    </td>
                                    <td className="text-center border-b">High</td>
                                </tr>
                                <tr key="4">
                                    <td className="text-center border-b">4</td>
                                    <td className="text-center border-b">10.2.0.6</td>
                                    <td className="text-center border-b">
                                        July 2, 2024 at 7:00 PM
                                    </td>
                                    <td className="text-center border-b">Medium</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default AnomalyDetection;
