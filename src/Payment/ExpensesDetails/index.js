import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import ExpensesDetails from "./ExpensesDetails";

const ExpensesDetailsMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <ExpensesDetails />
            </div>
        </>
    );
};

export default ExpensesDetailsMain;
