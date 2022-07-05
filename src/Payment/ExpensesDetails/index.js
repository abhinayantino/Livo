import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import ExpensesDetails from "./ExpensesDetails";

const ExpensesDetailsMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <ExpensesDetails />
      </div>
    </>
  );
};

export default ExpensesDetailsMain;
