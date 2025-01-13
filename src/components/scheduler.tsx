import  { useEffect, useRef, useState } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import config from '../config';
import NavBar from './navBar';
import './CustomCss/scheduler.css'; // Add appropriate styles for the skeleton loader
import axios from '../components/services/authConfig';
import Pagination from './Pagination';

interface Environment {
    env_name: string;
    pk_id: number;
}

const Scheduler = () => {
    const [environment, setEnvironment] = useState<Environment[]>([]);
    const [schedulerData, setSchedulerData] = useState<any[]>([]);
    const loadingBar = useRef<LoadingBarRef>(null);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false); // Determines if we're in edit mode
    const [_, setEditSchedulerData] = useState<any>(null); // Data of the scheduler being edited
    // const [environmentId, setEnvironmentId] = useState("");
    const [__, setIPLoading] = useState(true);
    const [isDeleteMode, setIsDeleteMode] = useState(false); // Determines if we're in edit mode
    const [___, setDeleteSchedulerData] = useState<any>(null); // Data of the scheduler being edited

    const scanTypeData = {
        data: [
            {
                scan_Type: "timeseries_scheduling",
                label: "Timeseries Scheduling",
            },
            {
                scan_Type: "detail_scan_scheduling",
                label: "Detail Scan Scheduling",
            },
            {
                scan_Type: "basic_scan_scheduling",
                label: "Basic Scan Scheduling",
            },
        ],
    };
    const [scanTypeDropdownData] = useState(scanTypeData);

    const timeData = {
        data: [
            {
                time_format: "minutes",
                label: "Minutes",
            },
            {
                time_format: "hours",
                label: "Hours",
            },
        ],
    };

    const [timeFormat] = useState(timeData);

    const [addschedulerFormData, setAddSchedulerFormData] = useState({
        network_id: 0,
        network_name: "",
        hostname: "",
        interval_unit: "",
        interval: "",
        scan_type: "",
        df_pk_id: "",
        central_df_pk_id: ""

    });

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = schedulerData?.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Change items per page
    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    const handleFormChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setAddSchedulerFormData({
            ...addschedulerFormData,
            [name]: value,
        });
    };

    const fetchEnvironmentData = async () => {
        try {
            const response = await axios.get(`${config.API_BASE_URL}/environments`);
            const data = await response.data;
            console.log(data);
            setEnvironment(data.data);
            setIPLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchScheduledData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${config.API_BASE_URL}/loadSchedulerData`);
            const data = await response.data;
            data["data"].map((ele: any) => {
                ele["id"] = ele["pk_id"];
            });
            console.log(data);
            setSchedulerData(data["data"]);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchEnvironmentData();
        fetchScheduledData();
    }, []);

    const handleAddIPClick = () => {
        setIsEditMode(false); // Set to add mode
        setAddSchedulerFormData({
            network_id: 0,
            network_name: "",
            hostname: "",
            interval_unit: "",
            interval: "",
            scan_type: "",
            df_pk_id: "",
            central_df_pk_id:""
        });
        setShowPopup(true);
    };

    const handleEditClick = (data: any) => {
        setEditSchedulerData(data);
        setAddSchedulerFormData({
            network_id: data.network_id,
            network_name: data.network_name,
            hostname: data.hostname,
            interval_unit: data.interval_unit,
            interval: data.interval,
            scan_type: data.scan_type,
            df_pk_id: data.df_pk_id,
            central_df_pk_id:data.pk_id
        });
        setIsEditMode(true); // Set to edit mode
        setIsDeleteMode(false);
        setShowPopup(true);
    };

    const handleDeleteClick = (data: any) => {
        setDeleteSchedulerData(data);
        setAddSchedulerFormData({
            network_id: data.network_id,
            network_name: data.network_name,
            hostname: data.hostname,
            interval_unit: data.interval_unit,
            interval: data.interval,
            scan_type: data.scan_type,
            df_pk_id: data.df_pk_id,
            central_df_pk_id: data.pk_id
        });
        setIsDeleteMode(true); 
        setIsEditMode(false);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSave = async () => {

        setLoading(true);
        setShowPopup(false);
        console.log("Form data:", addschedulerFormData);
        try {
            if (isEditMode) {
               
                const response = await axios.post(`${config.API_BASE_URL}/edit_scheduler`, addschedulerFormData);
                // const data = response.data;
                if (response.status === 200) {
                    setLoading(false);
                    fetchScheduledData();
                }
            } 
            else if (isDeleteMode) {
               
                const response = await axios.post(`${config.API_BASE_URL}/delete_scheduler`, addschedulerFormData);
                // const data = response.data;
                if (response.status === 200) {
                    setLoading(false);
                    fetchScheduledData();
                }
            }
            else {
              
                const response = await axios.post(`${config.API_BASE_URL}/add_scheduler`, addschedulerFormData);
                // const data = response.data;
                if (response.status === 200) {
                    setLoading(false);
                    fetchScheduledData();
                }
            }
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col" style={{ overflowX: "hidden" }}>
            <NavBar />
            <LoadingBar
                ref={loadingBar}
                shadow={true}
                height={3}
                color="#29D"
            />
            <div className="bg-white-100 p-4 ml-4">
                <div style={{ marginLeft: "3vh" }}>
                    <div>
                        <div className="schedulerTopHeading">
                            <div className="schedulerFull">
                                <div className="schedulerText" style={{ color: "#006e74" }}>
                                    Scheduled Discovery
                                </div>
                            </div>
                            <button className="sslAddButton" onClick={handleAddIPClick}>
                                Add Scheduler
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}>
                                    <tr>
                                        <th className="text-left">Host Name/IP Range</th>
                                        <th className="text-left">Environment</th>
                                        <th className="text-left">Time Interval</th>
                                        <th className="text-left">Scan Type</th>
                                        <th className="text-left">Anomaly Detection</th>
                                        <th className="text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <>
                                            <tr className="animate-pulse">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                                </td>
                                            </tr>
                                            <tr className="animate-pulse">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                                </td>
                                            </tr>
                                        </>
                                    ) : (
                                        <>
                                            {currentItems.length > 0 ? (
                                                currentItems.map((data) => (
                                                    <tr key={data.id}>
                                                        <td className="text-left border-b">{data.hostname}</td>
                                                        <td className="text-left border-b">{data.network_name}</td>
                                                        <td className="text-left border-b">
                                                            {data.interval} {data.interval_unit}
                                                        </td>
                                                        <td className="text-left border-b">{data.scan_type}</td>
                                                        <td className="text-left border-b">{data.anomaly_detection ? "Yes" : "No"}</td>
                                                        <td className="text-left border-b flex items-center space-x-2">
                                                            <svg
                                                                onClick={() => handleEditClick(data)}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="#0097ac"
                                                                className="size-6 cursor-pointer"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                                                />
                                                            </svg>
                                                            <svg  onClick={() => handleDeleteClick(data)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6 cursor-pointer">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>

                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={6} className="text-center py-4">
                                                        No data available
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={schedulerData.length}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                            onItemsPerPageChange={handleItemsPerPageChange}
                        />
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-lg font-bold mb-4"> {isEditMode ? 'Edit Scheduler' : isDeleteMode ? 'Delete Scheduler' : 'Add Scheduler'}</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Network</label>
                                <select
                                    name="network_id"
                                    value={addschedulerFormData.network_id}
                                    onChange={(e) => {
                                        const selectedNetworkId = parseInt(e.target.value, 10); // Convert value to a number
                                        const selectedEnvironment = environment.find((option) => option.pk_id === selectedNetworkId);
    
                                        setAddSchedulerFormData({
                                            ...addschedulerFormData,
                                            network_id: selectedNetworkId,
                                            network_name: selectedEnvironment?.env_name || "",
                                        });
                                    }}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Select Network</option>
                                    {environment.map((env) => (
                                        <option key={env.pk_id} value={env.pk_id}>
                                            {env.env_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Host Name/IP Range</label>
                                <input
                                    type="text"
                                    name="hostname"
                                    value={addschedulerFormData.hostname}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Host Name/IP Range"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Time Interval</label>
                                <div className="flex">
                                    <input
                                        type="number"
                                        name="interval"
                                        value={addschedulerFormData.interval}
                                        onChange={handleFormChange}
                                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Interval"
                                    />
                                    <select
                                        name="interval_unit"
                                        value={addschedulerFormData.interval_unit}
                                        onChange={handleFormChange}
                                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="">Select Unit</option>
                                        {timeFormat.data.map((time) => (
                                            <option key={time.time_format} value={time.time_format}>
                                                {time.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Scan Type</label>
                                <select
                                    name="scan_type"
                                    value={addschedulerFormData.scan_type}
                                    onChange={(e) => {
                                        setAddSchedulerFormData({
                                            ...addschedulerFormData,
                                            scan_type: e.target.value,
                                        });
                                    }}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Select Scan Type</option>
                                    {scanTypeDropdownData.data.map((scan) => (
                                        <option key={scan.scan_Type} value={scan.scan_Type}>
                                            {scan.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                {/* <button
                                    type="button"
                                    onClick={handleClosePopup}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save
                                </button> */}


                                <button onClick={handleClosePopup} className="sslButton" style={{ width: "20%" }}>
                                    Cancel
                                </button>
                                <button onClick={handleSave} className="sslButton" style={{ width: "40%" }}>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Scheduler;
