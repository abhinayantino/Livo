import React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar() {
  return (
    <>
      <div>
        <SearchIcon
          style={{
            background: "#EFF0F6",
            height: "50px",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            width: "40px",
            padding: "10px",
          }}
        />
        <InputBase
          style={{
            background: "#EFF0F6",
            height: "50px",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            width: "500px",
          }}
          placeholder="Search"
          inputProps={{ "aria-label": "Search" }}
        />
      </div>
    </>
  );
}
