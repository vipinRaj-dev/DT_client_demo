import postgresql from "../../../assets/postgres_logo.svg";
import cassandra from "../../../assets/cassandra_logo.svg";
import elasticSearch from "../../../assets/elasticsearch_logo.svg";
import sqlImage from "../../../assets/microsoft-sql-server-logo.svg";
import mongoDb from "../../../assets/mongoDB_logo.svg";
import Oracle from "../../../assets/Oracle-Logo.svg";
import mySql from "../../../assets/MySQL_logo.svg";
import redis from "../../../assets/redis_logo.svg";

import { GiJusticeStar } from "react-icons/gi";
import {  useState } from "react";

import CustomModal from "../../CustomModal/CustomModal";
import { useNavigate } from "react-router-dom";

const DatabaseDiscoveryDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>("mySql");

  const [time_interval, setTime_interval] = useState(1);
  const [postgreeSSH, setPostgreeSSH] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const SelectedDatabase = (imageName: string) => {
    console.log("imageName : ", imageName);

    setSelectedImage(imageName);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh on form submission
    const formData = new FormData(e.currentTarget);

    if (selectedImage === "mySql") {
      // Extract values from FormData
      const data = {
        windows_ip: formData.get("ip"),
        port: Number(formData.get("port")),
        username: formData.get("username"),
        password: formData.get("password"),
        time_interval: Number(formData.get("discovery_time")),
      };
      console.log(data); // Log form data
      initiateVMconnectionMySql();
    } else if (selectedImage === "postgresql") {
      const data = {
        ssh_host: formData.get("ip"),
        ssh_port: Number(formData.get("port")),
        ssh_user: formData.get("username"),
        ssh_password: formData.get("password"),
        time_interval: Number(formData.get("discovery_time")),
        OS: formData.get("os_type"),
      };

      console.log("postgree data : ", data);
      setPostgreeSSH(data);
      openModal();
    }

    // Handle form data (e.g., send it to the server)
  };

  const databaseConnectionPostgree = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let modalData = {
      db_user: formData.get("db_user"),
      db_password: formData.get("db_password"),
      remote_pg_host: formData.get("remote_pg_host"),
      remote_pg_port: Number(formData.get("remote_pg_port")),
      ...postgreeSSH,
    };

    // axios
    //   .post("http://10.2.0.26:5000/postgtres_db_details", modalData)
    //   .then((res) => {
    //     console.log("res : ", res);
    //     res.status === 200 && navigate("/databaseDiscovery/postgreDashboard");
    //   })
    //   .catch((err) => {
    //     console.log("err : ", err);
    //   });

      navigate(`/databaseDiscovery/postgreDashboard/${time_interval}`);

    console.log("modalData ", modalData);
  };

  const initiateVMconnectionMySql = async () => {
    // await axios
    //   .post("http://10.2.0.26:5000/setting_up_mysql_vm_connection", postObj)
    //   .then((res) => {
    //     // console.log("res : ", res);
    //   })
    //   .catch((err) => {
    //     console.log("initiateVMconnectionMySql err : ", err);
    //   });
      openModal();
  };

  const databaseConnectionMySql = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh on form submission
    // const formData = new FormData(e.currentTarget);

    // let data = {
    //   MYSQL_PASSWORD: formData.get("password"),
    //   MYSQL_USERNAME: formData.get("username"),
    // };

    // console.log("db data ", data);

    initialiseMySqlDBconnection();
  };

  const initialiseMySqlDBconnection = async () => {
    // await axios
    //   .post("http://10.2.0.26:5000/setting_up_mysql_server_connection", dbData)
    //   .then((res) => {
    //     console.log("db connection res : ", res);
    //     // setInterval(() => {
    //     //   fetchLivedata();
    //     // }, 5000);
    //   })
    //   .catch((err) => {
    //     console.log("db connection err : ", err);
    //   });
      navigate(`/databaseDiscovery/sqlDashboard/${time_interval}`);

  };

  return (
    <div className="bg-[#F2F7F8] flex justify-center pt-2">
      <div className="bg-white border border-gray-300 rounded-lg w-full h-full max-w-[80rem] p-10 relative ">
        <h2 className="text-[#006E74] text-2xl font-normal absolute top-4 left-4">
          DB Discovery Configuration
        </h2>
        <h5 className="text-[#7A7480] text-[16px] font-normal absolute top-12 left-4">
          Select your DB to Configure
        </h5>
        <div className="mt-20 flex justify-between gap-10">
          {/* Use justify-between for spacing */}
          <div className="w-[35vw] border-2 border-teal-600 rounded-lg h-[12vh] flex items-center justify-center">
            <div className="text-[#006E74] text-lg font-normal bg-slate-300 w-1/6 h-full flex items-center justify-center border-r-2 border-teal-500 rounded-l-lg">
              <h1>SQL</h1>
            </div>
            <div className="flex justify-around items-center w-5/6 h-full">
              <div
                className={`pb-2 ${
                  selectedImage === "mySql"
                    ? "border-b-4 pb-2 transition-all duration-300 rounded-md border-TealText"
                    : ""
                }`}
                onClick={() => SelectedDatabase("mySql")}
              >
                <img src={mySql} alt="MySQL" className=" w-auto" />
              </div>
              <div
                className={`${
                  selectedImage === "postgresql"
                    ? "border-b-4 pb-2 transition-all duration-300 rounded-md border-TealText"
                    : ""
                }`}
                onClick={() => SelectedDatabase("postgresql")}
              >
                <img src={postgresql} alt="PostgreSQL" className=" w-auto" />
              </div>
              <div
                className={`${
                  selectedImage === "sqlImage"
                    ? "border-b-4 pb-2 transition-all duration-300 rounded-md border-TealText"
                    : ""
                }`}
                onClick={() => SelectedDatabase("sqlImage")}
              >
                <img src={sqlImage} alt="SQL Server" className=" w-auto" />
              </div>
              <div
                className={`${
                  selectedImage === "Oracle"
                    ? "border-b-4 pb-2 transition-all duration-300 rounded-md border-TealText"
                    : ""
                }`}
                onClick={() => SelectedDatabase("Oracle")}
              >
                <img src={Oracle} alt="Oracle" className=" w-auto" />
              </div>
            </div>
          </div>
          <div className="w-[35vw] border-2 border-teal-600 rounded-lg h-[12vh] flex items-center justify-center">
            <div className="text-[#006E74] text-lg font-normal bg-slate-300 w-1/6 h-full flex items-center justify-center border-r-2 border-teal-500 rounded-l-lg">
              <h1>NoSQL</h1>
            </div>
            <div className="flex justify-around items-center w-5/6 h-full">
              <img src={mongoDb} alt="MongoDB" className="h-10 w-auto" />
              <img src={redis} alt="Redis" className="h-10 w-auto" />
              <img src={cassandra} alt="Cassandra" className="h-10 w-auto" />
              <img
                src={elasticSearch}
                alt="Elasticsearch"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>

        <form action="" onSubmit={handleFormSubmit}>
          {/* Configure Database Section */}
          <div className="mt-10 flex gap-4 items-center">
            <h2 className="text-[#006E74] text-xl font-normal">
              Configure Database
            </h2>
            <div className="flex items-center gap-1 ">
              <GiJusticeStar size={"8px"} color="brown" />
              <select
                name="os_type"
                className=" text-[#7A7480] py-2 px-6 border appearance-none border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#006E74] focus:border-transparent"
              >
                <option value="Select OS" hidden>
                  Select OS
                </option>
                <option value="Windows" className="p-2">
                  Windows
                </option>
                <option value="Linux" className="p-2">
                  Linux
                </option>
                {/* <option value="Mac" className="p-2">
              Mac
            </option> */}
                <option value="centos" className="p-2">
                  CentOS
                </option>
              </select>
            </div>
          </div>

          {/* Remote Port and Host Inputs */}
          <div className="mt-4 flex justify-center space-x-10">
            <div className="flex flex-col items-center justify-center w-[9vw]">
              <label className="text-[#7A7480] text-sm w-[10vw] flex items-center gap-1">
                <GiJusticeStar size={"8px"} color="brown" /> IP :
              </label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="ip"
                className="border border-gray-300 rounded-lg p-2 mt-1 w-[20vw]"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <label className="text-[#7A7480] text-sm w-[10vw] flex items-center gap-1">
                {" "}
                <GiJusticeStar size={"8px"} color="brown" /> Port :
              </label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="port"
                className="border border-gray-300 rounded-lg p-2 mt-1 w-[20vw]"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center space-x-10">
            <div className="flex flex-col items-center justify-center w-[9vw]">
              <label className="text-[#7A7480] text-sm w-[11vw]  flex items-center gap-1">
                <GiJusticeStar size={"8px"} color="brown" /> Username :
              </label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="text"
                name="username"
                className="border border-gray-300 rounded-lg p-2 mt-1 w-[20vw]"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <label className="text-[#7A7480] text-sm w-[10vw]  flex items-center gap-1">
                <GiJusticeStar size={"8px"} color="brown" /> Password :
              </label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg p-2 mt-1 w-[20vw]"
              />
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-[#006E74] text-xl font-normal">
              Set DB Discovery Window
            </h2>
          </div>

          <div className="mt-4 flex justify-center space-x-10">
            <div className="flex flex-col items-center justify-center p-2 rounded-md bg-gray-300">
              <div className="flex space-x-2">
                {[1, 5, 10, 15, 30, 60, 120].map((time, index) => (
                  <label
                    key={index}
                    className={`w-[10vw] h-[8vh] bg-white border-2 rounded-md flex items-center justify-center cursor-pointer ${
                      time_interval === time
                        ? "border-teal-600"
                        : "border-gray-300"
                    }`}
                    onClick={() => setTime_interval(time)}
                  >
                    <input
                      type="radio"
                      name="discovery_time"
                      value={time}
                      className="hidden"
                    />
                    {time} sec
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* select options */}

          <div className="mt-2 flex justify-center space-x-10">
            <div className="flex flex-col items-center justify-center w-[70vw] h-[10vh]">
              {/* <button className="border-2 rounded-lg border-teal-600 px-6 py-2 hover:border-teal-500">
            Configure
          </button> */}
              <>
                <div className="mt-2 flex justify-center space-x-10">
                  <div className="flex flex-col items-center justify-center w-[70vw] h-[10vh]">
                    <button
                      type="submit"
                      className="border-2 rounded-lg border-teal-600 px-6 py-2 hover:border-teal-500"
                      // onClick={openModal}
                    >
                      Configure
                    </button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </form>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Configure Settings"
      >
        <form
          action="submit"
          className="flex flex-col space-y-4 p-4 border rounded-lg bg-gray-100 w-[30vw]"
          onSubmit={
            selectedImage === "mySql"
              ? databaseConnectionMySql
              : databaseConnectionPostgree
          }
        >
          {selectedImage === "postgresql" && (
            <>
              <div className="flex flex-col">
                <label htmlFor="remote_pg_host" className="mb-2 font-semibold">
                  Postgres Host
                </label>
                <input
                  type="text"
                  id="remote_pg_host"
                  name="remote_pg_host"
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="remote_pg_port" className="mb-2 font-semibold">
                  PostgresPort
                </label>
                <input
                  type="text"
                  id="remote_pg_port"
                  name="remote_pg_port"
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
            </>
          )}
          <div className="flex flex-col">
            <label htmlFor="db_user" className="mb-2 font-semibold">
              Database Username
            </label>
            <input
              type="text"
              id="db_user"
              name="db_user"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="db_password" className="mb-2 font-semibold">
              Database Password
            </label>
            <input
              type="password"
              id="db_password"
              name="db_password"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-teal-600 text-white rounded-md hover:bg-teal-500"
          >
            Submit
          </button>
        </form>
      </CustomModal>
    </div>
  );
};

export default DatabaseDiscoveryDashboard;
