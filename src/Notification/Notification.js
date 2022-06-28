import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./index.css";
import Button from "@mui/material/Button";
import propertyimage from "../assets/property1.png";
import Propertyimage from "../assets/property2.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  buildingsAPI,
  citiesAPI,
  localitiesAPI,
} from "../services/allPropertiesAPI";

import ImageDetails from "../components/ImageDetails";
import { DisabledByDefault } from "@mui/icons-material";
import { IOSSwitch } from "../components/ToggleButton";

const buildings = [
  {
    value: "type-A",
    label: "type-A",
  },
  {
    value: "type-B",
    label: "type-B",
  },
  {
    value: "type-C",
    label: "type-C",
  },
  {
    value: "type-D",
    label: "type-D",
  },
];
const countrycode = [
  {
    value: "+91",
    label: "+91",
  },
  {
    value: "+28",
    label: "+28",
  },
  {
    value: "+01",
    label: "+01",
  },
  {
    value: "+978",
    label: "+978",
  },
];


export default function Notification() {
  const [complete, setComplete] = useState(false);
  const [cities, setCities] = useState([]);
  const [area, setArea] = useState([]);
  const [disabled, SetDisabled] = useState(true);
  const [propertyfields, setPropertyfields] = useState({
    name: "",
    address: "",
    area: "",
    city: "",
    pin: "",
    location: [],
    building: "",
    propertyid: "",
    url: "",
    swift: "",
    iban: "",
    countryCode: "",
  });

  // const _ref = useRef();
  const updatePropertyfields = (event, key) => {
    if (key === "latitude") {
      return setPropertyfields((preState) => {
        return {
          ...preState,
          location: [preState.location[0], event.target.value],
        };
      });
    }
    if (key === "longitude") {
      return setPropertyfields((preState) => {
        return {
          ...preState,
          location: [event.target.value, preState.location[1]],
        };
      });
    }

    setPropertyfields((preState) => {
      return {
        ...preState,
        [`${key}`]: event.target.value,
      };
    });
  };
  useEffect(() => {
    citiesAPI().then((response) => {
      setCities(response.data.data);
    });
  }, []);
  useEffect(() => {
    if (propertyfields.city.trim().length === 0) return;
    localitiesAPI(propertyfields.city).then((response) => {
      setArea(response.data.data);
    });
  }, [propertyfields.city]);
  console.log(propertyfields.city);

  const onSubmit = async () => {
    console.log("submitting");
    setComplete(false);
    await buildingsAPI(propertyfields);
  };
  return (
    <>
      <div className="home">
        <div className="Property-top">
          <div className="details">Notification</div>
          <div className="properties-button">
            <Button
              className="Button"
              variant="contained"
              color="success"
              // onClick={() => _ref.current.click()}
            //   onClick={() => SetDisabled(false)}
              style={{
                border: "1px solid #0C344E",
                color: "white",
                background: "#0C344E",
                // width: "130px",
                height: "48px",
                borderRadius: "8px",
                marginTop: "-1rem",
                marginBottom: "-1rem",
                display: !disabled ? "none" : "block",
              }}
            >
              Save Changes
            </Button>

            <div style={{ display: "flex" }}>
              <Button
                variant="outline-success"
                type="submit"
                // disabled={!complete}
                className="Button"
                onClick={() => {
                  SetDisabled(true);
                  onSubmit();
                }}
                style={{
                  border: "1px solid #0C344E",
                  color: "#0C344E",
                  background: "white",
                  width: "80px",
                  height: "48px",
                  marginRight: "1.5rem",
                  marginTop: "-1rem",
                  display: !disabled ? "block" : "none",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="outline-danger"
                type="submit"
                className="btn"
                onClick={() => {
                  SetDisabled(true);
                }}
                style={{
                  border: "1px solid #0C344E",
                  color: "white",
                  background: "#0C344E",
                  width: "80px",
                  height: "48px",
                  marginTop: "-1rem",
                  marginRight: "1rem",
                  display: !disabled ? "block" : "none",
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "636px" },
          }}
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
                <Typography
                    variant="subtitle2"
                    component="h1"
                    style={{
                    fontFamily: "Barlow",
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontSize: "15px",
                    lineHeight: "10px",
                    marginLeft: "-0.1rem",
                    marginLeft: "-0.1rem",
                    marginBottom: "24px",
                    }}
                >
                    Service Requests
                </Typography>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">New Service Requests</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Status Updates</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Staff Assignment</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Urgent Requests</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">New Comments</p>
                </div>
                <Typography
                    variant="subtitle2"
                    component="h1"
                    style={{
                    fontFamily: "Barlow",
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontSize: "15px",
                    lineHeight: "10px",
                    marginLeft: "-0.1rem",
                    marginLeft: "-0.1rem",
                    marginBottom: "24px",
                    }}
                >
                    My Properties
                </Typography>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Resident Contract Expiraton</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Amenities Slot Booking</p>
                </div>
                <Typography
                    variant="subtitle2"
                    component="h1"
                    style={{
                    fontFamily: "Barlow",
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontSize: "15px",
                    lineHeight: "10px",
                    marginLeft: "-0.1rem",
                    marginLeft: "-0.1rem",
                    marginBottom: "24px",
                    }}
                >
                    Payments
                </Typography>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Due Invoices</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Payment Received</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Overdue payment reminder</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Amenities Slot Booking</p>
                </div>
                <Typography
                    variant="subtitle2"
                    component="h1"
                    style={{
                    fontFamily: "Barlow",
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontSize: "15px",
                    lineHeight: "10px",
                    marginLeft: "-0.1rem",
                    marginLeft: "-0.1rem",
                    marginBottom: "24px",
                    }}
                >
                    Community Notices
                </Typography>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">New Post</p>
                </div>
                <div className="service-options"> 
                    <IOSSwitch />
                    <p className="service-options-text">Reported Posts</p>
                </div>
            </div>
        </Box>
      </div>
    </>
  );
}
