import React, { useState, useEffect } from "react";
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
import { getVisitorManagement } from "../services/allServisesApi";
import { formatAMPM } from "../util";
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
    const [visitor, setVisitor] = useState([]);
    const [totalCount, settotalCount] = useState(0);
    const [postPerpage, setPostPerPage] = useState(10);
    const [currentPage, setcurrentPage] = useState(1);

    const VisitorData = async () => {
        const resp = await getVisitorManagement(
            currentPage,
            postPerpage,
            "10/03/2022",
            "10/03/2052"
        );
        let totalData = resp.data.data.count;
        console.log(resp.data.data.count);
        let pagesCount = Math.ceil(totalData / postPerpage);
        settotalCount(pagesCount);

        setVisitor(resp.data.data.rows);
    };
    useEffect(() => {
        VisitorData();

        return () => {
            setVisitor([]);
        };
    }, [currentPage]);
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead className="thead">
                        <TableRow>
                            <TableCell className="Sbold" align="center">
                                Visitor Category
                            </TableCell>
                            <TableCell className="Sbold" align="center">
                                Vistiors Name
                            </TableCell>
                            <TableCell className="Sbold" align="center">
                                Unit No.
                            </TableCell>
                            <TableCell className="Sbold" align="center">
                                Contact No.
                            </TableCell>
                            <TableCell className="Sbold" align="center">
                                Date of Visit
                            </TableCell>
                            <TableCell className="Sbold" align="center">
                                Duration
                            </TableCell>
                            <TableCell className="Sbold" align="center">
                                In Time
                            </TableCell>
                            <TableCell className="Sbold" align="center">
                                Out Time
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visitor.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    {row.category_en}
                                </TableCell>
                                <TableCell align="center">
                                    <Link to="/adduser">{row.name}</Link>
                                </TableCell>
                                <TableCell align="center">
                                    {row.name_en}
                                </TableCell>
                                <TableCell align="center">
                                    {row.mobileNumber}
                                </TableCell>
                                <TableCell align="center">
                                    {row.inTime?.split("T")[0]}
                                </TableCell>
                                <TableCell align="center">
                                    {row.duration}
                                </TableCell>
                                <TableCell align="center">
                                    {formatAMPM(row.inTime)}
                                </TableCell>
                                <TableCell align="center">
                                    {formatAMPM(row.outTime)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                style={{ margin: "10px", float: "right" }}
                count={totalCount}
                onChange={(event, value) => {
                    setcurrentPage(value);
                }}
                shape="rounded"
            />
        </>
    );
}
