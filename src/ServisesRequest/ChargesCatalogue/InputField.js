import React from "react";
import TextField from "@mui/material/TextField";
import "./index.css";
const InputField = ({ placeholder, label }) => {
    return (
        <div className="mt-5">
            <TextField
                required
                id="standard-required"
                placeholder={placeholder}
                variant="standard"
                label={label}
                sx={{
                    width: "275px",
                    borderBottom: ".5px solid #DFE0E0",
                }}
            />
        </div>
    );
};

export default InputField;
