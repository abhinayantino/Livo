import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import AllInvoice from "./AllInvoice";

const AllInvoiceMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <AllInvoice />
      </div>
    </>
  );
};

export default AllInvoiceMain;
