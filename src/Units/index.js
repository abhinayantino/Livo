import React from "react";
import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Units from "./Units";

export default function PropertyName() {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />

        <Units />
      </div>
    </>
  );
}
