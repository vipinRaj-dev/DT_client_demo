import { Containers } from "../../../constants/Azure";
import ListAccordion from "../HelperComponents/ListAccordion";
import Export from "../HelperFunctions/Export";

const ContainerList = () => {
  return (
    <div>
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide">
        Container List
      </h1>
      <div className="mt-4 w-3/4 m-auto flex flex-wrap justify-around h-[520px] overflow-auto scrollbar-none ">
        <div className="ml-[80%] pt-3">
          <Export ExportProp={Containers} />
        </div>
        <div>
          <ListAccordion
            AccordianData={Containers}
            startIndex={0}
            endIndex={4}
          />
        </div>
        <ListAccordion AccordianData={Containers} startIndex={4} endIndex={8} />
      </div>
    </div>
  );
};

export default ContainerList;
