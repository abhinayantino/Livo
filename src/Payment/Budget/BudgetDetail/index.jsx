import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import BudgetDetail from "./BudgetDetail";

const AddBudgetMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <BudgetDetail />
            </div>
        </>
    );
};

export default AddBudgetMain;
