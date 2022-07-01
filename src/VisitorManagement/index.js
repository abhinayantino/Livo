import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Visitor from "./VisitorManagement";

export default function PropertyName() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <Visitor />
      </div>
    </>
  );
}
