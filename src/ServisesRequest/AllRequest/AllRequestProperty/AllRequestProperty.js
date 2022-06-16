import React from "react";
import "./index.css";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import Pdf from "../../../components/Pdf";
import CommentsField from "../../../components/CommentsField";
import PropertyTitle from "./PropertyTitle";
import ResidentData from "./ResidentData";
const AllRequestProperty = () => {
    const list = ["section1", "section2", "section3"];
    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="p-4">
                <PropertyTitle />
                <ResidentData />
                <div className="d-flex  mt-3">
                    <div style={{ width: "750px" }}>
                        <p className="assist">Assign Staff</p>
                    </div>
                    <p className="assist">Attached Documents</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mb-3">
                        <TextField
                            id="Area"
                            select
                            label="Select"
                            variant="standard"
                            placeholder="Select Property"
                            style={{
                                fontFamily: "Barlow",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "19px",
                                width: "250px",
                            }}
                        >
                            {list?.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <button className="assign">Assign</button>
                    </div>
                    <div>
                        <Pdf />
                    </div>
                </div>
                <div className="float-end">
                    <Pdf />
                </div>
                <div>
                    <h6 className="mt-5">comments</h6>
                    <CommentsField />
                    <CommentsField />
                </div>
                <div className="description">
                    <div className="mt-5">
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={4}
                            placeholder="Description"
                            variant="filled"
                            style={{ borderRadius: "12px", width: "578px" }}
                        />
                    </div>
                    <div>
                        <button className="prbtn">Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRequestProperty;
