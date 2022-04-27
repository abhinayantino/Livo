import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Allproperties from "./Allproperties";

export default function AllPropeties() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <Allproperties></Allproperties>
      </div>
    </>
  );
}
