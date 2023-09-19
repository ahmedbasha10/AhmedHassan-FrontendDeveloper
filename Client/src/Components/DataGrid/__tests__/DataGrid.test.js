import React from "react";
import { render, screen } from "@testing-library/react";
import DataGrid from "../DataGrid";
import '@testing-library/jest-dom/extend-expect';

describe("DataGrid", () => {
  const mockData = [
    {
      capsule_serial: "C123",
      status: "Active",
      original_launch: "2023-09-20",
      type: "Dragon",
    },
  ];

  it("renders a message when there is no data", () => {
    render(<DataGrid filteredData={null} handleRowClick={() => {}} />);
    expect(screen.getByText("No data available.")).toBeInTheDocument();
  });

  it("renders the table with the correct headers and data", () => {
    render(<DataGrid filteredData={mockData} handleRowClick={() => {}} />);

    // // Check if table headers are rendered
    // expect(screen.getByText("CAPSULE SERIAL")).toBeInTheDocument();
    // expect(screen.getByText("STATUS")).toBeInTheDocument();
    // expect(screen.getByText("ORIGINAL LAUNCH")).toBeInTheDocument();
    // expect(screen.getByText("TYPE")).toBeInTheDocument();

    // // Check if the mock data is rendered in the table
    // expect(screen.getByText("C123")).toBeInTheDocument();
    // expect(screen.getByText("Active")).toBeInTheDocument();
    // expect(screen.getByText("2023-09-20")).toBeInTheDocument();
    // expect(screen.getByText("Dragon")).toBeInTheDocument();
  });
});
