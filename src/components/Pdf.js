import React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import pdf from "../assets/pdf.png";
const Pdf = () => {
    return (
        <div>
            <div style={{ width: "270px" }}>
                <div className="d-flex justify-content-between align-items-center paros">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={pdf} alt="pdfimage" />
                        <p style={{ padding: "12px 0px 0px 10px" }}>
                            Document name.pdf
                        </p>
                    </div>
                    <div className="float-right">
                        <MdDownloadForOffline />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pdf;
