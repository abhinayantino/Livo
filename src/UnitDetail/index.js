import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import UnitDetailPage from "./UnitDetail";

const UnitDetail = () => {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <UnitDetailPage />
      </div>
    </>
  );
};

export default UnitDetail;
