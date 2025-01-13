import {
  ResourceGroupType,
  ServicePrincipalType,
  AccountsType,
  containersType,
  storageAccountEntriesType,
} from "../../../constants/Azure";
import { CSVDownload } from "react-csv";
import { useState } from "react";

const Export = ({
  ExportProp,
}: {
  ExportProp:
    | ServicePrincipalType[]
    | ResourceGroupType[]
    | AccountsType[]
    | containersType[]
    | storageAccountEntriesType[];
}) => {
  const [csvData, setCsvData] = useState<any[]>([]);
  const [shouldDownload, setShouldDownload] = useState(false);

  const handleOptionSelect = (option: string) => {
    if (option === "csv") {
      setCsvData(ExportProp); // Set the CSV data
      setShouldDownload(true); // Trigger the CSV download
      setTimeout(() => setShouldDownload(false), 100); // Reset the trigger
    } else if (option === "mail") {
      console.log("Export as CSV to Mail selected");
      // Add logic for exporting to mail here
    }
    // Reset the dropdown to the default value
    const dropdown = document.getElementById(
      "export-dropdown"
    ) as HTMLSelectElement;
    if (dropdown) dropdown.value = "";
  };

  return (
    <div className="relative inline-block">
      <select
        id="export-dropdown"
        onChange={(e) => handleOptionSelect(e.target.value)}
        className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
      >
        <option value="" hidden>
          Export
        </option>
        <option value="csv">Export as CSV</option>
        <option value="mail">Export as CSV to Mail</option>
      </select>

      {/* Dynamically render the CSVDownload component */}
      {shouldDownload && <CSVDownload data={csvData} target="_blank" />}
    </div>
  );
};

export default Export;
