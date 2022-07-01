import { React, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { AllVisitorsAPI } from "../services/allPropertiesAPI";

function createData(
  visitorCategory,
  visitorName,
  unitNo,
  contactNo,
  dateOfVisit,
  duration,
  inTime,
  outTime
) {
  return {
    visitorCategory,
    visitorName,
    unitNo,
    contactNo,
    dateOfVisit,
    duration,
    inTime,
    outTime,
  };
}

export default function UserTable() {
  const [visitors, setVisitors] = useState([]);
  const header = [
    "Category",
    "Vistior's Name",
    "Flat No.",
    "Mobile Number",
    "In Time",
    "Out Time",
    "Duration",
  ];
  useEffect(() => {
    AllVisitorsAPI().then((response) => {
      setVisitors(response.data.data.rows);
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
            {visitors.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="center">{row.category_en}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.name_en}</TableCell>
                <TableCell align="center">{row.mobileNumber}</TableCell>
                <TableCell align="center">{row.inTime}</TableCell>
                <TableCell align="center">{row.outTime}</TableCell>
                <TableCell align="center">{row.duration}</TableCell>
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
