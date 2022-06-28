import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import AllInvoice from "./Reminder";

const ReminderMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <AllInvoice />
            </div>
        </>
    );
};

export default ReminderMain;
