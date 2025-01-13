import { AccountsType } from "../../../constants/Azure";
import Export from "../HelperFunctions/Export";
type AccountProps = {
  accountEntries: AccountsType[];
};

const Entries: React.FC<AccountProps> = ({ accountEntries }) => {
  console.log(accountEntries);
  return (
    <>
      <div className="w-[90%] h-[500px] scrollbar-none mx-auto overflow-auto">
        <div className="ml-[80%] py-2">
          <Export ExportProp={accountEntries} />
        </div>
        {accountEntries.map((account, index) => (
          <div key={index} className="mr-16 ml-16">
            {Object.entries(account).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-3 items-center border-b-2 border-slate-400/25"
              >
                {key == "User Principal Name" ? (
                  <>
                    <div className="flex items-center">
                      <img src="/Icons/ServicePrincipals_key.svg" />
                      <h1 className="pl-1.5">
                        {key}
                        <div>
                          <a
                            className="font-normal text-neutral-400 underline"
                            href={`mailto: ${value}`}
                          >
                            {value}
                          </a>
                        </div>
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="flex items-center">
                      {key == "Tenant ID" ? (
                        <img src="/Icons/ServicePrincipals_key.svg" />
                      ) : key == "Cloud Name" ? (
                        <img src="/Icons/AzureAccountsCloud.svg" />
                      ) : key == "Username" ? (
                        <img src="/Icons/AzureAccountUserName.svg" />
                      ) : key == "Display Name" ? (
                        <img src="/Icons/ServicePrincipals_name.svg" />
                      ) : key == "Given Name" ? (
                        <img src="/Icons/givenNameIcon.svg" />
                      ) : key == "ID" ? (
                        <img src="/Icons/idIcon.svg" />
                      ) : key == "Mail" ? (
                        <img src="/Icons/mailicon.svg" />
                      ) : key == "Job Title" ? (
                        <img src="/Icons/jobtitleicon.svg" />
                      ) : null}
                      <h1 className="pl-1.5">{key}</h1>
                    </div>
                    <div className="font-semibold">{value}</div>
                  </>
                )}
              </div>
            ))}
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
};

export default Entries;
