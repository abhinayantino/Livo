import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import AllRequest from "./AllRequest";

const ServisesRequestMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <AllRequest />
            </div>
        </>
    );
};

export default ServisesRequestMain;
