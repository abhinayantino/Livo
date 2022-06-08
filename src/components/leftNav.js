import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";

// import NotificationImage from "../assets/notification.svg";
import DashboardImage from "../assets/Dashboard.svg";
import MyPropertiesImage from "../assets/MyProperties.svg";
import PaymentsImage from "../assets/Payments.svg";
import CommunityImage from "../assets/Payments.svg";
import VisitorImage from "../assets/Visitor.svg";
import ReportsImage from "../assets/Reports.svg";
import SettingsImage from "../assets/settings.svg";
import { Link } from "react-router-dom";

export default function LeftNav() {
    return (
        <>
            <Accordion className="header">
                <div
                    className="feature"
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <div style={{ marginLeft: "1.5rem" }}>
                        <img
                            style={{ marginRight: "10px" }}
                            src={DashboardImage}
                            alt="My Properties"
                        />
                        Dashboard
                    </div>
                </div>
                <div
                    className="feature "
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <Accordion.Item eventKey="1" className="upper">
                        <Accordion.Header>
                            <img
                                style={{ marginRight: "10px" }}
                                src={MyPropertiesImage}
                                alt="My Properties"
                            />
                            My Properties
                        </Accordion.Header>
                        <Accordion.Body className="elements">
                            <ul>All Properties</ul>
                            <ul>Units</ul>
                            <ul>Users</ul>
                            <ul>Amenities</ul>
                            <ul>Staff</ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <Accordion.Item eventKey="2" className="upper">
                    <Accordion.Header className="feature">
                        <img
                            style={{ marginRight: "10px" }}
                            src={PaymentsImage}
                            alt="My Properties"
                        />
                        Payments
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="upper">
                    <Accordion.Header className="feature">
                        <img
                            style={{ marginRight: "10px" }}
                            src={CommunityImage}
                            alt="My Properties"
                        />
                        Community Notices
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>All Posts</ul>
                        <ul>Create Announcement</ul>
                        <ul>Create Event</ul>
                    </Accordion.Body>
                </Accordion.Item>
                <div
                    className="feature"
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <div className="feature" style={{ marginLeft: "1rem" }}>
                        <img
                            style={{ marginRight: "10px" }}
                            src={VisitorImage}
                            alt="My Properties"
                        />
                        <Link
                            to="/visitor"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            Visitors Management
                        </Link>
                    </div>
                </div>

                <Accordion.Item eventKey="4">
                    <Accordion.Header className="feature">
                        <img
                            style={{ marginRight: "10px" }}
                            src={ReportsImage}
                            alt="My Properties"
                        />
                        Reports
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header className="feature">
                        <img
                            style={{ marginRight: "10px" }}
                            src={SettingsImage}
                            alt="My Properties"
                        />
                        Settings
                    </Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}
