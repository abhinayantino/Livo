import React from "react";
import { Link } from "react-router-dom";
import "../communityNotices/AllPost/index.css";

const HederAllPost = () => {
    return (
        <div className="pheader">
            <h5 className="m-2">All Posts</h5>
            <div className="d-flex justify-content-between  mt-3 mb-3">
                <button className="round">Events</button>
                <button className="round spam">Announcements</button>
                <Link to="/reportedpost">
                    <button className="round">Reported Posts</button>
                </Link>
            </div>
        </div>
    );
};

export default HederAllPost;
