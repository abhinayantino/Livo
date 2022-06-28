import React from "react";
import { TextField } from "@mui/material";
export const InputTextArea = ({ placeholder }) => {
    return (
        <div className="mt-5">
            <TextField
                id="filled-multiline-static"
                multiline
                rows={4}
                placeholder={placeholder}
                variant="filled"
                style={{ borderRadius: "12px", width: "578px" }}
            />
        </div>
    );
};
