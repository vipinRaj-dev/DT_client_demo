import { accounts } from "../../../constants/Azure";
import Entries from "../HelperComponents/Entries";

const Account = () => {
  return (
    // <div className="-300 h-full flex justify-center items-center font">
    <div>
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide">Azure Accounts</h1>
      <Entries accountEntries={accounts} />
    </div>
  );
};

export default Account;
