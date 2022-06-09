import React from "react";
import SearchBar from "../../components/SearchBar";
import { MdDateRange } from "react-icons/md";
import SinglePost from "./SinglePost";
const ReportedPost = () => {
    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="d-flex justify-content-center mt-5">
                <div style={{ marginRight: "15px" }}>
                    <SearchBar />
                </div>
                <button
                    style={{
                        padding: "0px 29px 0px 16px",
                        border: "2px solid #D65400",
                        borderRadius: "8px",
                        background: "#FFE3D2",
                        color: "#D65400",
                    }}
                >
                    <MdDateRange /> Filter
                </button>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <SinglePost />
            </div>
        </div>
    );
};

export default ReportedPost;
