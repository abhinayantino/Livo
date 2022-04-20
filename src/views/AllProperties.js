import React from "react";
import "./AllProperties.css";
import BasicTable from "../components/table";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="Property">All Properties</div>

        <BasicTable />
      </div>
    </>
  );
}
