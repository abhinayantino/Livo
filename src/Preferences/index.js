import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Preferences from "./Preferences";

export default function MyProfile() {
  return (
    <section style={{ overflow: "hidden", height: "100vh" }}>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2", height: "99.9%" }}>
        <LeftNav />

        <Preferences />
      </div>
    </section>
  );
}
