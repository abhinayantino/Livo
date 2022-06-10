import React from "react";
import InputFiled from "../CreateAnnouncement/InputFiled";

const CreateEvents = () => {
    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div style={{ padding: "0px 25px 0px 25px" }}>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div>
                        <h5>Create New Announcement</h5>
                    </div>
                    <div>
                        <button
                            className="Button"
                            style={{
                                border: "1px solid #0C344E",
                                color: "#0C344E",
                                background: "white",
                                width: "80px",
                                height: "48px",
                                marginRight: "10px",
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="Button"
                            variant="contained"
                            color="success"
                            style={{
                                border: "1px solid #0C344E",
                                color: "white",
                                background: "#0C344E",
                                width: "80px",
                                height: "48px",
                            }}
                        >
                            Post
                        </button>
                    </div>
                </div>
                <div className="d-flex  mt-5">
                    <div style={{ width: "700px" }}>
                        <h6>Post Details</h6>
                    </div>
                    <h6>Attach Documents</h6>
                </div>
                <InputFiled />
                <div className="d-flex mt-5">
                    <div style={{ width: "580px" }}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <label htmlFor="datestart">Start Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="datestart"
                                    placeholder=""
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #DFE0E0",
                                        width: "275px",
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="datestart">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="datestart"
                                    placeholder=""
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #DFE0E0",
                                        width: "275px",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <div>
                                <label htmlFor="datestart">End Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="datestart"
                                    placeholder=""
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #DFE0E0",
                                        width: "275px",
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="datestart">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="datestart"
                                    placeholder=""
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #DFE0E0",
                                        width: "275px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvents;
