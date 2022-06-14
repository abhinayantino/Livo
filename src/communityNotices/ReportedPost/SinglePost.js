import React, { useEffect } from "react";
import "../AllPost/index.css";
import profile from "../../assets/profile.png";
import man from "../../assets/man.png";
import pman from "../../assets/pman.png";
import MenuPopupState from "../../components/Menu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { getReportedPosts } from "../../services/allCommunityApi";

const SinglePost = () => {
    const [posts, setPosts] = React.useState([]);
    const ReportedPost = async () => {
        const response = await getReportedPosts();
        setPosts(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        ReportedPost();
    }, []);
    return (
        <div className="reportedpost">
            <div className="posttitle">
                <h5 className="m-2">All Posts</h5>
                <div className="d-flex justify-content-between mt-3 mb-3">
                    <button className="round">Events</button>
                    <button className="round spam">Announcements</button>
                    <button className="round">Reported Posts</button>
                </div>
                <div
                    className="d-flex justify-content-start align-items-center mt-5 poster"
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
                        <img src={profile} alt="profile" />
                        <div className="d-flex align-items-center flex-column">
                            <p className="name">Sabina Ahmed</p>
                            <p
                                style={{
                                    alignSelf: "flex-start",
                                    color: " #727272",
                                    fontSize: "12px",
                                }}
                            >
                                1 hr ago
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut in neque ut est fringilla congue quis at est.{" "}
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
                            <img src={pman} />
                        </div>
                        <div className="d-flex flex-column">
                            <p className="name">Hussain Sajwani</p>
                            <p style={{ fontSize: "12px" }}>1 hour ago</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p style={{ fontSize: "14px" }}>In-appropriate content</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
