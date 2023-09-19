import React from "react";

const Search = ({
  searchStatus,
  searchLaunch,
  searchType,
  setSearchStatus,
  setSearchLaunch,
  setSearchType,
}) => {
  return (
    <div className="flex justify-center flex-wrap mb-4">
      <input
        type="text"
        placeholder="Search by status"
        value={searchStatus}
        onChange={(e) => setSearchStatus(e.target.value)}
        className="bg-gray-200 px-3 py-2 rounded-lg mr-4 mb-3"
      />
      <input
        type="text"
        placeholder="Search by launch date"
        value={searchLaunch}
        onChange={(e) => setSearchLaunch(e.target.value)}
        className="bg-gray-200 px-3 py-2 rounded-lg mr-4 mb-3"
      />
      <input
        type="text"
        placeholder="Search by type"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="bg-gray-200 px-3 py-2 rounded-lg mr-4 mb-3"
      />
    </div>
  );
};

export default Search;
