import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import EditUnitDetailPage from "./EditUnitDetail";

const EditUnitDetail = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <EditUnitDetailPage />
      </div>
    </>
  );
};

export default EditUnitDetail;
