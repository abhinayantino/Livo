import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";

export default function Units() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
      </div>
    </>
  );
}
