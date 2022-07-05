import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Allproperties from "./Allproperties";

export default function AllPropeties() {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <Allproperties></Allproperties>
      </div>
    </>
  );
}
