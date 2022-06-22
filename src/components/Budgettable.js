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
    BudgetName,
    Property,
    FascalYear,
    StartDate,
    EndDate,
    ToatalIncome,
    ToatalExpense
) {
    return {
        BudgetName,
        Property,
        FascalYear,
        StartDate,
        EndDate,
        ToatalIncome,
        ToatalExpense,
    };
}

const rows = [
    createData(
        "Budget 1",
        "Property 1",
        "2022",
        "01 Jan 2022",
        "31 Dec 2022",
        "12340000",
        "123000"
    ),
    createData(
        "Budget 2",
        "Property 2",
        "2022",
        "01 Jan 2022",
        "31 Dec 2022",
        "12340000",
        "123000"
    ),
    createData(
        "Budget 3",
        "Property 3",
        "2022",
        "01 Jan 2022",
        "31 Dec 2022",
        "12340000",
        "123000"
    ),
    createData(
        "Budget 4",
        "Property 4",
        "2022",
        "01 Jan 2022",
        "31 Dec 2022",
        "12340000",
        "123000"
    ),
    createData(
        "Budget 5",
        "Property 5",
        "2022",
        "01 Jan 2022",
        "31 Dec 2022",
        "12340000",
        "123000"
    ),
    createData(
        "Budget 6",
        "Property 6",
        "2022",
        "01 Jan 2022",
        "31 Dec 2022",
        "12340000",
        "123000"
    ),
    createData(
        "Budget 7",
        "Property 7",
        "2022",
        "01 Jan 2022",
        "9876543210",
        "12340000",
        "123000"
    ),
    createData(
        "Guest",
        "Property 8",
        "2022",
        "01 Jan 2022",
        "1 Day",
        "2 Day",
        "00:00AM",
        "00:00AM"
    ),
];

export default function BudgetTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead className="thead">
                        <TableRow>
                            <TableCell align="center" className="bold">
                                Budget Name
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Property
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Fiscal Year
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Start Date
                            </TableCell>
                            <TableCell align="center" className="bold">
                                End Date
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Total Income
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Total Expense
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
                                    <Link to="/">{row.BudgetName}</Link>
                                </TableCell>
                                <TableCell align="center">
                                    {row.Property}
                                </TableCell>

                                <TableCell align="center">
                                    {row.FascalYear}
                                </TableCell>
                                <TableCell align="center">
                                    {row.StartDate}
                                </TableCell>
                                <TableCell align="center">
                                    {row.EndDate}
                                </TableCell>
                                <TableCell align="center">
                                    {row.ToatalIncome}
                                </TableCell>
                                <TableCell align="center">
                                    {row.ToatalExpense}
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
