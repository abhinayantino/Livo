import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import CreateInvoice from "./CreateInvoice";

const AllInvoiceMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <CreateInvoice />
      </div>
    </>
  );
};

export default AllInvoiceMain;
