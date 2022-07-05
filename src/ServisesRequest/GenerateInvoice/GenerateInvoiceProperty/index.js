import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import GenerateInvoiceProperty from "./GenerateInvoiceProperty";

const GenerateInvoicePropertyMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <GenerateInvoiceProperty />
      </div>
    </>
  );
};

export default GenerateInvoicePropertyMain;
