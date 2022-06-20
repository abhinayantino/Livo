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
    InvoiceNo,
    PaymentStatus,
    Amount,
    DueDate,
    OverDueSince,
    OverDueAmount,
    InvoiceType,
    Category,
    UnitNo,
    UserName
) {
    return {
        InvoiceNo,
        PaymentStatus,
        Amount,
        DueDate,
        OverDueSince,
        OverDueAmount,
        InvoiceType,
        Category,
        UnitNo,
        UserName,
    };
}

const rows = [
    createData(
        "000123456",
        "complete",
        "AED 1200",
        "22 Feb, 2022",
        "Accomodation",
        "In Process",
        "Service Charge",
        "Inzamamul Haq",
        "juedi",
        "drrtrtrt"
    ),
    createData(
        "00002673",
        "Incomplete",
        "AED 1200",
        "22 Feb, 2022",
        "Plumbing",
        "Plumbing",
        "Service Charge",
        "Faiz Abdullah",
        "juedi",
        "drrtrtrt"
    ),
    createData(
        "243453455",
        "pending",
        "AED 1200",
        "22 Feb, 2022",
        "Electrical",
        "Pending",
        "yes",
        "Inzamamul Haq",
        "juedi",
        "drrtrtrt"
    ),
    createData(
        "355536464",
        "Inprocess",
        "123",
        "22 Feb, 2022",
        "Other",
        "Complted",
        "Yes",
        "Inzamamul Haq",
        "juedi",
        "drrtrtrt"
    ),
    createData(
        "3454636",
        "pending",
        "AED 1200",
        "02 Feb.,2022",
        "9876543210",
        "1 Day",
        "00:00AM",
        "00:00AM",
        "juedi",
        "drrtrtrt"
    ),
    createData(
        "Guest",
        "complete",
        "AED 1200",
        "02 Feb.,2022",
        "9876543210",
        "2 Day",
        "00:00AM",
        "00:00AM",
        "juedi",
        "drrtrtrt"
    ),
    createData(
        "Courier",
        "pending",
        "AED 1200",
        "02 Feb.,2022",
        "9876543210",
        "1 Day",
        "00:00AM",
        "00:00AM",
        "juedi",
        "drrtrtrt"
    ),
    createData(
        "Guest",
        "Inprocess",
        "AED 1200",
        "02 Feb.,2022",
        "1 Day",
        "2 Day",
        "00:00AM",
        "juejnd",
        "juedi",
        "drrtrtrt"
    ),
];

export default function Remindertable() {
    return (
        <>
            <TableContainer component={Paper} style={{ width: "max-content" }}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead className="thead">
                        <TableRow>
                            <TableCell align="center" className="bold">
                                <input type="checkbox" />
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "7rem" }}
                            >
                                Invoice No
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "7rem" }}
                            >
                                payment Status
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "7rem" }}
                            >
                                Amount
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "10rem" }}
                            >
                                Due Date
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "10rem" }}
                            >
                                Over Due Since
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "10rem" }}
                            >
                                Over Due Amount
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "10rem" }}
                            >
                                Invoice Type
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "10rem" }}
                            >
                                Category
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "10rem" }}
                            >
                                Unit No
                            </TableCell>
                            <TableCell
                                align="center"
                                className="bold"
                                style={{ width: "10rem" }}
                            >
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
                                    <input type="checkbox" />
                                </TableCell>
                                <TableCell align="center">
                                    <Link to="/">{row.InvoiceNo}</Link>
                                </TableCell>
                                <TableCell align="center">
                                    {row.PaymentStatus ? (
                                        <div className="bgurgent d-flex justify-content-center align-items-center">
                                            {row.PaymentStatus}
                                        </div>
                                    ) : null}
                                </TableCell>

                                <TableCell align="center">
                                    {row.Amount}
                                </TableCell>
                                <TableCell align="center">
                                    {row.DueDate}
                                </TableCell>
                                <TableCell align="center">
                                    {row.OverDueSince}
                                </TableCell>
                                <TableCell align="center">
                                    {row.OverDueAmount}
                                </TableCell>
                                <TableCell align="center">
                                    {row.InvoiceType}
                                </TableCell>
                                <TableCell align="center">
                                    {row.Category}
                                </TableCell>
                                <TableCell align="center">
                                    {row.UnitNo}
                                </TableCell>
                                <TableCell align="center">
                                    {row.UserName}
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
