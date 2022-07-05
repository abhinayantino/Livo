import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import ReportedPost from "./ReportedPost";
const ReportedPostMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <ReportedPost />
      </div>
    </>
  );
};

export default ReportedPostMain;
