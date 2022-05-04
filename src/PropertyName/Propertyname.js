import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./index.css";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import propertyimage from "../assets/property1.png";
import Propertyimage from "../assets/property2.png";

import ImageDetails from "../components/ImageDetails";

const Areas = [
  {
    value: "Area1",
    label: "Area1",
  },
  {
    value: "Area2",
    label: "Area2",
  },
  {
    value: "Area3",
    label: "Area3",
  },
  {
    value: "Area4",
    label: "Area4",
  },
];
const cities = [
  {
    value: "city1",
    label: "city1",
  },
  {
    value: "city2",
    label: "city2",
  },
  {
    value: "city3",
    label: "city3",
  },
  {
    value: "city4",
    label: "city4",
  },
];
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
  // const [editing, setEditing] = useState(false);

  // const [complete, setComplete] = useState(false);
  const [propertyfields, setPropertyfields] = useState({
    name: "",
    address: "",
    area: "",
    city: "",
    pin: "",
    latitude: "",
    longitude: "",
    building: "",
    propertyid: "",
    url: "",
    swift: "",
    iban: "",
    countryCode: "",
  });
  const _ref = useRef();
  const updatePropertyfields = (event, key) => {
    setPropertyfields((preState) => {
      return {
        ...preState,
        [`${key}`]: event.target.value,
      };
    });
  };

  // const onSubmit = async () => {
  //   console.log("submitting");
  //   setComplete(false);
  //   setEditing(false);
  // };
  return (
    <>
      <div className="home">
        <div className="Property-top">
          <div className="details">Property Details</div>
          <div className="properties-button">
            <Button
              className="Button"
              variant="contained"
              color="success"
              onClick={() => _ref.current.click()}
              style={{
                border: "1px solid #0C344E",
                color: "#0C344E",
                background: "white",
                width: "80px",
                height: "48px",
              }}
            >
              Edit
            </Button>

            {/* <Button
              variant="outline-success"
              type="submit"
              disabled={!complete}
              className="Button"
              onClick={() => {
                setEditing(false);
                onSubmit();
              }}
            >
              Save
            </Button>
            <Button
              variant="outline-danger"
              type="submit"
              className="btn"
              onClick={() => {
                setEditing(false);
              }}
            >
              Cancel
            </Button> */}
          </div>
        </div>

        <ImageDetails images={[propertyimage, Propertyimage]} />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "636px" },
          }}
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            id="standard-multiline-flexible"
            label="Property Name"
            multiline
            maxRows={4}
            value={propertyfields.name}
            onChange={(event) => updatePropertyfields(event, "name")}
            variant="standard"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
            }}
          />
          <TextField
            id="Area"
            select
            label="Select"
            value={propertyfields.area}
            onChange={(event) => updatePropertyfields(event, "area")}
            variant="standard"
          >
            {Areas.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-multiline-flexible"
            label="Address Line"
            multiline
            maxRows={4}
            value={propertyfields.address}
            onChange={(event) => updatePropertyfields(event, "address")}
            variant="standard"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
            }}
          />
          <div>
            <TextField
              id="City"
              select
              label="Select"
              value={propertyfields.city}
              onChange={(event) => updatePropertyfields(event, "city")}
              variant="standard"
              style={{ width: "278px", marginRight: "80px" }}
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-multiline-flexible"
              label="Pincode"
              multiline
              maxRows={4}
              value={propertyfields.pin}
              onChange={(event) => updatePropertyfields(event, "pin")}
              variant="standard"
              style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                width: "278px",
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Latitude"
              multiline
              maxRows={4}
              value={propertyfields.latitude}
              onChange={(event) => updatePropertyfields(event, "latitude")}
              variant="standard"
              style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                width: "278px",
                marginRight: "80px",
              }}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Latitude"
              multiline
              maxRows={4}
              value={propertyfields.longitude}
              onChange={(event) => updatePropertyfields(event, "longitude")}
              variant="standard"
              style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                width: "278px",
              }}
            />
          </div>
          <TextField
            id="building"
            select
            label="Building"
            value={propertyfields.building}
            onChange={(event) => updatePropertyfields(event, "building")}
            variant="standard"
          >
            {buildings.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-multiline-flexible"
            label="Government Property ID"
            multiline
            maxRows={4}
            value={propertyfields.propertyid}
            onChange={(event) => updatePropertyfields(event, "propertyid")}
            variant="standard"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
            }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Government Property ID"
            multiline
            maxRows={4}
            value={propertyfields.url}
            onChange={(event) => updatePropertyfields(event, "url")}
            variant="standard"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
            }}
          />
          <TextField
            id="filled-multiline-static"
            multiline
            rows={4}
            placeholder="Description"
            variant="filled"
            style={{ borderRadius: "12px" }}
          />
          <div>
            <h2>Bank Details</h2>
          </div>
          <TextField
            id="standard-multiline-flexible"
            label="Property Name"
            multiline
            maxRows={4}
            value={propertyfields.name}
            onChange={(event) => updatePropertyfields(event, "name")}
            variant="standard"
            style={{
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              marginTop: "46px",
            }}
          />
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="IBAN Number"
              multiline
              maxRows={4}
              value={propertyfields.iban}
              onChange={(event) => updatePropertyfields(event, "iban")}
              variant="standard"
              style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                width: "278px",
                marginRight: "80px",
              }}
            />
            <TextField
              id="standard-multiline-flexible"
              label="SWIFT Number"
              multiline
              maxRows={4}
              value={propertyfields.swift}
              onChange={(event) => updatePropertyfields(event, "swift")}
              variant="standard"
              style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                width: "278px",
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              value={propertyfields.countryCode}
              label="Ph. "
              onChange={(event) => updatePropertyfields(event, "countryCode")}
              variant="standard"
              style={{ width: "55px", marginRight: "16px" }}
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
              style={{ marginTop: "24px" }}
            />
          </div>
        </Box>
      </div>
    </>
  );
}
