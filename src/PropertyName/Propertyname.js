import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./index.css";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import propertyimage from "../assets/property1.png";
import Propertyimage from "../assets/property2.png";
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
          <div className="details">Property Details</div>
          <div className="properties-button">
            <Button
              className="Button"
              variant="contained"
              color="success"
              // onClick={() => _ref.current.click()}
              onClick={() => SetDisabled(false)}
              style={{
                border: "1px solid #0C344E",
                color: "#0C344E",
                background: "white",
                width: "80px",
                height: "48px",
                display: !disabled ? "none" : "block",
              }}
            >
              Edit
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
                  marginLeft: "12px",
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
                  color: "#0C344E",
                  background: "white",
                  width: "80px",
                  height: "48px",
                  display: !disabled ? "block" : "none",
                }}
              >
                Save
              </Button>
            </div>
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
            disabled={disabled}
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
            disabled={disabled}
            value={propertyfields.area}
            onChange={(event) => updatePropertyfields(event, "area")}
            variant="standard"
          >
            {area?.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-multiline-flexible"
            label="Address Line"
            multiline
            maxRows={4}
            disabled={disabled}
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
              disabled={disabled}
              onChange={(event) => updatePropertyfields(event, "city")}
              variant="standard"
              style={{ width: "278px", marginRight: "80px" }}
            >
              {cities?.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-multiline-flexible"
              label="Pincode"
              multiline
              maxRows={4}
              value={propertyfields.pin}
              disabled={disabled}
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
              value={propertyfields.location[1]}
              disabled={disabled}
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
              label="Longitude"
              multiline
              maxRows={4}
              value={propertyfields.location[0]}
              disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
              style={{ marginTop: "24px" }}
            />
          </div>
        </Box>
      </div>
    </>
  );
}
