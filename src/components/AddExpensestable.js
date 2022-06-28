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
                            <TableCell align="center" className="Sbold">
                                Total
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Jan
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Feb
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Mar
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Apr
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                May
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Jun
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                July
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Aug
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Sep
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Oct
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Nov
                            </TableCell>
                            <TableCell align="center" className="Sbold">
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
            <div className="d-flex justify-content-between">
                <p>ghghgkjjhf</p>
                <Pagination
                    style={{ margin: "10px", float: "right" }}
                    count={10}
                    shape="rounded"
                />
            </div>
        </>
    );
}
