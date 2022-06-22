import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import "./AllRequesttable.css";
function createData(
    ExpensesSources,
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    July,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
) {
    return {
        ExpensesSources,
        Jan,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        July,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec,
    };
}

const rows = [
    createData(
        "Source 1 (AED)",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300"
    ),
    createData(
        "Source 2 (AED)",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300",
        "12300"
    ),
    createData(
        "Net Income (AED)",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100",
        "11100"
    ),
];

export default function TotalBudgetDetailtable({ placeholder }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead className="thead">
                        <TableRow>
                            <TableCell align="center" className="bold">
                                Expenses Sources
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
                        {rows.map((row) => (
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    {row.ExpensesSources}
                                </TableCell>
                                <TableCell align="center">{row.Jan}</TableCell>

                                <TableCell align="center">{row.Feb}</TableCell>

                                <TableCell align="center">{row.Mar}</TableCell>
                                <TableCell align="center">{row.Apr}</TableCell>
                                <TableCell align="center">{row.May}</TableCell>
                                <TableCell align="center">{row.Jun}</TableCell>
                                <TableCell align="center">{row.July}</TableCell>
                                <TableCell align="center">{row.Aug}</TableCell>
                                <TableCell align="center">{row.Sep}</TableCell>
                                <TableCell align="center">{row.Oct}</TableCell>
                                <TableCell align="center">{row.Nov}</TableCell>
                                <TableCell align="center">{row.Dec}</TableCell>
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
