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
import "./AllRequesttable.css";
function createData(
    RequestID,
    Urgency,
    unitNo,
    RequestType,
    Category,
    RequestStatus,
    StaffAssigned,
    UserName
) {
    return {
        RequestID,
        Urgency,
        unitNo,
        RequestType,
        Category,
        RequestStatus,
        StaffAssigned,
        UserName,
    };
}

const rows = [
    createData(
        "000123456",
        "Urgen",
        "123",
        "Request Type",
        "Accomodation",
        "In Process",
        "Yes",
        "Inzamamul Haq"
    ),
    createData(
        "00002673",
        "",
        "123",
        "Maintenance",
        "Plumbing",
        "Plumbing",
        "No",
        "Faiz Abdullah"
    ),
    createData(
        "243453455",
        "urgent",
        "123",
        "Other Charges",
        "Electrical",
        "Pending",
        "yes",
        "Inzamamul Haq"
    ),
    createData(
        "355536464",
        "Urgent",
        "123",
        "Individual",
        "Other",
        "Complted",
        "Yes",
        "Inzamamul Haq"
    ),
    createData(
        "3454636",
        "",
        "123",
        "9876543210",
        "02 Feb.,2022",
        "1 Day",
        "00:00AM",
        "00:00AM"
    ),
    createData(
        "Guest",
        "Visitor Name",
        "123",
        "9876543210",
        "02 Feb.,2022",
        "2 Day",
        "00:00AM",
        "00:00AM"
    ),
    createData(
        "Courier",
        "Visitor Name",
        "123",
        "9876543210",
        "02 Feb.,2022",
        "1 Day",
        "00:00AM",
        "00:00AM"
    ),
    createData(
        "Guest",
        "Visitor Name",
        "123",
        "9876543210",
        "02 Feb.,2022",
        "2 Day",
        "00:00AM",
        "00:00AM"
    ),
];

export default function AllRequesttable() {
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
                            <TableCell align="center" className="bold">
                                Category
                            </TableCell>
                            <TableCell align="center" className="bold">
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
                                    <Link to="/allrequestproperty">
                                        {row.RequestID}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">
                                    <div className="bgurgent d-flex justify-content-center align-items-center">
                                        {row.Urgency}
                                    </div>
                                </TableCell>

                                <TableCell align="center">
                                    {row.unitNo}
                                </TableCell>
                                <TableCell align="center">
                                    {row.RequestType}
                                </TableCell>
                                <TableCell align="center">
                                    {row.Category}
                                </TableCell>
                                <TableCell align="center">
                                    {row.RequestStatus}
                                </TableCell>
                                <TableCell align="center">
                                    {row.StaffAssigned}
                                </TableCell>
                                <TableCell align="center">
                                    {row.UserName}
                                </TableCell>
                                <TableCell align="center">
                                    {row.EmailID}
                                </TableCell>
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
