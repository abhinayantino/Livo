import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import AllRequestProperty from "./AllRequestProperty";

const AllRequestpropertyMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <AllRequestProperty />
      </div>
    </>
  );
};

export default AllRequestpropertyMain;
