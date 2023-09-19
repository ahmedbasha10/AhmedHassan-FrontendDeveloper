import React from "react";

const DataGrid = ({ filteredData, handleRowClick }) => {
  const dataColumns = ["capsule_serial", "status", "original_launch", "type"]; // columns that we want to present
  if (!filteredData) {
    return <div>No data available.</div>; // Render a message if there's no data
  }

  return (
    <table className="table-auto w-full mx-auto text-center font-bold">
      <thead>
        <tr>
          {dataColumns.map((column, idx) => (
            <th
              key={idx}
              className="py-3 text-cyan-500 2xl:text-xl md:text-lg xxs:text-sm"
            >
              {column.replace("_", " ").toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData?.map((capsule, idx) => (
          <tr
            key={idx}
            className={`${
              idx % 2 ? "bg-cyan-700" : ""
            } cursor-pointer transition-all duration-300 hover:bg-cyan-900`}
            onClick={() => handleRowClick(capsule)}
          >
            {dataColumns.map((column, idx) => (
              <td
                key={idx}
                className="py-4 text-neutral-300 md:text-lg xxs:text-sm"
              >
                {capsule[column]
                  ? column === "original_launch"
                    ? capsule[column].slice(0, 10)
                    : capsule[column]
                  : "N/A"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
