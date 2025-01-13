import { useEffect, useState } from "react";
import "./CustomCss/settings.css";
import Navbar from "./navBar";
import config from "../config";
import { useNavigate } from "react-router-dom";
import Sidebar from "./settingsSidebar";
import axios from "../components/services/authConfig"; // Import the axios instance

export default function Settings() {
  const [settingsData, setSettingsData] = useState<any>([]);
  // const [isUrlUp, setisUrlUp] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddEnvClick = () => {
    navigate("/settings/addEnv");
  };

  const editEnvironment = async (environmentData: any) => {
    console.log(environmentData);
    navigate("/settings/addEnv");
  };

  const deleteEnv = async () => {
    try {
      const deleteJson = {
        // central_id: centralId,
        // common_id: commonId,
      };
      const response = await axios.post(
        `${config.API_BASE_URL}/deleteEnvironment`,
        deleteJson
      );
      if (response.data.status !== true) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error during API requests:", error);
    }
  };
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(
          `${config.API_BASE_URL}/getConfigPageData`
        );
        const data = await response.data;
        console.log("Fetched data:", data);
        setSettingsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSettings();
  }, []);

  return (
    <div className="FullPageSettings">
      <Navbar />
      <div className="SettingsBody">
        <Sidebar />
        <div className="SettingsInside">
          <div className="TopHeading">
            <div className="HeadingFull">
              <div className="HeadingText">Environment</div>
              <div className="SubHeadingText">
                Add, Edit or Delete environments
              </div>
            </div>
            <button onClick={handleAddEnvClick} className="AddEnvButton">
              Add Environment
            </button>
          </div>
          {/* <div className="BodyList">
                        <div className="ListItem">
                            <div className="ItemName">
                                Production
                            </div>
                            <div className="ButtonGroup">
                                <button className="EditButton">Edit</button>
                                <button className="DeleteButton">Delete</button>
                            </div>
                        </div>
                        <div className="ListItem">
                            <div className="ItemName">
                                Development
                            </div>
                            <div className="ButtonGroup">
                                <button className="EditButton">Edit</button>
                                <button className="DeleteButton">Delete</button>
                            </div>
                        </div>
                    </div> */}

          <div className="BodyList">
            {Object.keys(settingsData).map((envName) => (
              <div className="ListItem" key={envName}>
                <div className="ItemName">{envName}</div>
                <div className="ButtonGroup">
                  <button
                    className="EditButton"
                    onClick={() => editEnvironment(settingsData[envName])}
                  >
                    Edit
                  </button>
                  <button
                    className="DeleteButton"
                    onClick={() => deleteEnv()}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
