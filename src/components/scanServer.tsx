import { useEffect, useState } from "react";
import NavBar from "./navBar";
import SearchIcon from "../assets/searchIcon.svg";
import "./CustomCss/scanServer.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../components/services/authConfig"; // Import the axios instance
import PlexusWallpaper from "./services/plexusCanvas";

// Define interface for the data structure
interface Network {
  name: string;
  id: number;
}

export default function ScanServer() {
  const [networks, setNetworks] = useState<Network[]>([]); // Specify type as Network[]
  const [loading, setLoading] = useState(true);
  const [ipAddress, setIpAddress] = useState("");
  const [environmentId, setEnvironmentId] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Access the location object

  useEffect(() => {
    if (location.state) {
      const { ipAddress: ip, environmentId: envId } = location.state;
      setIpAddress(ip);
      setEnvironmentId(envId);
    }
  }, [location.state]);

  // useEffect(() => {
  //   if (ipAddress && environmentId) {
  //     scanIP(); // Automatically trigger scan on page load if IP and environmentId are provided
  //   }
  // }, [ipAddress, environmentId]);

  useEffect(() => {
    axios
      // .get(`${config.API_BASE_URL}/environments`)
      .get(`http://10.2.0.25:8010/environments`)
      .then((response) => {
        const fetchedNetworks = response.data.environments.map((env: { id: number; name: string }) => ({
          id: env.id,
          name: env.name,
        }));
        setNetworks(fetchedNetworks); // Map the new data format to the Network array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const navigateToHistory = async () => {
    navigate("/scanHistory");
  };

  const scanIP = async () => {
    if (!ipAddress || !environmentId) {
      alert("Please enter IP address and select environment");
      return;
    }

    setLoading(true);
    try {
      // Constructing data to send to the backend

      // {"environment": 3, "ip_query": "10.2.0.0/24"}
      const resultJSON = {
        environment: environmentId,
        ip_query: ipAddress,
      };

      // Send data to the backend via POST
      // const response = await axios.post(
      //   `${config.API_BASE_URL}/scan/basic-scan`,
      //   resultJSON
      // );

      const response = await axios.post(
        `http://10.2.0.25:8010/scan/basic-scan`,
        resultJSON
      );

      // const response = await fetch(`${config.API_BASE_URL}/scan/basic-scan`, {
      //   method: "POST",
      //   mode: "cors",
      //   body: JSON.stringify(resultJSON),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      // const responseData = await response.json();

      // Check if the response is true
      
      // Extract result_id from the response
      const resultId = response.data.result_id;

      if (!resultId) {
        console.error("Basic scan response did not include a result_id.");
        setLoading(false);
        return;
      }
      
      // {"environment": 3, "result_id":"d04efd55-bf9d-4d86-9ddd-a3c7fc71240e"}
      const statusJSON = {
        environment: environmentId,
        result_id: resultId,
      };

      if (response.data) {
        // Navigate to the scanResult page with the result_id and environmentId
        navigate("/scanResult", {
          state: { basicScanJSON: statusJSON, environmentId },
        });
      } else {
        console.error("First API request returned false status.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during API requests:", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 bg-white flex flex-col items-center justify-center border-t border-gray-300 p-4">
        <PlexusWallpaper />
        {/* <div className="EnclosementScan"> */}
        <div className="flex flex-col items-center" style={{ zIndex: "10" }}>
          <h2 className="text-2xl text-[#006e74] mb-2 scanIPText">
            Scan your servers
          </h2>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                <img
                  src={SearchIcon}
                  alt="Search Icon"
                  className="h-5 w-5 text-gray-500"
                />
              </span>
              <input
                type="text"
                className="w-160 pl-8 border border-gray-300 p-2 rounded outline-none"
                style={{ width: "560px", height: "37px" }}
                placeholder="Enter IPs or IP range..."
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
              />
            </div>
            <select
              className="border border-gray-300 p-2 rounded outline-none"
              value={environmentId}
              onChange={(e) => setEnvironmentId(e.target.value)}
            >
              <option value="">Select Environment</option>
              {loading ? (
                <option disabled>Loading...</option>
              ) : (
                networks.map((network) => (
                  <option key={network.id} value={network.id}>
                    {network.name}
                  </option>
                ))
              )}
            </select>
            <button
              className="bg-gray-300 text-teal-600 px-4 py-2 rounded"
              style={{
                height: "37px",
                background: "#F2F7F8",
              }}
              onClick={scanIP}
            >
              Scan
            </button>
          </div>
        </div>
        <p
          className="text-base mb-4 text-[#006e74] underline cursor-pointer"
          style={{ zIndex: "10", marginRight: "53vw" }}
          onClick={navigateToHistory}
        >
          Previous Discoveries
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
