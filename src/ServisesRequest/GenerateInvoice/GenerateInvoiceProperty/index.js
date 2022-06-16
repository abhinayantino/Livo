import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import GenerateInvoiceProperty from "./GenerateInvoiceProperty";

const GenerateInvoicePropertyMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <GenerateInvoiceProperty />
            </div>
        </>
    );
};

export default GenerateInvoicePropertyMain;
