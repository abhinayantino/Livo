import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import CreateAnnouncement from "./CreateAnnouncement";

const AnnouncementMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <CreateAnnouncement />
            </div>
        </>
    );
};

export default AnnouncementMain;
