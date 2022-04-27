import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Propertyname from "./Propertyname";

export default function PropertyName() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />

        <Propertyname />
      </div>
    </>
  );
}
