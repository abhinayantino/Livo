import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SearchBar from "../components/SearchBar";
import Button from "@mui/material/Button";
import UserTable from "../components/UserTable";
export default function Home() {
  return (
    <>
      <div className="home">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="Property" style={{ marginRight: "40px" }}>
            Users
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              order: 2,
            }}
          >
            <SearchBar style={{ marginRight: "40px" }} />
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "24px", marginLeft: "24px" }}
            >
              <rect width="48" height="48" rx="8" fill="#EFF0F6" />
              <path
                d="M24.9995 23.7502C24.8095 23.7502 24.6195 23.6802 24.4695 23.5302C24.1795 23.2402 24.1795 22.7602 24.4695 22.4702L32.6695 14.2702C32.9595 13.9802 33.4395 13.9802 33.7295 14.2702C34.0195 14.5602 34.0195 15.0402 33.7295 15.3302L25.5295 23.5302C25.3795 23.6802 25.1895 23.7502 24.9995 23.7502Z"
                fill="#0C344E"
              />
              <path
                d="M33.9992 19.55C33.5892 19.55 33.2492 19.21 33.2492 18.8V14.75H29.1992C28.7892 14.75 28.4492 14.41 28.4492 14C28.4492 13.59 28.7892 13.25 29.1992 13.25H33.9992C34.4092 13.25 34.7492 13.59 34.7492 14V18.8C34.7492 19.21 34.4092 19.55 33.9992 19.55Z"
                fill="#0C344E"
              />
              <path
                d="M27 34.75H21C15.57 34.75 13.25 32.43 13.25 27V21C13.25 15.57 15.57 13.25 21 13.25H23C23.41 13.25 23.75 13.59 23.75 14C23.75 14.41 23.41 14.75 23 14.75H21C16.39 14.75 14.75 16.39 14.75 21V27C14.75 31.61 16.39 33.25 21 33.25H27C31.61 33.25 33.25 31.61 33.25 27V25C33.25 24.59 33.59 24.25 34 24.25C34.41 24.25 34.75 24.59 34.75 25V27C34.75 32.43 32.43 34.75 27 34.75Z"
                fill="#0C344E"
              />
            </svg>
            <div className="properties-button">
              <Button
                className="Button"
                variant="contained"
                color="success"
                style={{
                  border: "1px solid #0C344E",
                  color: "#0C344E",
                  background: "white",
                  width: "8rem",
                  height: "48px",
                  marginRight: "24px",
                  fontSize: "14px",
                }}
              >
                Add Filter
              </Button>
            </div>
            <div className="properties-button">
              <Link to="/adduser" style={{ textDecoration: "none" }}>
                <Button
                  className="Button"
                  variant="contained"
                  color="success"
                  style={{
                    border: "1px solid #0C344E",
                    color: "#0C344E",
                    background: "white",
                    width: "12rem",
                    height: "48px",
                    fontFamily: "Barlow",
                    fontStyle: "normal",
                    fontweight: "500",
                    fontSize: "14px",
                    lineHeight: "19px",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "0.5rem", marginLeft: "-0.8rem" }}
                  >
                    <path
                      d="M12 5V19"
                      stroke="#0C344E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#0C344E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Add New User
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <UserTable />
      </div>
    </>
  );
}
