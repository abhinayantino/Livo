import React from "react";
import TopNav from "../../components/topNav";
import LeftNav from "../../components/leftNav";
import CreateEvents from "./CreateEvents";

const EventMain = () => {
  return (
    <>
      <TopNav />
      <div className="top-level-container">
        <LeftNav />
        <CreateEvents />
      </div>
    </>
  );
};

export default EventMain;
