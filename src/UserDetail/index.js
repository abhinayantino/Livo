import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import UserDetailPage from "./UserDetail";

export default function UserDetail() {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <UserDetailPage />
      </div>
    </>
  );
}
