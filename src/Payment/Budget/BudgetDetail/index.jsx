import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import BudgetDetail from "./BudgetDetail";

const AddBudgetMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <BudgetDetail />
      </div>
    </>
  );
};

export default AddBudgetMain;
