import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import AllInvoice from "./AllInvoice";

const AllInvoiceMain = () => {
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

export default AllInvoiceMain;
