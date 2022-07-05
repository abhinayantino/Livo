import React from "react";

import LeftNav from "../components/leftNav";
import TopNav from "../components/topNav";
import AddUser from "./AddUser";

export default function PropertyName() {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />

        <AddUser />
      </div>
    </>
  );
}
