import "./CustomCss/settings.css";
import Navbar from "./navBar";
// import { useNavigate } from "react-router-dom";
import Sidebar from "./settingsSidebar";

export default function Settings() {
    // const navigate = useNavigate();

    // const handleAddEnvClick = () => {
    //     // Example navigation to '/new-route'
    //     navigate('/settings/addEnv');
    //   };

    return (
        <div className="FullPageSettings">
            <Navbar />
            <div className="SettingsBody">
                <Sidebar />
                <div className="SettingsInside">
                    <div className="MongoDBSettings">
                        ADD HERE MORE
                    </div>
                </div>
            </div>
        </div >
    );
}
