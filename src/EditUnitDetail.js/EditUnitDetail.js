import React, { useEffect, useRef, useState } from "react";
import "./EditUnitDetail.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import { FormLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import {
  buildingsAPI,
  citiesAPI,
  localitiesAPI,
} from "../services/allPropertiesAPI";
import propertyimage from "../assets/property1.png";
import Propertyimage from "../assets/property2.png";
import ImageDetails from "../components/ImageDetails";
import { DisabledByDefault } from "@mui/icons-material";
import { Form, Table } from "react-bootstrap";

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

const EditUnitDetailPage = () => {
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
    <div className="home">
      <div className="Property-top">
        <div className="details">Units Number</div>
        <div className="user-vacant">Vacant</div>
        <div className="properties-button">
          <Button
            className="Button"
            variant="contained"
            color="success"
            // onClick={() => _ref.current.click()}
            // onClick={() => SetDisabled(false)}
            style={{
              border: "1px solid #0C344E",
              color: "#0C344E",
              background: "white",
              width: "80px",
              height: "48px",
              marginRight: "1.5rem",
              marginTop: "-1rem",
              //   display: !disabled ? "none" : "block",
            }}
          >
            Cancel
          </Button>
          <Button
            className="Button"
            variant="contained"
            color="success"
            // onClick={() => _ref.current.click()}
            // onClick={() => SetDisabled(false)}
            style={{
              border: "1px solid #0C344E",
              color: "white",
              background: "#0C344E",
              width: "80px",
              height: "48px",
              marginTop: "-1rem",
              //   display: !disabled ? "none" : "block",
            }}
          >
            Save
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

      <ImageDetails
        images={[propertyimage, Propertyimage, propertyimage, Propertyimage]}
      />
      <div style={{ display: "flex", gap: "15rem" }}>
        <div
          className="details"
          style={{ marginTop: "3.5rem", marginBottom: "1rem" }}
        >
          Add Owner
        </div>
        <div
          className="details"
          style={{
            marginTop: "3.5rem",
            marginBottom: "1rem",
            // marginLeft: "20rem",
          }}
        >
          Make Owner the Resident User
        </div>
        <div
          className="details"
          style={{
            marginTop: "3.5rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            // marginLeft: "20rem",
          }}
        >
          Attached Documents
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
              border: "1px dotted #0C344E",
              color: "#0C344E",
              borderRadius: "0.5rem",
              background: "white",
              width: "13rem",
              height: "48px",
              marginLeft: "0.5rem",
              marginTop: "1rem",
              //   display: !disabled ? "block" : "none",
            }}
          >
            Upload Excel
          </Button>
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
              color: "#0C344E",
              borderRadius: "4px",
              background: "white",
              width: "13rem",
              height: "45px",
              marginLeft: "0.5rem",
              marginTop: "1rem",
              fontSize: "0.7rem",
              boxShadow: "0px 3px 9px rgba(112, 112, 112, 0.22)",
              //   display: !disabled ? "block" : "none",
            }}
          >
            Download Excel Template
          </Button>
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
              color: "#0C344E",
              borderRadius: "4px",
              background: "white",
              width: "13rem",
              height: "45px",
              marginLeft: "0.5rem",
              marginTop: "1rem",
              fontSize: "0.7rem",
              boxShadow: "0px 3px 9px rgba(112, 112, 112, 0.22)",
              //   display: !disabled ? "block" : "none",
            }}
          >
            Download Excel Template
          </Button>
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
        <div
          style={{
            border: "2px solid #E5E5E5",
            borderRadius: "0.5rem",
            width: "40rem",
            height: "13rem",
            // position: "absolute",
            marginTop: "-10rem",
            marginBottom: "10rem",
          }}
        ></div>
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
            border: "1px dotted #0C344E",
            color: "#0C344E",
            // borderRadius: "0.5rem",
            background: "white",
            width: "33rem",
            height: "48px",
            marginLeft: "2.8rem",
            marginTop: "-8rem",
            position: "absolute",
            //   display: !disabled ? "block" : "none",
          }}
        >
          Select Owner Profile
        </Button>
        <Form.Group
          controlId="dob"
          style={{
            width: "15rem",
            position: "absolute",
            top: "35rem",
            left: "21.5rem",
          }}
        >
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="select date"
          ></Form.Control>
        </Form.Group>
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
            top: "36rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />

        <div className="details" style={{ position: "absolute", top: "44rem" }}>
          Add Resident User
        </div>

        <div
          style={{
            border: "2px solid #E5E5E5",
            borderRadius: "0.5rem",
            width: "40rem",
            height: "20rem",
            // position: "absolute",
            marginTop: "-5rem",
            marginBottom: "10rem",
          }}
        ></div>
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
            border: "1px dotted #0C344E",
            color: "#0C344E",
            // borderRadius: "0.5rem",
            background: "white",
            width: "33rem",
            height: "48px",
            marginLeft: "2.8rem",
            marginTop: "10rem",
            position: "absolute",
            //   display: !disabled ? "block" : "none",
          }}
        >
          Select Resident User Profile
        </Button>
        <Form.Group
          controlId="dob"
          style={{
            width: "15rem",
            position: "absolute",
            top: "53rem",
            left: "21.5rem",
          }}
        >
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="select date"
          ></Form.Control>
        </Form.Group>
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
            top: "54rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <Form.Group
          controlId="dob"
          style={{
            width: "15rem",
            position: "absolute",
            top: "59.5rem",
            left: "21.5rem",
          }}
        >
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="select date"
          ></Form.Control>
        </Form.Group>
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
            top: "60.5rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />

        <div className="details" style={{ position: "absolute", top: "69rem" }}>
          Unit Details
        </div>
        <div
          style={{
            border: "2px solid #E5E5E5",
            borderRadius: "0.5rem",
            width: "40rem",
            height: "26rem",
            // position: "absolute",
            marginTop: "-5rem",
            marginBottom: "10rem",
          }}
        ></div>
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "72.5rem",
            width: "15rem",
            left: "21rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "76.5rem",
            width: "15rem",
            left: "21rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "80.5rem",
            width: "15rem",
            left: "21rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "84.5rem",
            width: "15rem",
            left: "21rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "88.5rem",
            width: "15rem",
            left: "21rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
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
            top: "72.5rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "76.5rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "80.5rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "84.5rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Property Mollak Id"
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
            top: "88.5rem",
            width: "15rem",
            left: "40rem",
            // lineHeight: "19px",
            // marginLeft: "-0.1rem",
            // marginTop: "-5rem",
            position: "absolute",
          }}
        />
        <FormControl
          style={{
            position: "absolute",
            top: "93rem",
            left: "21rem",
          }}
        >
          {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
          >
            {/* <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            /> */}
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Mark this Unit with Under Maintainence Status"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default EditUnitDetailPage;
