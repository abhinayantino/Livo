import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Dashboard from "./Dashboard";

const DashboardMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <Dashboard />
      </div>
    </>
  );
};

export default DashboardMain;
