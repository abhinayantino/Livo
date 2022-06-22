import React from "react";
import { TextField } from "@mui/material";
const Textfiled = ({
    label,
    placeholder,
    type = "text",
    style = {},
    className = "",
}) => {
    return (
        <TextField
            id="standard-helperText"
            variant="standard"
            type={type}
            label={label}
            className={className}
            placeholder={placeholder}
            style={{
                marginTop: "13px",
                width: "255px",
                ...style,
            }}
        />
    );
};

export default Textfiled;
