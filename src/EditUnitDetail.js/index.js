import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import EditUnitDetailPage from "./EditUnitDetail";

const EditUnitDetail = () => {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <EditUnitDetailPage />
      </div>
    </>
  );
};

export default EditUnitDetail;
