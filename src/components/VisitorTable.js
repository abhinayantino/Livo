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

const rows = [
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
];

export default function UserTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Visitor Category
                            </TableCell>
                            <TableCell align="center">Vistiors Name</TableCell>
                            <TableCell align="center">Unit No.</TableCell>
                            <TableCell align="center">Contact No.</TableCell>
                            <TableCell align="center">Date of Visit</TableCell>
                            <TableCell align="center">Duration</TableCell>
                            <TableCell align="center">In Time</TableCell>
                            <TableCell align="center">Out Time</TableCell>
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
                                    {row.visitorCategory}
                                </TableCell>
                                <TableCell align="center">
                                    <Link to="/adduser">{row.visitorName}</Link>
                                </TableCell>
                                <TableCell align="center">
                                    {row.unitNo}
                                </TableCell>
                                <TableCell align="center">
                                    {row.contactNo}
                                </TableCell>
                                <TableCell align="center">
                                    {row.dateOfVisit}
                                </TableCell>
                                <TableCell align="center">
                                    {row.duration}
                                </TableCell>
                                <TableCell align="center">
                                    {row.inTime}
                                </TableCell>
                                <TableCell align="center">
                                    {row.outTime}
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
