import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import CreateEvents from "./CreateEvents";

const EventMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <CreateEvents />
            </div>
        </>
    );
};

export default EventMain;
