import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import UnitDetailPage from "./UnitDetail";

const UnitDetail = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <UnitDetailPage />
      </div>
    </>
  );
};

export default UnitDetail;
