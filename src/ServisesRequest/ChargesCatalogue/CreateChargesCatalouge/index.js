import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import CreateChargesCatalouge from "./CreateChargesCatalouge";

const ChargesCatalougeMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <CreateChargesCatalouge />
            </div>
        </>
    );
};

export default ChargesCatalougeMain;
