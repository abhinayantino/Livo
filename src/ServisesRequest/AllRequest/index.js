import React from "react";
import LeftNav from "../../components/leftNav";
import TopNav from "../../components/topNav";
import AllRequest from "./AllRequest";

const ServisesRequestMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <AllRequest />
      </div>
    </>
  );
};

export default ServisesRequestMain;
