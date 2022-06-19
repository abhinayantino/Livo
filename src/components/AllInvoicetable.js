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
    InvoiceType,
    Category,
    StaffAssigned,
    UserName
) {
    return {
        InvoiceNo,
        PaymentStatus,
        Amount,
        DueDate,
        InvoiceType,
        Category,
        StaffAssigned,
        UserName,
    };
}

const rows = [
    createData(
        "000123456",
        "complete",
        "AED 1200",
        "Request Type",
        "Accomodation",
        "In Process",
        "Yes",
        "Inzamamul Haq"
    ),
    createData(
        "00002673",
        "Incomplete",
        "AED 1200",
        "Maintenance",
        "Plumbing",
        "Plumbing",
        "No",
        "Faiz Abdullah"
    ),
    createData(
        "243453455",
        "pending",
        "AED 1200",
        "Other Charges",
        "Electrical",
        "Pending",
        "yes",
        "Inzamamul Haq"
    ),
    createData(
        "355536464",
        "Inprocess",
        "123",
        "Individual",
        "Other",
        "Complted",
        "Yes",
        "Inzamamul Haq"
    ),
    createData(
        "3454636",
        "pending",
        "AED 1200",
        "02 Feb.,2022",
        "9876543210",

        "1 Day",
        "00:00AM",
        "00:00AM"
    ),
    createData(
        "Guest",
        "complete",
        "AED 1200",
        "02 Feb.,2022",
        "9876543210",
        "2 Day",
        "00:00AM",
        "00:00AM"
    ),
    createData(
        "Courier",
        "pending",
        "AED 1200",
        "02 Feb.,2022",
        "9876543210",
        "1 Day",
        "00:00AM",
        "00:00AM"
    ),
    createData(
        "Guest",
        "Inprocess",
        "AED 1200",
        "02 Feb.,2022",
        "1 Day",
        "2 Day",
        "00:00AM",
        "00:00AM"
    ),
];

export default function AllInvoicetable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead className="thead">
                        <TableRow>
                            <TableCell align="center" className="bold">
                                Invoice No
                            </TableCell>
                            <TableCell align="center" className="bold">
                                payment Status
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Amount
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Due Date
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Invoice Type
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Category
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
                                    {row.InvoiceType}
                                </TableCell>
                                <TableCell align="center">
                                    {row.Category}
                                </TableCell>
                                <TableCell align="center">
                                    {row.StaffAssigned}
                                </TableCell>
                                <TableCell align="center">
                                    {row.UserName}
                                </TableCell>
                                {/* <TableCell align="center">
                                    {row.EmailID}
                                </TableCell> */}
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
