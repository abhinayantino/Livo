import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import AddBudget from "./AddBudget";

const AddBudgetMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <AddBudget />
            </div>
        </>
    );
};

export default AddBudgetMain;
