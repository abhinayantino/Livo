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
import { useState, useEffect } from "react";
import { AllUnitAPI } from "../services/allPropertiesAPI";

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
  const [units, setUnit] = useState([]);
  const header = [
    "Name",
    "اسم",
    "floor",
    "size",
    "Bedroom",
    "Bathroom",
    "Villa",
  ];
  useEffect(() => {
    AllUnitAPI().then((response) => {
      setUnit(response.data.data.rows);
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
            {units.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Link to="/unitdetail">{row.name_en}</Link>
                </TableCell>
                <TableCell align="center">{row.name_ar}</TableCell>
                <TableCell align="center">{row.floor}</TableCell>
                <TableCell align="center">{row.size}</TableCell>
                {/* <TableCell align="center">{row.flatInfo.bedroom}</TableCell>
                <TableCell align="center">{row.flatInfo.bathroom}</TableCell> */}
                <TableCell align="center">{row.isVilla}</TableCell>
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
