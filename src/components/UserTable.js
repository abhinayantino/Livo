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
  const [users, setUsers] = useState([]);
  const header = [
    "User ID",
    "First Name",
    "Last Name",
    "User Type",
    "Unit Number",
    "Nationality",
    "ContactNumber",
    "Email ID",
  ];
  useEffect(() => {
    AllUserAPI().then((response) => {
      setUsers(response.data.rows);
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
            {/* <TableRow>
                            <TableCell
                                align="center"
                                className="bg-success fw-bold"

                            >
                                User ID
                            </TableCell>
                            <TableCell
                                className="bg-success fw-bold"
                                align="center"
                            >
                                First Name
                            </TableCell>
                            <TableCell
                                className="bg-success fw-bold"
                                align="center"
                            >
                                Last Name
                            </TableCell>
                            <TableCell
                                className="bg-success fw-bold"
                                align="center"
                            >
                                User Type
                            </TableCell>
                            <TableCell className="fw-bold" align="center">
                                Unit Number
                            </TableCell>
                            <TableCell
                                className="bg-success fw-bold"
                                align="center"
                            >
                                Nationality
                            </TableCell>
                            <TableCell
                                className="bg-success fw-bold"
                                align="center"
                            >
                                Contact Detail
                            </TableCell>
                            <TableCell
                                className="bg-success fw-bold"
                                align="center"
                            >
                                E-mail ID
                            </TableCell>
                        </TableRow> */}
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="center">
                  <Link to="/userdetail">{users.id}</Link>
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
