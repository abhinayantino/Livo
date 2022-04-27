import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./AllPropertyNav.css";
const Properties = [
  {
    value: "Property-A",
    label: "Property-A",
  },
  {
    value: "Property-B",
    label: "Property-B",
  },
  {
    value: "Property-C",
    label: "Property-C",
  },
  {
    value: "Property-D",
    label: "Property-D",
  },
];

export default function AllPropertyNav() {
  const [PropertyName, setPropertyName] = useState("EUR");

  const PropertyNameChange = (event) => {
    setPropertyName(event.target.value);
  };
  return (
    <>
      <div>
        <TextField
          id="filled-select-currency-native"
          select
          value={PropertyName}
          onChange={PropertyNameChange}
          SelectProps={{
            native: true,
          }}
          variant="filled"
          style={{
            border: "1px solid #0C344E",
            width: "240px",
            borderRadius: "8px",
            marginTop: "-8px",
            marginRight: "40px",
            height: "40px",
          }}
        >
          {Properties.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </>
  );
}
