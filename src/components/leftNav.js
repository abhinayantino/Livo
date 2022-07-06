import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import "../App.css";

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

export default function LeftNav() {
  return (
    <>
      <Accordion className="header">
        <div
          className="feature"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ margin: "1.5rem" }}>
            <img
              style={{ marginRight: "10px" }}
              src={DashboardImage}
              alt="My Properties"
            />
            <Link
              to="/dashboard"
              className="l-dashboard"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Dashboard
            </Link>
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
              {/* <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <ul>All Properties</ul>
              </Link> */}
              <Link
                to="/units"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <ul>Units</ul>
              </Link>
              <Link
                to="/user"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <ul>Users</ul>
              </Link>
              <Link
                to="/aminities"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <ul>Amenities</ul>
              </Link>
              <Link
                to="/staff"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <ul>Staff</ul>
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </div>
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
        <Accordion.Item eventKey="6" className="upper">
          <Accordion.Header className="feature">
            <img
              style={{ marginRight: "10px" }}
              src={ServicesImage}
              alt="My Properties"
            />
            Service Request
          </Accordion.Header>
          <Accordion.Body>
            <Link
              to="/allrequest"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>All Requests</ul>
            </Link>
            <Link
              to="/generateinvoice"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Generate Invoice</ul>
            </Link>
            <Link
              to="/chargescatalouge"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Charges Catalouge</ul>
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
          <Accordion.Body>
            <Link
              to="/allposts"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>All Posts</ul>
            </Link>
            <Link
              to="/createannouncement"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Create Announcement</ul>
            </Link>
            <Link
              to="/createvent"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Create Event</ul>
            </Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="upper">
          <Accordion.Header className="feature">
            <img
              style={{ marginRight: "10px" }}
              src={PaymentsImage}
              alt="My Properties"
            />
            Payments
          </Accordion.Header>
          <Accordion.Body>
            <Link
              to="/allinvoice"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>All Invoices</ul>
            </Link>
            <Link
              to="/createinvoice"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Create an Invoice</ul>
            </Link>
            <Link
              to="/budget"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Budget</ul>
            </Link>
            <ul>Expenses</ul>
            <Link
              to="/reminder"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Reminder</ul>
            </Link>
          </Accordion.Body>
        </Accordion.Item>

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
          <Accordion.Body>
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Profile</ul>
            </Link>
            <Link
              to="/preferences"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Preferences</ul>
            </Link>
            <Link
              to="/notification"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ul>Notifications</ul>
            </Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
