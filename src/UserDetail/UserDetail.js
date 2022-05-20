import React, { useRef, useState } from "react";
import "./UserDetail.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Userimage from "../assets/user.jpg";
import ImageDetails from "../components/ImageDetails";

const Nationality = [
  {
    value: "Indian",
    label: "Indian",
  },
  {
    value: "American",
    label: "American",
  },
  {
    value: "Arabian",
    label: "Arabian",
  },
  {
    value: "Canadian",
    label: "Canadian",
  },
];
const cities = [
  {
    value: "owner",
    label: "owner",
  },
  {
    value: "tenat",
    label: "tenat",
  },
  {
    value: "broker",
    label: "broker",
  },
  {
    value: "superviser",
    label: "superviser",
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

const UserDetailPage = () => {
  const [propertyfields, setPropertyfields] = useState({
    userid: "",
    firstname: "",
    lastname: "",
    usertype: "",
    nationality: "",
    nationalityid: "",
    passportno: "",
    Email: "",
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
          <div className="details">UserName</div>
          <p style={{ marginLeft: "-63.5rem", marginTop: "1.5rem" }}>
            Unit Number-AH 123
          </p>
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
              Edit
            </Button>
          </div>
        </div>

        <ImageDetails images={[Userimage]} />
        <div
          className="details"
          style={{ marginTop: "3.5rem", marginBottom: "1rem" }}
        >
          User Details
        </div>

        <div
          className="details"
          style={{
            marginTop: "-3rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            marginLeft: "55rem",
          }}
        >
          Passport
          <Button
            variant="outline-success"
            type="submit"
            // disabled={!complete}
            className="Button"
            // onClick={() => {
            //   SetDisabled(true);
            //   onSubmit();
            // }}
            style={{
              border: "1px dotted #0C344E",
              color: "#0C344E",
              borderRadius: "0.5rem",
              background: "white",
              width: "13rem",
              height: "48px",
              marginLeft: "0rem",
              marginTop: "1rem",
              //   display: !disabled ? "block" : "none",
            }}
          >
            Add Document
          </Button>
        </div>
        <div
          className="details"
          style={{
            marginTop: "2rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            marginLeft: "55rem",
          }}
        >
          Contract
          <Button
            variant="outline-success"
            type="submit"
            // disabled={!complete}
            className="Button"
            // onClick={() => {
            //   SetDisabled(true);
            //   onSubmit();
            // }}
            style={{
              border: "1px dotted #0C344E",
              color: "#0C344E",
              borderRadius: "0.5rem",
              background: "white",
              width: "13rem",
              height: "48px",
              marginLeft: "0rem",
              marginTop: "1rem",
              //   display: !disabled ? "block" : "none",
            }}
          >
            Add Document
          </Button>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "636px" },
          }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-12rem",
          }}
        >
          <TextField
            id="standard-multiline-flexible"
            label="Mollak Owner Id"
            multiline
            maxRows={4}
            value={propertyfields.userid}
            onChange={(event) => updatePropertyfields(event, "userid")}
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
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="First Name"
              multiline
              maxRows={4}
              value={propertyfields.firstname}
              onChange={(event) => updatePropertyfields(event, "firstname")}
              variant="standard"
              style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                width: "278px",
                marginRight: "75px",
                marginLeft: "-0.1rem",
              }}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Last Name"
              multiline
              maxRows={4}
              value={propertyfields.lastname}
              onChange={(event) => updatePropertyfields(event, "lastname")}
              variant="standard"
              style={{
                fontFamily: "Barlow",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                width: "278px",
                marginLeft: "-0.1rem",
              }}
            />
          </div>

          <TextField
            id="User Type"
            select
            label="User Type"
            value={propertyfields.usertype}
            onChange={(event) => updatePropertyfields(event, "usertype")}
            variant="standard"
            style={{ marginLeft: "-0.1rem" }}
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="Nationality"
            select
            label="Nationality"
            value={propertyfields.nationality}
            onChange={(event) => updatePropertyfields(event, "nationality")}
            variant="standard"
            style={{ marginLeft: "-0.1rem" }}
          >
            {Nationality.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="standard-multiline-flexible"
            label="Nationality ID"
            multiline
            maxRows={4}
            value={propertyfields.nationalityid}
            onChange={(event) => updatePropertyfields(event, "nationalityid")}
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

          <TextField
            id="standard-multiline-flexible"
            label="Passport Number"
            multiline
            maxRows={4}
            value={propertyfields.passportno}
            onChange={(event) => updatePropertyfields(event, "passportno")}
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

          <TextField
            id="standard-multiline-flexible"
            label="Email ID"
            multiline
            maxRows={4}
            value={propertyfields.Email}
            onChange={(event) => updatePropertyfields(event, "Email")}
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
          <div>
            <TextField
              id="standard-select-currency"
              select
              value={propertyfields.countryCode}
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
              style={{
                marginTop: "24px",
                width: "565px",
                marginLeft: "-0.1rem",
              }}
            />
          </div>
        </Box>
      </div>
    </>
  );
};

export default UserDetailPage;
