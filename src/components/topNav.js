import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";
import AllPropertyNav from "./AllPropertyNav";

export default function TopNav() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="TopBar">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="TopBar-child">
          {pathname === "/property" ? (
            <AllPropertyNav style={{ marginleft: "200px" }} />
          ) : null}
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
      </div>
    </>
  );
}
