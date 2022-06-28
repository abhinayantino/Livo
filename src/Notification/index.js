import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import Notification from "./Notification";

export default function Notifications() {
  return (
    <section style={{ overflow: "hidden", height: "100vh" }}>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2", height: "99.9%" }}>
        <LeftNav />

        <Notification />
      </div>
    </section>
  );
}
