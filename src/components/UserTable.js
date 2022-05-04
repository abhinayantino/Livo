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

function createData(
  Userid,
  firstName,
  lastName,
  userType,
  unitNumber,
  Nationality,
  contactNumber,
  EmailID
) {
  return {
    Userid,
    firstName,
    lastName,
    userType,
    unitNumber,
    Nationality,
    contactNumber,
    EmailID,
  };
}

const rows = [
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
  createData(
    "ID Number",
    "First Name",
    "Last Name",
    "Owner",
    "AH-123",
    "Nationality",
    9876543210,
    "email@email"
  ),
];

export default function UserTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User ID</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">User Type</TableCell>
              <TableCell align="center">Unit Number</TableCell>
              <TableCell align="center">Nationality</TableCell>
              <TableCell align="center">Contact Detail</TableCell>
              <TableCell align="center">E-mail ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Link to="/adduser">{row.Userid}</Link>
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.userType}</TableCell>
                <TableCell align="center">{row.unitNumber}</TableCell>
                <TableCell align="center">{row.Nationality}</TableCell>
                <TableCell align="center">{row.contactNumber}</TableCell>
                <TableCell align="center">{row.EmailID}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        style={{ margin: "10px", float: "right" }}
        count={10}
        shape="rounded"
      />
    </>
  );
}
