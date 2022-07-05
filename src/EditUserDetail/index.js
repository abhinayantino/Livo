import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import EditUserDetailPage from "./EditUserDetail";

export default function EditUserDetail() {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <EditUserDetailPage />
      </div>
    </>
  );
}
