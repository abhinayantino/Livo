import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import EditCatalouge from "./EditCatalouge";

const CreateChargesCatalougeMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <EditCatalouge />
      </div>
    </>
  );
};

export default CreateChargesCatalougeMain;
