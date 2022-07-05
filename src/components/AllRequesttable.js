import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { getAllRequests } from "../services/allServisesApi";
import "./AllRequesttable.css";
function createData(
  RequestID,
  Urgency,
  unitNo,
  RequestType,
  RequestStatus,
  StaffAssigned,
  UserName
) {
  return {
    RequestID,
    Urgency,
    unitNo,
    RequestType,
    RequestStatus,
    StaffAssigned,
    UserName,
  };
}

// const rows = [
//     createData(
//         "000123456",
//         "Urgen",
//         "123",
//         "Request Type",
//         "Accomodation",
//         "In Process",
//         "Yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "00002673",
//         "",
//         "123",
//         "Maintenance",
//         "Plumbing",
//         "Plumbing",
//         "No",
//         "Faiz Abdullah"
//     ),
//     createData(
//         "243453455",
//         "urgent",
//         "123",
//         "Other Charges",
//         "Electrical",
//         "Pending",
//         "yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "355536464",
//         "Urgent",
//         "123",
//         "Individual",
//         "Other",
//         "Complted",
//         "Yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "3454636",
//         "",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "1 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Guest",
//         "Visitor Name",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "2 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Courier",
//         "Visitor Name",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "1 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Guest",
//         "Visitor Name",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "2 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
// ];

export default function AllRequesttable() {
  const [requests, setRequests] = useState([]);
  const [active, setActive] = useState("");
  // const [startIndex, setstartIndex] = useState(0);
  // const [endIndex, setendIndex] = useState(10);

  const allRequestData = async () => {
    const resp = await getAllRequests();
    console.log("response all request", resp);
    setRequests(resp.data.data.rows);
  };
  useEffect(() => {
    allRequestData();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead className="thead">
            <TableRow>
              <TableCell align="center" className="bold">
                Request ID
              </TableCell>
              <TableCell align="center" className="bold">
                Urgency
              </TableCell>
              <TableCell align="center" className="bold">
                Unit No.
              </TableCell>
              <TableCell align="center" className="bold">
                Request Type
              </TableCell>
              <TableCell align="center" className="Sbold">
                Request Status
              </TableCell>
              <TableCell align="center" className="bold">
                Staff Assigned
              </TableCell>
              <TableCell align="center" className="bold">
                User Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((row) => {
              return (
                <TableRow key={row.requestId}>
                  <TableCell align="center">
                    <Link to={`/allrequest/${row.id}`}>{row.requestId}</Link>
                  </TableCell>
                  <TableCell align="center">
                    {row.isUrgent ? (
                      <div className="bgurgent d-flex justify-content-center align-items-center">
                        Urgent
                      </div>
                    ) : null}
                  </TableCell>
                  <TableCell align="center">
                    {row.user?.flat?.name_ar}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={row.type == "success" ? "green" : "pink"}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell align="center">
                    {row.status == "Pending" && (
                      <span className="pending">{row.status}</span>
                    )}
                    {row.status == "In-Process" && (
                      <span className="inprocess">{row.status}</span>
                    )}
                    {row.status == "Completed" && (
                      <span className="success">{row.status}</span>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row.staff ? row.staff?.name : <p>-</p>}
                  </TableCell>
                  <TableCell align="center">{row.user.name}</TableCell>
                </TableRow>
              );
            })}
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
