import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Propertyname from "./Propertyname";

export default function PropertyName() {
  return (
    <section style={{ overflow: "hidden", height: "100vh" }}>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2", height: "99.9%" }}>
        <LeftNav />

        <Propertyname />
      </div>
    </section>
  );
}
