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
  AmenityName,
  Category,
  LocationName,
  Fare,
  Bookable,
  Status,
  StartTime,
  EndTime
) {
  return {
    AmenityName,
    Category,
    LocationName,
    Fare,
    Bookable,
    Status,
    StartTime,
    EndTime,
  };
}

const rows = [
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "active",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "Inactive",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "Inactive",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "Inactive",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "active",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "active",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "active",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "active",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "No",
    "active",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "Yes",
    "Inactive",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "No",
    "active",
    "Start Time",
    "End Time"
  ),
  createData(
    "Amenity Name",
    "Category",
    "Location Name",
    "Fare",
    "No",
    "active",
    "Start Time",
    "End Time"
  ),
];

export default function BasicTable() {
  const header = [
    "Amenity Name",
    "Category1",
    "Location Name",
    "Fare",
    "Bookable",
    "Status",
    "Start Time",
    "End Time",
  ];
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.AmenityName}</TableCell>
                <TableCell align="center">
                  <span className="inprocess">{row.Category}</span>
                </TableCell>
                <TableCell align="center">{row.LocationName}</TableCell>
                <TableCell align="center">{row.Fare}</TableCell>
                <TableCell align="center">{row.Bookable}</TableCell>
                <TableCell align="center">
                  {row.Status === "Inactive" ? (
                    <span className="inprocess">Inactive</span>
                  ) : (
                    <span className="success">Active</span>
                  )}
                </TableCell>
                <TableCell align="center">{row.StartTime}</TableCell>
                <TableCell align="center">{row.EndTime}</TableCell>
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
