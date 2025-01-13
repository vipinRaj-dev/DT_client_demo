const AzureNavbar = () => {
  return (
    <div className="bg-white flex p-4">
      <a href="/infraSummary">
        <div className="flex items-center">
          <h2
            className="text-2xl navbarTitle cursor-default"
            style={{ fontWeight: "bold" }}
          >
            UST &nbsp;
          </h2>
          <h2 className="text-2xl navbarTitle cursor-default">DiscoveryTool</h2>
        </div>
      </a>
      {/* <a href="/azure">
        <img src="/Icons/Microsoft-Azure-Icon.svg" alt="" />
      </a>
      <a href="/aws">
        <img width={150} src="/Icons/AWSIcon.svg" alt="" />
      </a> */}
    </div>
  );
};

export default AzureNavbar;
