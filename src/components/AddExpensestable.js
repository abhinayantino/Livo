import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Textfiled from "./Textfiled";
import "./AllRequesttable.css";
// function createData(
//     Total,
//     Jan,
//     Feb,
//     Mar,
//     Apr,
//     May,
//     Jun,
//     July,
//     Aug,
//     Sep,
//     Oct,
//     Nov,
//     Dec
// ) {
//     return {
//         Total,
//         Jan,
//         Feb,
//         Mar,
//         Apr,
//         May,
//         Jun,
//         July,
//         Aug,
//         Sep,
//         Oct,
//         Nov,
//         Dec,
//     };
// }

//const rows = [
//     createData(
//         "000123456",
//         "complete",
//         "AED 1200",
//         "Request Type",
//         "Accomodation",
//         "In Process",
//         "Yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "00002673",
//         "Incomplete",
//         "AED 1200",
//         "Maintenance",
//         "Plumbing",
//         "Plumbing",
//         "No",
//         "Faiz Abdullah"
//     ),
//     createData(
//         "243453455",
//         "pending",
//         "AED 1200",
//         "Other Charges",
//         "Electrical",
//         "Pending",
//         "yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "355536464",
//         "Inprocess",
//         "123",
//         "Individual",
//         "Other",
//         "Complted",
//         "Yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "3454636",
//         "pending",
//         "AED 1200",
//         "02 Feb.,2022",
//         "9876543210",
//         "1 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Guest",
//         "complete",
//         "AED 1200",
//         "02 Feb.,2022",
//         "9876543210",
//         "2 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Courier",
//         "pending",
//         "AED 1200",
//         "02 Feb.,2022",
//         "9876543210",
//         "1 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Guest",
//         "Inprocess",
//         "AED 1200",
//         "02 Feb.,2022",
//         "1 Day",
//         "2 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//];

export default function AddExpensestable({ expenses, setExpenses }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead className="thead">
                        <TableRow>
                            <TableCell align="center" className="bold">
                                Total
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Jan
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Feb
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Mar
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Apr
                            </TableCell>
                            <TableCell align="center" className="bold">
                                May
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Jun
                            </TableCell>
                            <TableCell align="center" className="bold">
                                July
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Aug
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Sep
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Oct
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Nov
                            </TableCell>
                            <TableCell align="center" className="bold">
                                Dec
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...Array(2)].map((row) => (
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    <Textfiled
                                        placeholder={
                                            expenses
                                                ? "Expense Source"
                                                : "Income Source"
                                        }
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>

                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
                                </TableCell>
                                <TableCell align="center">
                                    <Textfiled style={{ width: "50px" }} />
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
