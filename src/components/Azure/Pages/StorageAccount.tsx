import { storageAccountEntries } from "../../../constants/Azure";
import Export from "../HelperFunctions/Export";

const StorageAccount = () => {
  return (
    <div>
      <h1 className="text-TealText pt-5 pl-10 text-2xl tracking-wide ">
        Storage Account
      </h1>
      <div className="ml-[80%] pt-2">
        <Export ExportProp={storageAccountEntries} />
      </div>
      <div className="mt-5 mx-6 overflow-hidden rounded-t-lg">
        <table className="border">
          <thead className="bg-[#D7E0E3] text-lg text-center text-[#003C51]">
            <tr className="h-10">
              <td>Name</td>
              <td>Creation Time</td>
              <td>ID</td>
              <td>Location</td>
              <td>Resource Group</td>
              <td>Type</td>
            </tr>
          </thead>

          {storageAccountEntries.map((value, index) => (
            <tbody key={index}>
              <tr className="text-center text-neutral-500">
                <td>{value.name}</td>
                <td>{value.creationTime}</td>
                <td>{value.id}</td>
                <td>{value.location}</td>
                <td>{value.resourceGroup}</td>
                <td>{value.type}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default StorageAccount;
