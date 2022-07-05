import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import CreateAnnouncement from "./CreateAnnouncement";

const AnnouncementMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <CreateAnnouncement />
      </div>
    </>
  );
};

export default AnnouncementMain;
