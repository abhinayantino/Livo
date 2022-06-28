import React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
const InputFiled = () => {
    const list = ["list1", "list2", "list3"];
    return (
        <div>
            <div className="d-flex">
                <div style={{ width: "700px" }}>
                    <div className="mb-3">
                        <TextField
                            id="Area"
                            select
                            label="Select"
                            variant="standard"
                            placeholder="Select Property"
                            style={{
                                fontFamily: "Barlow",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "19px",
                                width: "578px",
                            }}
                        >
                            {list?.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="standard-helperText"
                            variant="standard"
                            placeholder="Title"
                            style={{ marginTop: "24px", width: "578px" }}
                        />
                    </div>
                    <div className="mt-5">
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={4}
                            placeholder="Description"
                            variant="filled"
                            style={{ borderRadius: "12px", width: "578px" }}
                        />
                    </div>
                </div>
                <div>
                    <button
                        style={{
                            width: "295px",
                            height: "64px",
                            border: "1.5px dashed #DFE0E0",
                        }}
                    >
                        <AiOutlinePlus /> Add Doucment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InputFiled;
