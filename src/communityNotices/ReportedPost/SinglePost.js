import React from "react";
import "../AllPost/index.css";
import profile from "../../assets/profile.png";
import man from "../../assets/man.png";
import pman from "../../assets/pman.png";
import MenuPopupState from "../../components/Menu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import moment from "moment";
import { Avatar } from "@mui/material";

const SinglePost = ({ item }) => {
    console.log(item);
    return (
        <div className="reportedpost">
            <div className="reportedpost-header">
                <div
                    className="d-flex justify-content-start align-items-center"
                    style={{ columnGap: "340px" }}
                >
                    <div
                        className="d-flex justify-content-start"
                        style={{
                            columnGap: "20px",
                            width: "48px",
                            height: "48px",
                        }}
                    >
                        <Avatar
                            alt="Travis Howard"
                            src={item.post.user.profilePicture}
                            sx={{ width: 56, height: 56 }}
                        />

                        <div className="d-flex align-items-center flex-column">
                            <p className="name">{item.post.user.name}</p>
                            <p
                                style={{
                                    alignSelf: "flex-start",
                                    color: " #727272",
                                    fontSize: "12px",
                                }}
                            >
                                {moment(item.createdAt)
                                    .startOf("day")
                                    .fromNow()}
                            </p>
                        </div>
                    </div>
                    <div>
                        <MenuPopupState
                            data={{
                                icons: [
                                    <BiCheckCircle />,
                                    <RiDeleteBin6Line />,
                                ],
                                texts: ["Ignore", "Delete"],
                            }}
                        />
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: "12px", marginTop: "10px" }}>
                        {item.post.content}
                    </p>
                </div>
                <div className="d-flex justify-content-center align-center">
                    <img src={man} alt="men" />
                </div>
                <div className="mt-3 text-secondary">
                    <p>Reported By</p>
                </div>
                <div>
                    <div className="d-flex" style={{ columnGap: "20px" }}>
                        <div className="">
                            <Avatar
                                alt="Travis Howard"
                                src={item.post.user.profilePicture}
                                sx={{ width: 56, height: 56 }}
                            />
                        </div>
                        <div className="d-flex flex-column">
                            <p className="name">{item.userReported.name}</p>
                            <p style={{ fontSize: "12px" }}>
                                {moment(item.createdAt)
                                    .startOf("day")
                                    .fromNow()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p style={{ fontSize: "14px" }}>
                        <span style={{ color: "#727272", fontWeight: "600" }}>
                            Reason
                        </span>
                        &nbsp; {item.reason}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
