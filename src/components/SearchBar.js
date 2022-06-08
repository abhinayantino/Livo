import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar() {
    return (
        <>
            <div className="d-flex">
                <SearchIcon
                    style={{
                        background: "#EFF0F6",
                        height: "50px",
                        borderTopLeftRadius: "4px",
                        borderBottomLeftRadius: "4px",
                        width: "50px",
                        padding: "10px",
                    }}
                />
                <InputBase
                    style={{
                        background: "#EFF0F6",
                        height: "50px",
                        borderTopRightRadius: "4px",
                        borderBottomRightRadius: "4px",
                        width: "400px",
                    }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "Search" }}
                />
            </div>
        </>
    );
}
