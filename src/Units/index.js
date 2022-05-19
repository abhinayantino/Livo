import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import UnitsPage from "./UnitsPage";

export default function Units() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <UnitsPage />
      </div>
    </>
  );
}
