import React from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaginationController = ({
  currentPage,
  setCurrentPage,
  totalPages,
  handleSelectItemsPage,
}) => {
  return (
    <div className="mt-10 flex justify-end text-center">
      <button
        className="bg-cyan-500 py-3 md:px-10 xxs:px-5 px-3 rounded-lg text-white font-bold cursor-pointer transition-all duration-300 hover:bg-cyan-800"
        disabled={currentPage === 1}
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1); // to be secure if button is enabled from browser
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className="bg-cyan-500 md:mx-10 mx-3 py-3 md:px-10 px-3 xxs:px-5 rounded-lg text-white font-bold cursor-pointer transition-all duration-300 hover:bg-cyan-800"
        disabled={currentPage === totalPages}
        onClick={() => {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1); // to be secure if button is enabled from browser
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <select
        id="itemsPerPage"
        className="bg-gray-50 text-gray-900 text-sm rounded-lg cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5"
        onChange={handleSelectItemsPage}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default PaginationController;
