import  { useEffect, useState } from "react";
import Breadcrumbs from "./breadCrumbs";
import SideBar from "./sideBar";
import Pagination from "./Pagination";
import { useDashboard } from "./dasboardContext";


// interface PackageData {
//   App_comp: string;
//   SoftwarePackages: string;
//   Version: string;
// }


export default function InstalledApps() {
  const [installed_packages, setInstalledPackages] = useState<any>([]);

  const { data } = useDashboard();

  const breadcrumbItems = [
    { label: "Servers", url: "/scanResult" },
    { label: data && data["Server_IP"] ? data["Server_IP"] : "N/A" }
  ];

  useEffect(() => {
    const packages = data?.["installedApps"]
    setInstalledPackages(packages);
    console.log(installed_packages)
  })

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = installed_packages.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Change items per page
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <SideBar />

      <div className="p-4 ml-[19vw]" style={{ overflowX: "hidden" }}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2
          className="text-teal-600 text-xl mb-4 ml-4 mt-4"
          style={{ color: "#006E74" }}
        >
          Installed Software Details
        </h2>
        <div className="flex flex-wrap"></div>
        <div
          className="overflow-x-auto"
          style={{ width: "76vw", marginLeft: "1.2vw" }}
        >
          <table className="table w-full">
            <thead style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}>
              <tr>
                <th className="text-left">Sl. No</th>
                <th className="text-left">Name</th>
                <th className="text-left">Version</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((row: any, index: any) => (
                <tr key={index}>
                  <td className="text-left border-b">{index+1}</td>
                  <td className="text-left border-b">{row.name}</td>
                  <td className="text-left border-b">{row.version}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          totalItems={installed_packages.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  );
}
