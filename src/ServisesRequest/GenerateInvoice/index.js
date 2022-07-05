import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import GenerateInvoice from "./GenerateInvoice";

const ServisesRequestMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <GenerateInvoice />
      </div>
    </>
  );
};

export default ServisesRequestMain;
