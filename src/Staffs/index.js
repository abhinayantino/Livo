import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import User from "./Staffs";

export default function PropertyName() {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <User />
      </div>
    </>
  );
}
