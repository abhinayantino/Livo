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
            <div
              className="Notification"
              style={{ marginRight: "1.2rem", marginTop: "0.9rem" }}
            >
              <IoMdNotificationsOutline
                style={{
                  width: "32px",
                  height: "32px",
                  // marginRight: "3rem",
                }}
              />
            </div>
            <div style={{ marginRight: "20px", marginTop: "1.2rem" }}>
              <b>Omaar Apartment</b>
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
