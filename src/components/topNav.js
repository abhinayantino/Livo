import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/logo.svg";

export default function TopNav() {
  return (
    <>
      <div className="TopBar">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="Top">
          <div className="Notification">
            <IoMdNotificationsOutline
              style={{ width: "24px", height: "24px", marginRight: "50px" }}
            />
          </div>
          <div style={{ marginRight: "12px" }}>
            <p>Admin Name</p>
          </div>
          <div>Profile</div>
        </div>
      </div>
    </>
  );
}
