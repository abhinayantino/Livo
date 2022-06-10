import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./index.css";
import { MenuItem } from "@mui/material";
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

export default function PropertyName() {
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
          <div className="details">My Profile</div>
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
                width: "130px",
                height: "48px",
                borderRadius: "8px",
                marginTop: "-1rem",
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

        <ImageDetails images={[]} />
        <div
          className="details"
          style={{ marginTop: "3.5rem", marginBottom: "1rem" }}
        >
          User Details
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
                component="h2"
                style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 100,
                fontSize: "10px",
                lineHeight: "10px",
                marginLeft: "-0.1rem",
                }}
            >
                First Name
            </Typography>
            <TextField
                id="standard-multiline-flexible"
                // label="First Name"
                multiline
                maxRows={4}
                // disabled={disabled}
                value={propertyfields.name}
                // onChange={(event) => updatePropertyfields(event, "name")}
                variant="standard"
                style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                marginLeft: "-0.1rem",
                marginBottom: "1rem",
                }}
            />
            <Typography
            variant="subtitle2"
            component="h2"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 100,
              fontSize: "10px",
              lineHeight: "10px",
              marginLeft: "-0.1rem",
            }}
          >
            Last Name
          </Typography>
          <TextField
            id="standard-multiline-flexible"
            // label="Last Name"
            multiline
            maxRows={4}
            // disabled={disabled}
            value={propertyfields.name}
            // onChange={(event) => updatePropertyfields(event, "name")}
            variant="standard"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              marginLeft: "-0.1rem",
            }}
          />
          </div>
          <Typography
            variant="subtitle2"
            component="h2"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 100,
              fontSize: "10px",
              lineHeight: "10px",
              marginLeft: "-0.1rem",
            }}
          >
            User Type
          </Typography>
          <TextField
            id="Area"
            select
            label="Property Manager"
            // disabled={disabled}
            value={propertyfields.area}
            onChange={(event) => updatePropertyfields(event, "area")}
            variant="standard"
            style={{ marginLeft: "-0.1rem" }}
          >
            {area?.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          
          <div>
            <TextField
              id="standard-select-currency"
              select
              value={propertyfields.countryCode}
              disabled={disabled}
              label="Ph. "
              onChange={(event) => updatePropertyfields(event, "countryCode")}
              variant="standard"
              style={{
                width: "55px",
                marginRight: "16px",
                marginLeft: "-0.1rem",
              }}
            >
              {countrycode.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-helperText"
              variant="standard"
              disabled={disabled}
              style={{ marginTop: "24px", marginLeft: "-0.1rem" }}
            />
          </div>
          <Typography
                variant="subtitle2"
                component="h2"
                style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "10px",
                marginLeft: "-0.1rem",
                }}
            >
                Account Email
            </Typography>
            <TextField
                id="standard-multiline-flexible"
                // label="First Name"
                multiline
                maxRows={4}
                // disabled={disabled}
                value={propertyfields.name}
                // onChange={(event) => updatePropertyfields(event, "name")}
                variant="standard"
                style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                marginLeft: "-0.1rem",
                marginBottom: "1rem",
                }}
            />
          <Typography
                variant="subtitle2"
                component="h2"
                style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 100,
                fontSize: "10px",
                lineHeight: "10px",
                marginLeft: "-0.1rem",
                }}
            >
                Account Password
            </Typography>
            <TextField
                id="standard-multiline-flexible"
                // label="First Name"
                multiline
                maxRows={4}
                // disabled={disabled}
                value={propertyfields.name}
                // onChange={(event) => updatePropertyfields(event, "name")}
                variant="standard"
                style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                marginLeft: "-0.1rem",
                marginBottom: "10rem",
                }}
            />
        </Box>
      </div>
    </>
  );
}
