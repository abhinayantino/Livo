import React from "react";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
const SelectInput = ({ label }) => {
    const list = ["w", "r", "f"];
    return (
        <div>
            <TextField
                id="Area"
                select
                label={label}
                variant="standard"
                placeholder="Select Property"
                style={{
                    fontFamily: "Barlow",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "19px",
                    width: "250px",
                }}
            >
                {list?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};

export default SelectInput;
