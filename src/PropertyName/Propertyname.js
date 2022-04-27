import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./index.css";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";

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
  const [name, setName] = useState("Jumeirah Tower");
  const [Address, setAddress] = useState("Space IT Park");
  const [area, setArea] = useState("Area1");
  const [city, setCity] = useState("city");
  const [pincode, setPincode] = useState("278956");
  const [latitude, setLatitude] = useState("Latitude");
  const [longitude, setLongitude] = useState("Longitude");
  const [building, setBuilding] = useState("Building");
  const [propertyid, setPropertyid] = useState("Government Property ID");
  const [url, setUrl] = useState("url(optional)");
  const [swift, setSwift] = useState("");
  const [iban, setIban] = useState("");
  const [CountryCode, setCountryCode] = useState("");
  // const [editing, setEditing] = useState(false);

  // const [complete, setComplete] = useState(false);
  const _ref = useRef();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const addressChange = (event) => {
    setAddress(event.target.value);
  };
  const areaChange = (event) => {
    setArea(event.target.value);
  };
  const cityChange = (event) => {
    setCity(event.target.value);
  };
  const pinChange = (event) => {
    setPincode(event.target.value);
  };
  const latitudeChange = (event) => {
    setLatitude(event.target.value);
  };
  const longitudeChange = (event) => {
    setLongitude(event.target.value);
  };
  const buildingChange = (event) => {
    setBuilding(event.target.value);
  };
  const propertyidChange = (event) => {
    setPropertyid(event.target.value);
  };
  const urlChange = (event) => {
    setUrl(event.target.value);
  };
  const swiftChange = (event) => {
    setSwift(event.target.value);
  };
  const ibanChange = (event) => {
    setIban(event.target.value);
  };
  const countrycodeChange = (event) => {
    setCountryCode(event.target.value);
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

        <ImageDetails />
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
            value={name}
            onChange={handleChange}
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
            value={area}
            onChange={areaChange}
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
            value={Address}
            onChange={addressChange}
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
              value={city}
              onChange={cityChange}
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
              value={pincode}
              onChange={pinChange}
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
              value={latitude}
              onChange={latitudeChange}
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
              value={longitude}
              onChange={longitudeChange}
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
            id="City"
            select
            label="City"
            value={building}
            onChange={buildingChange}
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
            value={propertyid}
            onChange={propertyidChange}
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
            value={url}
            onChange={urlChange}
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
            value={name}
            onChange={handleChange}
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
              value={iban}
              onChange={ibanChange}
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
              value={swift}
              onChange={swiftChange}
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
              value={CountryCode}
              label="Ph. "
              onChange={countrycodeChange}
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
