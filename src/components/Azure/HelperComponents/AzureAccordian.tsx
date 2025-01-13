import { useState } from "react";
import {
  ServicePrincipalType,
  ResourceGroupType,
} from "../../../constants/Azure"; // Adjust the import path as needed
import Export from "../HelperFunctions/Export";

const AzureAccordian = ({
  AccordianData,
}: {
  AccordianData: ServicePrincipalType[] | ResourceGroupType[];
}) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const handleToggle = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div className="relative h-[500px] pt-10 overflow-auto scrollbar-none">
      <div className="absolute top-0 right-20 pt-1">
      <Export ExportProp={AccordianData} />
      </div>
      {AccordianData.map((value, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          className={`collapse collapse-arrow mx-auto w-[90%] rounded-md mt-2 bg-[#D7E0E3] transition-all duration-700 ease-in-out ${
            openAccordionIndex === index ? "collapse-open" : ""
          }`}
        >
          <input
            type="radio"
            name="my-accordion"
            checked={openAccordionIndex === index}
            className={`${openAccordionIndex === index && "hidden"}`}
            readOnly
          />
          <div
            className={`collapse-title text-xl font-medium ${
              openAccordionIndex === index && "hidden"
            }`}
          >
            {value.name}
          </div>
          <div
            className={`collapse-content space-y-4 ${
              openAccordionIndex === index && "pt-3"
            }`}
          >
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img src="/Icons/ServicePrincipals_name.svg" alt="" />
                <h1 className="text-lg font-semibold">Name</h1>
              </div>
              <h1 className="text-lg font-bold tracking-wide">{value.name}</h1>
            </div>
            {"GivenName" in value && (
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src="/Icons/ServicePrincipals_displayname.svg" alt="" />
                  <h1 className="text-lg font-semibold">Given Name</h1>
                </div>
                <h1 className="text-lg font-bold tracking-wide">
                  {value.GivenName}
                </h1>
              </div>
            )}
            {"createdDateAndTime" in value && (
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src="/Icons/ServicePrincipals_time.svg" alt="" />
                  <h1 className="text-lg font-semibold">
                    Created Date and Time
                  </h1>
                </div>
                <h1 className="text-lg font-bold tracking-wide">
                  {value.createdDateAndTime}
                </h1>
              </div>
            )}
            {"ID" in value && (
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src="/Icons/idIcon.svg" alt="" />
                  <h1 className="text-lg font-semibold">ID</h1>
                </div>
                <h1 className="text-lg font-bold tracking-wide">{value.ID}</h1>
              </div>
            )}
            {"Mail" in value && (
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src="/Icons/mailicon.svg" alt="" />
                  <h1 className="text-lg font-semibold">Mail</h1>
                </div>
                <h1 className="text-lg font-bold tracking-wide">
                  {value.Mail}
                </h1>
              </div>
            )}
            {"JobTitle" in value && (
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src="/Icons/jobtitleicon.svg" alt="" />
                  <h1 className="text-lg font-semibold">Job Title</h1>
                </div>
                <h1 className="text-lg font-bold tracking-wide">
                  {value.JobTitle}
                </h1>
              </div>
            )}
            {"displayName" in value && (
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src="/Icons/ServicePrincipals_displayname.svg" alt="" />
                  <h1 className="text-lg font-semibold">Display Name</h1>
                </div>
                <h1 className="text-lg font-bold tracking-wide">
                  {value.displayName}
                </h1>
              </div>
            )}
            {"UserPrincipalName" in value && (
              <div className="justify-between">
                <div className="flex gap-2">
                  <img src="/Icons/ServicePrincipals_key.svg" alt="" />
                  <h1 className="text-lg font-semibold">
                    User Principal Name
                    <div>
                      <a
                        className="font-normal text-neutral-400 underline"
                        href={`mailto: ${value.UserPrincipalName}`}
                      >
                        {value.UserPrincipalName}
                      </a>
                    </div>
                  </h1>
                </div>
              </div>
            )}
            {"servicePrincipalNames" in value && (
              <div className="">
                <div className="flex gap-2">
                  <img src="/Icons/ServicePrincipals_key.svg" alt="" />
                  <h1 className="text-lg font-semibold">
                    Service Principal Names
                  </h1>
                </div>
                <p className="font-light text-slate-500 ml-8">
                  {value.servicePrincipalNames.map((name, idx) => (
                    <span key={idx}>
                      {name}
                      {idx < value.servicePrincipalNames.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AzureAccordian;
