import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import GenerateInvoice from "./GenerateInvoice";

const ServisesRequestMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <GenerateInvoice />
            </div>
        </>
    );
};

export default ServisesRequestMain;
