import React, { useMemo, useState } from "react";
import { useGetCapsulesQuery } from "../../Redux/Api/api";
import {
  DataGrid,
  Popup,
  PaginationController,
  Search,
  Spinner,
} from "../../Components/ComponentsExport";
import {
  usePagination,
  useDebounce,
} from "../../CustomHooks/CustomHooksExport";

const Capsules = () => {
  const {
    data: capsules = [],
    isLoading,
    isError,
    error,
  } = useGetCapsulesQuery();

  // popup
  const [selectedRowData, setSelectedRowData] = useState(null);
  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
  };

  // search
  const [searchStatus, setSearchStatus] = useState("");
  const [searchLaunch, setSearchLaunch] = useState("");
  const [searchType, setSearchType] = useState("");

  // pagination
  const [
    currentPage,
    setCurrentPage,
    setItemsPerPage,
    totalPages,
    paginatedData,
  ] = usePagination(capsules);

  // use debounce to enhance search
  const debouncedSearchStatus = useDebounce({
    value: searchStatus,
    delay: 500,
  });

  const debouncedSearchLaunch = useDebounce({
    value: searchLaunch,
    delay: 500,
  });

  const debouncedSearchType = useDebounce({
    value: searchType,
    delay: 500,
  });

  const closePopup = () => {
    setSelectedRowData(null);
  };

  const filteredData = useMemo(() => {
    if (debouncedSearchStatus || debouncedSearchLaunch || debouncedSearchType) {
      return paginatedData?.filter((capsule) => {
        // handle if search is empty
        const matchesStatus =
          !debouncedSearchStatus ||
          capsule.status?.includes(debouncedSearchStatus);
        const matchesLaunch =
          !debouncedSearchLaunch ||
          capsule.original_launch?.includes(debouncedSearchLaunch);
        const matchesType =
          !debouncedSearchType || capsule.type?.includes(debouncedSearchType);

        return matchesStatus && matchesLaunch && matchesType;
      });
    } else {
      return paginatedData;
    }
  }, [
    paginatedData,
    debouncedSearchStatus,
    debouncedSearchLaunch,
    debouncedSearchType,
  ]);

  const handleSelectItemsPage = (e) => {
    setCurrentPage(1);
    setItemsPerPage(parseInt(e.target.value));
    // reset search when change number of items
    setSearchStatus("");
    setSearchLaunch("");
    setSearchType("");
  };

  return (
    <section className="my-20 w-full md:container">
      <h2 className="md:text-5xl xxs:text-4xl text-center font-bold mb-6 text-white">
        Capsules <span className="text-cyan-400">Info</span>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <h1 className="text-red-600 text-center text-3xl">{error.error}</h1>
      ) : filteredData ? (
        <div className="mt-14">
          <Search
            searchStatus={searchStatus}
            searchLaunch={searchLaunch}
            searchType={searchType}
            setSearchStatus={setSearchStatus}
            setSearchLaunch={setSearchLaunch}
            setSearchType={setSearchType}
          />
          <DataGrid
            filteredData={filteredData}
            handleRowClick={handleRowClick}
          />
          <PaginationController
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            handleSelectItemsPage={handleSelectItemsPage}
          />
        </div>
      ) : null}
      {selectedRowData && <Popup data={selectedRowData} onClose={closePopup} />}
    </section>
  );
};

export default Capsules;
