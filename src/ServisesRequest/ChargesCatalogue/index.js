import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import ChargesCatalouge from "./ChargesCatalouge";

const ChargesCatalougeMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <ChargesCatalouge />
            </div>
        </>
    );
};

export default ChargesCatalougeMain;
