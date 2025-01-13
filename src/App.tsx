import { AuthProvider } from "./components/services/authContext"; // Import AuthProvider
import { DashboardProvider } from "./components/dasboardContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import ScanServer from "./components/scanServer";
import ScanResult from "./components/scanResult";
import Dashboard from "./components/dashboard";
import NetworkInterface from "./components/networkInterface";
import Settings from "./components/settings";
import AddEnvironment from "./components/addEnvironment";
import MongoDB from "./components/mongoDBSettings";
import DiskPerformance from "./components/diskPerformance";
import InstalledApps from "./components/installedApps";
import RunningApps from "./components/runningApps";
import AnomalyDetection from "./components/anomalyDetection";
import AllCertificatePage from "./components/allCertificates";
import Scheduler from "./components/scheduler";
import ScanHistory from "./components/scanHistory";
import InfraSummary from "./components/infraSummary";
import SSLCertificate from "./components/sslCertificate";
import CustomDevices from "./components/addCustomeDevices";
import IPAddressManagement from "./components/IPAddressManagement";
import DatabaseDiscovery from "./components/DatabaseDiscovery/DatabaseDiscoveryOutlet";
import AzureLayout from "./components/Azure/HelperComponents/AzureLayout";
import Account from "./components/Azure/Pages/Account";
import AppServices from "./components/Azure/Pages/AppServices";
import ServicePrincipals from "./components/Azure/Pages/ServicePrincipals";
import AzureADUser from "./components/Azure/Pages/AzureADUser";
import ContainerList from "./components/Azure/Pages/ContainerList";
import SQLServers from "./components/Azure/Pages/SQLServers";
import VMDetails from "./components/Azure/Pages/VMDetails";
import ResourceGroup from "./components/Azure/Pages/ResourceGroup";
import DatabaseDiscoveryDashboard from "./components/DatabaseDiscovery/Pages/DatabaseDiscoveryDashboard";
import SqlDashBoard from "./components/DatabaseDiscovery/Pages/SqlDashBoard";
import PostgreDashboard from "./components/DatabaseDiscovery/Pages/PostgreDashboard";
import LogAnalysis from "./components/LogDiscovery/logAnalysis";
import LogSettings from "./components/LogDiscovery/logSettings";
import LogAnalysisOverview from "./components/LogDiscovery/LogAnalysisOverview";
import LogCluster from "./components/LogDiscovery/LogCluster";
import DetailedLogCluster from "./components/LogDiscovery/DetailedLogCluster";
import StorageAccount from "./components/Azure/Pages/StorageAccount";

// import "./App.css";

function App() {
  return (
    <AuthProvider>
      <DashboardProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />

            {/* <Route element={<ProtectedRoute />}> */}
            {/* didn't added the protectedRoutes logic */}
            <Route path="/scanServer" element={<ScanServer />} />
            <Route path="/scanResult" element={<ScanResult />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/networkInterface" element={<NetworkInterface />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/addEnv" element={<AddEnvironment />} />
            <Route path="/mongoDBsettings" element={<MongoDB />} />
            <Route path="/diskPerformance" element={<DiskPerformance />} />
            <Route path="/installedApps" element={<InstalledApps />} />
            <Route path="/runningApps" element={<RunningApps />} />
            <Route path="/anomaly" element={<AnomalyDetection />} />
            <Route path="/allCertificate" element={<AllCertificatePage />} />
            <Route path="/scheduler" element={<Scheduler />} />
            <Route path="/scanHistory" element={<ScanHistory />} />
            <Route path="/infraSummary" element={<InfraSummary />} />
            <Route path="/sslCertificate" element={<SSLCertificate />} />
            <Route path="/customDevices" element={<CustomDevices />} />
            <Route
              path="/IPAddressManagement"
              element={<IPAddressManagement />}
            />

            {/* </Route> */}
            {/* Database Discovery Route */}
            <Route path="/databaseDiscovery" element={<DatabaseDiscovery />}>
              <Route index element={<DatabaseDiscoveryDashboard />} />
              <Route path="sqlDashboard/:time_interval" element={<SqlDashBoard />} />
              <Route path="postgreDashboard/:time_interval" element={<PostgreDashboard />} />
            </Route>

            <Route path="/azure" element={<AzureLayout />}>
              {/* Default route for /azure */}
              <Route index element={<Account />} />
              {/* All other routes related to azure */}
              <Route path="appservices" element={<AppServices />} />
              <Route path="ServicePrincipals" element={<ServicePrincipals />} />
              <Route path="AzureADUser" element={<AzureADUser />} />
              <Route path="ContainerList" element={<ContainerList />} />
              <Route path="SQLServers" element={<SQLServers />} />
              <Route path="VMDetails" element={<VMDetails />} />
              <Route path="ResourceGroup" element={<ResourceGroup />} />
              <Route path="StorageAccount" element={<StorageAccount />} />
            </Route>

            {/* </Route> */}

            {/* logAnalysis merge */}
            <Route path="/LogOverview" element={<LogAnalysisOverview />} />
            <Route path="/LogDetailed" element={<LogAnalysis />} />
            <Route path="/LogSettings" element={<LogSettings />} />

            <Route path="/LogCluster" element={<LogCluster />} />
            <Route path="/detailedLog/:id" element={<DetailedLogCluster />} />
          </Routes>
        </Router>
      </DashboardProvider>
    </AuthProvider>
  );
}

export default App;
