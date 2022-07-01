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
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const params = {
    page: page,
    limit: 10,
  };
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
    AllVisitorsAPI(params).then((response) => {
      setCount(Math.ceil(response.data.data.count / 10));
      const resp = response.data.data.rows;
      setVisitors(resp);
    });
  }, [page]);
  const handlePageClick = (e) => {
    const selectedPage = e.target.innerText;

    console.log(selectedPage);
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
            {visitors.map((row) => (
              <TableRow
                key={row.id}
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
