import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import ChargesCatalouge from "./ChargesCatalouge";

const ChargesCatalougeMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <ChargesCatalouge />
      </div>
    </>
  );
};

export default ChargesCatalougeMain;
