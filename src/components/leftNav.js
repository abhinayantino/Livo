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
import ServicesImage from "../assets/servicerequest.svg";
import { Link } from "react-router-dom";
import "../App.css";
export default function LeftNav() {
    return (
        <>
            <Accordion className="header">
                <div
                    className="feature"
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <Link to="/dashboard" className="l-dashboard">
                        <div style={{ margin: "1.5rem" }}>
                            <img
                                style={{ marginRight: "10px" }}
                                src={DashboardImage}
                                alt="My Properties"
                            />
                            Dashboard
                        </div>
                    </Link>
                </div>
                <Accordion.Item eventKey="8" className="upper">
                    <Accordion.Header>
                        <img
                            style={{ marginRight: "10px" }}
                            src={ServicesImage}
                            alt="My Properties"
                        />
                        Service Requests
                    </Accordion.Header>
                    <Accordion.Body className="elements">
                        <Link to="/allrequest" className="navlink">
                            <ul className="navitem">All Request</ul>
                        </Link>
                        <Link to="/chargescatalouge" className="navlink">
                            <ul className="navitem">Charges Catalogue</ul>
                        </Link>

                        <Link to="/generateinvoice" className="navlink">
                            <ul className="navitem">Generate Invoice</ul>
                        </Link>
                    </Accordion.Body>
                </Accordion.Item>
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
                            <ul className="navitem">All Properties</ul>
                            <ul className="navitem">Units</ul>
                            <ul className="navitem">Users</ul>
                            <ul className="navitem">Amenities</ul>
                            <ul className="navitem">Staff</ul>
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
                    <Accordion.Body className="elements">
                        <Link to="/allinvoice" className="navlink">
                            <ul className="navitem">All Invoices</ul>
                        </Link>
                        <Link to="/createinvoice" className="navlink">
                            <ul className="navitem">Create an Invoice</ul>
                        </Link>
                        <Link to="/budget" className="navlink">
                            <ul className="navitem">Budget</ul>
                        </Link>
                        <Link to="/expenses" className="navlink">
                            <ul className="navitem">Expenses</ul>
                        </Link>

                        <Link to="/reminder" className="navlink">
                            <ul className="navitem">Reminder</ul>
                        </Link>
                    </Accordion.Body>
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
                    <Accordion.Body className="elements">
                        <Link to="/allposts" className="navlink">
                            <ul className="navitem">All Posts</ul>
                        </Link>
                        <Link to="/createannouncement" className="navlink">
                            <ul className="navitem">Create Announcement</ul>
                        </Link>
                        <Link to="/createvent" className="navlink">
                            <ul className="navitem">Create Event</ul>
                        </Link>
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
                        <Link to="/visitor" className="navlink">
                            Visitors Management
                        </Link>
                    </div>
                </div>

                <Accordion.Item eventKey="4" className="upper">
                    <Accordion.Header className="feature">
                        <img
                            style={{ marginRight: "10px" }}
                            src={ReportsImage}
                            alt="My Properties"
                        />
                        Reports
                    </Accordion.Header>
                    <Accordion.Body className="elements"></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="upper">
                    <Accordion.Header className="feature">
                        <img
                            style={{ marginRight: "10px" }}
                            src={SettingsImage}
                            alt="My Properties"
                        />
                        Settings
                    </Accordion.Header>
                    <Accordion.Body className="elements"></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}
