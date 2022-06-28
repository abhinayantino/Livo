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
  unitno,
  floorno,
  unitcat,
  status,
  contratcfrom,
  contractto,
  propertyMollakID
) {
  return {
    unitno,
    floorno,
    unitcat,
    status,
    contratcfrom,
    contractto,
    propertyMollakID,
  };
}

const rows = [
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
  createData(
    "0123",
    "01",
    "1 BHK",
    "Occupied",
    "2 Feb. 2022",
    "2 feb. 2023",
    "Property MollakID"
  ),
];

export default function UserTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Unit No</TableCell>
              <TableCell align="center">Floor No.</TableCell>
              <TableCell align="center">Unit Category</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Contact From</TableCell>
              <TableCell align="center">Contact To</TableCell>
              <TableCell align="center">Property Mollak ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Link to="/unitdetail">{row.unitno}</Link>
                </TableCell>
                <TableCell align="center">{row.floorno}</TableCell>
                <TableCell align="center">{row.unitcat}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.contractfrom}</TableCell>
                <TableCell align="center">{row.contractto}</TableCell>
                <TableCell align="center">{row.propertyMollakID}</TableCell>
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
