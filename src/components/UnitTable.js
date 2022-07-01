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

export default function UserTable() {
  const [units, setUnit] = useState([]);
  const [count, setCount] = useState(2);
  const [page, setPage] = useState(1);
  const params = {
    page: page,
    limit: 10,
  };
  const header = [
    "Name",
    "اسم",
    "floor",
    "size",
    "Bedroom",
    "Bathroom",
    "Status",
    "Villa",
  ];
  useEffect(() => {
    AllUnitAPI(params).then((response) => {
      setCount(Math.ceil(response.data.data.count / 10));
      const resp = response.data.data.rows;
      setUnit(resp);
    });
  }, [page]);
  const handlePageClick = (e) => {
    const selectedPage = e.target.innerText;
    setPage(selectedPage);
  };
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
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Link to="/unitdetail">{row.name_en}</Link>
                </TableCell>
                <TableCell align="center">{row.name_ar}</TableCell>
                <TableCell align="center">{row.floor}</TableCell>
                <TableCell align="center">{row.size}</TableCell>
                <TableCell align="center">{row?.flatInfo?.bedroom}</TableCell>
                <TableCell align="center">{row?.flatInfo?.bathroom}</TableCell>
                <TableCell align="center">
                  {row?.contractDetails === null ||
                  row?.contractDetails?.isExpired === false
                    ? "Vacant"
                    : "Occupied"}
                </TableCell>
                <TableCell align="center">
                  {row?.isVilla === true ? "Yes" : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="d-flex justify-content-between height-200px mt-2">
        <div className="">
          <p>
            Showing {page} out of {count} entries
          </p>
        </div>
        <div className="">
          <Pagination
            count={count}
            onChange={handlePageClick}
            shape="rounded"
            style={{ margin: "10px", float: "right" }}
          />
        </div>
      </div>
    </>
  );
}
