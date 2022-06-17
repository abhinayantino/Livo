import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import EditCatalouge from "./EditCatalouge";

const ChargesCatalougeMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <EditCatalouge />
            </div>
        </>
    );
};

export default ChargesCatalougeMain;
