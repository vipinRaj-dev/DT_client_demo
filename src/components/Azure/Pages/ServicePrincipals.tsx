import { useState } from "react";
import { servicePrincipalsData } from "../../../constants/Azure";
import AzureAccordian from "../HelperComponents/AzureAccordian";
import { Player } from "@lottiefiles/react-lottie-player";
import SearchFN from "../HelperFunctions/SearchFN";

const ServicePrincipals = () => {
  const [servicePrincipalsAccordianData, setServicePrincipalsAccordianData] =
    useState(servicePrincipalsData);

  return (
    <div className="h-screen">
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide ">
        Azure AD Service Principals
      </h1>
      <SearchFN
        data={servicePrincipalsData}
        changeEntrieData={setServicePrincipalsAccordianData}
      />
      <div className="h-3/4 overflow-auto scrollbar-none">
        {servicePrincipalsAccordianData.length ? (
          <AzureAccordian AccordianData={servicePrincipalsAccordianData} />
        ) : (
          <div className="w-1/3 mx-auto mt-10">
            <Player src={"/Lottie/NoDataLottie.json"} loop autoplay />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePrincipals;
