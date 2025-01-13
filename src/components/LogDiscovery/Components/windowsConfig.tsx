import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import deleteIcon from '../../../assets/deleteIcon.svg'

// Define the type for options
interface OptionType {
    value: string;
    label: string;
}

// Define server IP options
const serverOptions: OptionType[] = [
    // { value: '10.2.0.12', label: '10.2.0.12' },
    { value: '10.2.0.8', label: '10.2.0.8' },
    { value: '10.2.1.5', label: '10.2.1.5' },
    // { value: '10.2.0.23', label: '10.2.0.23' },
    // { value: '10.2.0.26', label: '10.2.0.26' } // Added for your second example
];

// Define log options
const logOptions: OptionType[] = [
    { value: 'sys_log_path', label: 'System Log Path' },
    { value: 'auth_log_path', label: 'Authentication Log Path' },
    { value: 'kern_log_path', label: 'Kernel Log Path' }
];

interface LogEntry {
    logType: OptionType | null;
    path: string;
}

interface IPConfig {
    ip: OptionType | null;
    logs: LogEntry[];
}

const WindowsConfig: React.FC = () => {
    const [ipConfigs, setIpConfigs] = useState<IPConfig[]>([{ ip: null, logs: [{ logType: null, path: "" }] }]);
    const navigate = useNavigate();



    const handleAddIP = () => {
        setIpConfigs([...ipConfigs, { ip: null, logs: [{ logType: null, path: "" }] }]);
    };

    const handleIPChange = (index: number, selected: SingleValue<OptionType>) => {
        const updatedConfigs = ipConfigs.map((config, i) =>
            i === index ? { ...config, ip: selected } : config
        );
        setIpConfigs(updatedConfigs);
    };

    const handleAddLog = (index: number) => {
        const updatedConfigs = ipConfigs.map((config, i) =>
            i === index ? { ...config, logs: [...config.logs, { logType: null, path: "" }] } : config
        );
        setIpConfigs(updatedConfigs);
    };

    const handleDeleteLog = (ipIndex: number, logIndex: number) => {
        const updatedConfigs = ipConfigs.map((config, i) =>
            i === ipIndex ? { ...config, logs: config.logs.filter((_, j) => j !== logIndex) } : config
        );
        setIpConfigs(updatedConfigs);
    };

    const handleLogChange = (ipIndex: number, logIndex: number, field: string, value: any) => {
        const updatedConfigs = ipConfigs.map((config, i) =>
            i === ipIndex ? {
                ...config,
                logs: config.logs.map((log, j) =>
                    j === logIndex ? { ...log, [field]: value } : log
                )
            } : config
        );
        setIpConfigs(updatedConfigs);
    };

    const handleSubmit = async () => {
        const formattedData = ipConfigs.map(config => ({
            server: config.ip?.value || '',
            ...config.logs.reduce((acc, log) => {
                if (log.logType?.value) {
                    acc[log.logType.value] = log.path;
                }
                return acc;
            }, {} as Record<string, string>)
        }));
        console.log(JSON.stringify(formattedData, null, 2));

          // Route to logOverview page immediately
          navigate('/LogOverview');

        try {
            const response = await fetch('http://10.2.0.26:5001/getlinuxlog'
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formattedData),
                });

          

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <h2 className="text-[#006e74] text-[1.2rem]">Windows Configuration</h2>

            {ipConfigs.map((config, ipIndex) => (
                <div key={ipIndex} className="mt-[2vh]">
                    <label htmlFor={`ip-select-${ipIndex}`} className="block mb-[1vh] text-[#006e74] text-[1rem]">
                        Select Server IP:
                    </label>
                    <div style={{
                        display
                            : "flex", gap: "3px"
                    }}>
                        <div className="w-[50vw] mb-4">
                            <Select
                                id={`ip-select-${ipIndex}`}
                                options={serverOptions}
                                value={config.ip}
                                onChange={(selected) => handleIPChange(ipIndex, selected)}
                                className="basic-single outline-none"
                                classNamePrefix="select"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        outline: 'none',
                                        boxShadow: 'none'
                                    })
                                }}
                            />


                        </div>
                        <img src={deleteIcon} style={{ marginBottom: "16px" }}></img>
                    </div>


                    <ul className="list-disc pl-5 flex-1">
                        {config.logs.map((log, logIndex) => (
                            <li key={logIndex} className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                    <Select
                                        options={logOptions}
                                        value={log.logType}
                                        onChange={(selected: OptionType | null) => handleLogChange(ipIndex, logIndex, 'logType', selected)}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                width: '150px',
                                            }),
                                        }}
                                    />
                                    <input
                                        type="text"
                                        value={log.path}
                                        onChange={(e) => handleLogChange(ipIndex, logIndex, 'path', e.target.value)}
                                        placeholder="Enter path"
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </div>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => handleAddLog(ipIndex)}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-500 cursor-pointer"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => handleDeleteLog(ipIndex, logIndex)}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-red-500 cursor-pointer"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>


                            </li>
                        ))}
                    </ul>
                    {/* <div className="ml-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => handleAddLog(ipIndex)}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-green-500 cursor-pointer"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div> */}
                </div>
            ))}

            <div style={{ display: "flex", gap: "3px", marginTop: "8vh" }}>
                <button
                    onClick={handleAddIP}
                    className="border-2 border-[#0097AC] text-[#006e74] rounded-lg h-[5vh] min-w-[9vw] text-center"
                >
                    Add New IP
                </button>

                <button
                    onClick={handleSubmit}
                    className="border-2 border-[#0097AC] text-[#006e74] rounded-lg h-[5vh] min-w-[9vw] text-center"
                >
                    Get Logs
                </button>
            </div>



        </div>
    );
};

export default WindowsConfig;
