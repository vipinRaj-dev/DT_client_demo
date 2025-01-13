import { useState } from "react";
import { ActiveDirectory } from "../../../constants/Azure";
import Entries from "../HelperComponents/Entries";
import SearchFN from "../HelperFunctions/SearchFN";
import { Player } from "@lottiefiles/react-lottie-player";

const AzureADUser = () => {
  const [EntriesData, SetEntriesData] = useState(ActiveDirectory);

  return (
    <div>
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide ">
        Azure AD User
      </h1>
      <SearchFN data={ActiveDirectory} changeEntrieData={SetEntriesData} />
      

      {EntriesData.length ? (
        <Entries accountEntries={EntriesData} />
      ) : (
        <div className="w-1/3 mx-auto">
          <Player
            src={"/Lottie/NoDataLottie.json"}
            loop
            autoplay
            className=""
          />
        </div>
      )}
    </div>
  );
};

export default AzureADUser;
