import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Dashboard from "./Dashboard";

const DashboardMain = () => {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <Dashboard />
      </div>
    </>
  );
};

export default DashboardMain;
