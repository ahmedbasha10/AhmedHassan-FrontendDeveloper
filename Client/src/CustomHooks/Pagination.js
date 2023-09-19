import { useMemo, useState } from "react";

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = useMemo(() => {
    return Math.ceil(data?.length / itemsPerPage);
  }, [data, itemsPerPage]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  return [
    currentPage,
    setCurrentPage,
    setItemsPerPage,
    totalPages,
    paginatedData,
  ];
};

export default usePagination;
