import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import AminitiesPage from "./Aminities";

export default function Aminities() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <AminitiesPage />
      </div>
    </>
  );
}
