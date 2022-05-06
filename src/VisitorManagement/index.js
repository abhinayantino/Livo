import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import User from "./VisitorManagement";

export default function PropertyName() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <User />
      </div>
    </>
  );
}
