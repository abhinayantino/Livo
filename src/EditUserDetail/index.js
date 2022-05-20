import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import EditUserDetailPage from "./EditUserDetail";

export default function EditUserDetail() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <EditUserDetailPage />
      </div>
    </>
  );
}
