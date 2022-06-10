import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import maincart from "../../assets/maincart.png";
import pdf from "../../assets/pdf.png";
import { MdDownloadForOffline } from "react-icons/md";
import { Link } from "react-router-dom";
//import MenuPopupState from "../../components/MenuPopupState";
const Post = () => {
    return (
        <div className="post">
            <div className="posttitle">
                <h5 className="m-2">All Posts</h5>
                <div className="d-flex justify-content-between mt-3 mb-3">
                    <button className="round">Events</button>
                    <button className="round spam">Announcements</button>
                    <Link to="/reportedpost">
                        <button className="round">Reported Posts</button>
                    </Link>
                </div>
                <div>
                    <div
                        className="d-flex justify-content-start align-center"
                        style={{ columnGap: "200px" }}
                    >
                        <div
                            className="d-flex justify-content-start"
                            style={{ columnGap: "30px", color: "#727272" }}
                        >
                            <p>22 Feb, 2022</p>
                            <p className="change">Event</p>
                        </div>
                        <div>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "16px", fontWeight: "500" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut in neque ut est fringilla congue quis at
                            est.{" "}
                        </p>
                    </div>
                    <div>
                        <div
                            className="d-flex justify-content-start  align-items-baseline"
                            style={{ columnGap: "15px" }}
                        >
                            <MdAccessTimeFilled />
                            <p>02:00 PM- 03:00 PM</p>
                        </div>
                        <div
                            className="d-flex justify-content-start  align-items-baseline"
                            style={{ columnGap: "15px" }}
                        >
                            <BsFillCalendarDateFill />
                            <p>02:00 PM- 03:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "16px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut in neque ut est fringilla congue quis at
                            est.{" "}
                        </p>
                    </div>
                    <div className="d-flex justify-content-center align-center">
                        <img src={maincart} />
                    </div>
                    <div
                        className="d-flex justify-content-start align-center"
                        style={{ columnGap: "130px", marginTop: "20px" }}
                    >
                        <div
                            className="d-flex justify-content-start"
                            style={{ columnGap: "20px", color: "#727272" }}
                        >
                            <p>22 Feb, 2022</p>
                            <p className="change">Announcement</p>
                        </div>
                        <div>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "16px", fontWeight: "500" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut in neque ut est fringilla congue quis at
                            est.{" "}
                        </p>
                    </div>
                    <div>
                        <p style={{ fontSize: "16px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut in neque ut est fringilla congue quis at
                            est.{" "}
                        </p>
                    </div>
                    <div>
                        <p style={{ fontWeight: "500" }}>Notice Document</p>
                        <div className="d-flex justify-content-between align-items-center juned">
                            <div className="d-flex align-items-center">
                                <img src={pdf} />
                                <p style={{ padding: "12px 0px 0px 10px" }}>
                                    Document name.pdf
                                </p>
                            </div>
                            <div>
                                <MdDownloadForOffline />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
