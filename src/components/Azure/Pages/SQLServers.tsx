import { Servers } from "../../../constants/Azure";
import Container from "../HelperComponents/Container";

const SQLServers = () => {
  return (
    <div>
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide ">
        SQL Servers
      </h1>
      <Container accountEntries={Servers} imgSrc="/Icons/TriangleGreen.svg"/>
    </div>
  );
};

export default SQLServers;
