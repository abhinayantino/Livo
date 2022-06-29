import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { AllUserAPI } from "../services/allPropertiesAPI";
import { useEffect } from "react";
import { useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const header = ["Name", "Email ID", "Country-Code", "Mobile Number"];
  useEffect(() => {
    AllUserAPI().then((response) => {
      setUsers(response.data.data.rows);
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((h) => (
                <TableCell
                  align="center"
                  className="fw-bold"
                  style={{
                    backgroundColor: "#FFF7F3",
                  }}
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="center">
                  <Link to="/userdetail">{row.name}</Link>
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.countryCode}</TableCell>
                <TableCell align="center">{row.mobileNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="d-flex justify-content-between height-200px mt-2">
        <div className="">
          <p>Showing 7 out of 10 entries</p>
        </div>
        <div className="">
          <Pagination count={10} shape="rounded" />
        </div>
      </div>
    </>
  );
}
