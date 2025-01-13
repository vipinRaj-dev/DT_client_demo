import { useState } from "react";
import { ResourceGrpData } from "../../../constants/Azure";
import SearchFN from "../HelperFunctions/SearchFN";
import AzureAccordian from "../HelperComponents/AzureAccordian";
import { Player } from "@lottiefiles/react-lottie-player";

const ResourceGroup = () => {
  const [groupAccordianData, setGroupAccordianData] = useState(ResourceGrpData);

  return (
    <div className="h-screen">
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide ">
        Resource Group
      </h1>
      <SearchFN data={ResourceGrpData} changeEntrieData={setGroupAccordianData} />
      {groupAccordianData.length ? (
        <AzureAccordian AccordianData={groupAccordianData} />
      ) : (
        <div className="w-1/3 mx-auto mt-10">
          <Player src={"/Lottie/NoDataLottie.json"} loop autoplay />
        </div>
      )}
    </div>
  );
};

export default ResourceGroup;
