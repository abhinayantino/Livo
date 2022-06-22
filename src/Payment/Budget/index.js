import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import Budget from "./Budget";

const BudgetMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <Budget />
            </div>
        </>
    );
};

export default BudgetMain;
