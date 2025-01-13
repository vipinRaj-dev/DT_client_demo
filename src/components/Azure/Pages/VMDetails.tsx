import { Machines } from "../../../constants/Azure";
import Container from "../HelperComponents/Container";

const VMDetails = () => {
  return (
    <div>
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide ">
        VM Details
      </h1>
      <Container accountEntries={Machines} imgSrc="/Icons/TrianglePurple.svg"/>
    </div>
  );
};

export default VMDetails;
