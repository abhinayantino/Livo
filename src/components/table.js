import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
function createData(name, calories, fat, carbs, protein, contact) {
  return { name, calories, fat, carbs, protein, contact };
}

const rows = [
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
  createData(123, "Property Name", "Area", "Location", "Type", 9876543210),
];

export default function BasicTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Property ID</TableCell>
              <TableCell align="center">Property Name</TableCell>
              <TableCell align="center">Area</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Building Type</TableCell>
              <TableCell align="center">Contact Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.contact}</TableCell>
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
