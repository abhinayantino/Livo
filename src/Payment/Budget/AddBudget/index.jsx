import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import AddBudget from "./AddBudget";

const AddBudgetMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <AddBudget />
      </div>
    </>
  );
};

export default AddBudgetMain;
