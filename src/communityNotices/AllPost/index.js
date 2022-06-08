import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import AllPost from "./AllPosts";

const PostName = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <AllPost />
            </div>
        </>
    );
};

export default PostName;
