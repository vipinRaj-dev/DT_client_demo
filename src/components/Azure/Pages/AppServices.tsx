import { services } from "../../../constants/Azure";
import { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import Export from "../HelperFunctions/Export";

const AppServices = () => {
  const [Apps, setApps] = useState(services);
  const [click, setClick] = useState(false);

  function filter() {
    let temp = [...services];

    setClick((prevClick) => !prevClick);

    if (click == false) {
      temp.sort(function (a, b) {
        return a.CreatedDateAndTime > b.CreatedDateAndTime
          ? 1
          : a.CreatedDateAndTime < b.CreatedDateAndTime
          ? -1
          : 0;
      });
    } else {
      temp.sort(function (a, b) {
        return a.CreatedDateAndTime > b.CreatedDateAndTime
          ? -1
          : a.CreatedDateAndTime < b.CreatedDateAndTime
          ? 1
          : 0;
      });
    }
    setApps(temp);
  }

  return (
    <div>
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide">
        App Services
      </h1>
      <div className="ml-[80%] py-3">
        <Export ExportProp={services} />
      </div>
      <table className="table-auto ml-12">
        <thead>
          <tr>
            <th className="text-left text-xl">
              <div className="flex gap-2 pl-4 pb-3 pt-3">
                <img className="size-11" src="/Icons/AzureServicesTHIcon.svg" />
                <div>
                  Display Name
                  <div className="font-normal text-sm text-gray-600 text-left">
                    App ID
                  </div>
                </div>
              </div>
            </th>
            <th className="text-left text-xl">
              <div className="flex items-center gap-2">
                Created Date
                <br /> and Time{" "}
                <div className="cursor-pointer">
                  <TbArrowsSort onClick={filter} size={25} />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Apps.map((item) => {
            const dateObj = new Date(item.CreatedDateAndTime);
            const formattedDate = dateObj.toLocaleDateString("en-US");
            const formattedTime = dateObj.toLocaleTimeString("en-US");

            return (
              <tr key={item.AppID}>
                <td>
                  <div className="flex gap-2 pl-2 pb-2 pt-2">
                    <img
                      className="size-10"
                      src="/Icons/AzureServicesNamesIcon.svg"
                    />
                    <div>
                      {item.DisplayName}
                      <div className="font-normal text-sm text-gray-600 text-left">
                        {item.AppID}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    {formattedDate}
                    <br />
                    {formattedTime}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AppServices;
