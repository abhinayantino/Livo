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

export default function AddExpensestable({ placeholder, data }) {
    console.log(data);
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
                        {data.map((row) => (
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    <Textfiled placeholder={placeholder} />
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
