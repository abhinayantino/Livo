import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";
import AllPropertyNav from "./AllPropertyNav";
import ProfileAvatar from "../assets/profileAvatar.jpg";

export default function TopNav() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="TopBar" style={{ height: "4.8rem" }}>
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="TopBar-child">
          {pathname === "/property" || pathname === "/user" ? (
            <AllPropertyNav style={{ marginleft: "200px" }} />
          ) : null}
          <div className="Top">
            <div className="Notification">
              <IoMdNotificationsOutline
                style={{
                  width: "24px",
                  height: "24px",
                  // marginRight: "30rem",
                  marginTop: "0.8rem",
                }}
              />
            </div>
            <div style={{ marginRight: "12px", marginTop: "0.8rem" }}>
              <p>Admin Name</p>
            </div>
            <div className="profile-badge">
              <img
                src={ProfileAvatar}
                alt="Profile"
                style={{
                  height: "3.5rem",
                  width: "3rem",
                  borderRadius: "50%",
                  marginRight: "1.5rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
