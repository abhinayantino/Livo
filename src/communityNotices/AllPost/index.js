import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import AllPosts from "./AllPosts";

const PostName = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <AllPosts />
      </div>
    </>
  );
};

export default PostName;
