import { containersType } from "../../../constants/Azure";
import { useState } from "react";
const ListAccordion = ({
  AccordianData,
  startIndex,
  endIndex,
}: {
  AccordianData: containersType[];
  endIndex: number;
  startIndex: number;
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prevArr) => {
      if (prevArr.includes(index)) {
        return prevArr.filter((i) => i !== index);
      } else {
        return [...prevArr, index];
      }
    });
  };

  return (
    <div>
      {AccordianData.slice(startIndex, endIndex).map((value, index) => (
        <div
          key={index}
          className={`collapse collapse-arrow min-w-[450px] bg-white border rounded-md transition-all duration-700 ease-in-out mt-4`}
        >
          <input
            type="checkbox"
            name="my-accordion"
            onClick={() => handleToggle(index)}
            readOnly
          />{" "}
          <div className={`collapse-title`}>
            <div
              className={`flex justify-center items-center gap-x-3 ${
                openIndexes.includes(index) && "hidden"
              }`}
            >
              <img src="/Icons/containerName.svg" alt="" />
              {value.name}
            </div>
          </div>
          <div className="collapse-content">
            {"name" in value && (
              <div className="flex justify-between px-4 items-center">
                <div className="flex gap-2 items-center">
                  <img className="w-10" src="/Icons/containerName.svg" alt="" />
                  <h1 className="font-semibold">Name</h1>
                </div>
                <h1 className="">{value.name}</h1>
              </div>
            )}
            {"server" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img
                    className="w-10"
                    src="/Icons/containerServer.svg"
                    alt=""
                  />
                  <h1 className="font-semibold">Server</h1>
                </div>
                <h1 className="">{value.server}</h1>
              </div>
            )}
            {"userName" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img
                    className="w-10"
                    src="/Icons/containerUserName.svg"
                    alt=""
                  />
                  <h1 className="font-semibold">User Name</h1>
                </div>
                <h1 className="">{value.userName}</h1>
              </div>
            )}
            {"OSType" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img className="w-10" src="/Icons/givenNameIcon.svg" alt="" />
                  <h1 className="font-semibold">OS Type</h1>
                </div>
                <h1 className="">{value.OSType}</h1>
              </div>
            )}
            {"port" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img className="w-10" src="/Icons/containerPort.svg" alt="" />
                  <h1 className="font-semibold">Port</h1>
                </div>
                <h1 className="">{value.port}</h1>
              </div>
            )}
            {"protocol" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img
                    className="w-10"
                    src="/Icons/containerProtocol.svg"
                    alt=""
                  />
                  <h1 className="font-semibold">Protocol</h1>
                </div>
                <h1 className="">{value.protocol}</h1>
              </div>
            )}
            {"cpu" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img className="w-10" src="/Icons/containerCPU.svg" alt="" />
                  <h1 className="font-semibold">CPU</h1>
                </div>
                <h1 className="">{value.cpu}</h1>
              </div>
            )}
            {"gpu" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img className="w-10" src="/Icons/containerGPU.svg" alt="" />
                  <h1 className="font-semibold">GPU</h1>
                </div>
                <h1 className="">{value.gpu}</h1>
              </div>
            )}
            {"memory" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img className="w-10" src="/Icons/containerMem.svg" alt="" />
                  <h1 className="font-semibold">Memory in GB</h1>
                </div>
                <h1 className="">{value.memory}</h1>
              </div>
            )}
            {"IPAddress" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img className="w-10" src="/Icons/containerIP.svg" alt="" />
                  <h1 className="font-semibold">IP Address</h1>
                </div>
                <h1 className="">{value.IPAddress}</h1>
              </div>
            )}
            {"type" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img className="w-10" src="/Icons/containerType.svg" alt="" />
                  <h1 className="font-semibold">Type</h1>
                </div>
                <h1 className="">{value.type}</h1>
              </div>
            )}
            {"location" in value && (
              <div className="flex justify-between px-4">
                <div className="flex gap-2">
                  <img
                    className="w-10"
                    src="/Icons/containerLocation.svg"
                    alt=""
                  />
                  <h1 className="font-semibold">Location</h1>
                </div>
                <h1>{value.location}</h1>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAccordion;
