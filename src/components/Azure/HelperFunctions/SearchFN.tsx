import React from "react";

const SearchFN = ({ data, changeEntrieData }: any) => {
  const SearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchText = e.target.value;

    // console.log("searchText : ", searchText);

    if (searchText) {
      let filteredData = data.filter((value: any) => {
        return (
          (value["Display Name"] &&
            value["Display Name"]
              .toLowerCase()
              .includes(searchText.toLowerCase())) ||
          (value.name &&
            value.name.toLowerCase().includes(searchText.toLowerCase()))
        );
      });
      changeEntrieData(filteredData);
    } else {
      changeEntrieData(data);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <label className="input input-bordered flex items-center gap-2 w-1/6 h-10 mb-5 mr-20">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => SearchChange(e)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );  
};

export default SearchFN;
