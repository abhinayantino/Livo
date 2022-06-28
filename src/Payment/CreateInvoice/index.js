import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import CreateInvoice from "./CreateInvoice";

const AllInvoiceMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <CreateInvoice />
            </div>
        </>
    );
};

export default AllInvoiceMain;
