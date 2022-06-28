import React from "react";
import p2 from "../assets/p2.png";
import "./commentFields.css";
const CommentsField = () => {
    return (
        <div className="mb-3">
            <div className="usr_dtl">
                <div>
                    <img src={p2} alt="p1" />
                </div>
                <div className="nm_tm">
                    <div className="nm ">
                        <h6 className="px-2">Akram Kareem</h6>
                        <p>1d ago</p>
                    </div>
                    <div className="role ">
                        <p>Resident</p>
                    </div>
                </div>
            </div>
            <div className="hexagon">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod te ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod te.
            </div>
        </div>
    );
};

export default CommentsField;
