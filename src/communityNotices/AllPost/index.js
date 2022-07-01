import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import AllPosts from "./AllPosts";

const PostName = () => {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex", background: "#FFE3D2" }}>
        <LeftNav />
        <AllPosts />
      </div>
    </>
  );
};

export default PostName;
