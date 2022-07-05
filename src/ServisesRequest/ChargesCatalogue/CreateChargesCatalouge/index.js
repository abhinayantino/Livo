import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import CreateChargesCatalouge from "./CreateChargesCatalouge";

const ChargesCatalougeMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <CreateChargesCatalouge />
      </div>
    </>
  );
};

export default ChargesCatalougeMain;
