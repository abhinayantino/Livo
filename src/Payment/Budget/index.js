import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import Budget from "./Budget";

const BudgetMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <Budget />
      </div>
    </>
  );
};

export default BudgetMain;
