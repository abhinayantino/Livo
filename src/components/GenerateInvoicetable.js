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
import { getGenerateInvoice } from "../services/allServisesApi";
import "./AllRequesttable.css";
function createData(
    RequestID,
    Urgency,
    unitNo,
    RequestType,
    RequestStatus,
    StaffAssigned,
    UserName
) {
    return {
        RequestID,
        Urgency,
        unitNo,
        RequestType,
        RequestStatus,
        StaffAssigned,
        UserName,
    };
}

// const rows = [
//     createData(
//         "000123456",
//         "Urgen",
//         "123",
//         "Request Type",
//         "Accomodation",
//         "In Process",
//         "Yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "00002673",
//         "",
//         "123",
//         "Maintenance",
//         "Plumbing",
//         "Plumbing",
//         "No",
//         "Faiz Abdullah"
//     ),
//     createData(
//         "243453455",
//         "urgent",
//         "123",
//         "Other Charges",
//         "Electrical",
//         "Pending",
//         "yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "355536464",
//         "Urgent",
//         "123",
//         "Individual",
//         "Other",
//         "Complted",
//         "Yes",
//         "Inzamamul Haq"
//     ),
//     createData(
//         "3454636",
//         "",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "1 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Guest",
//         "Visitor Name",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "2 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Courier",
//         "Visitor Name",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "1 Day",
//         "00:00AM",
//         "00:00AM"
//     ),
//     createData(
//         "Guest",
//         "Visitor Name",
//         "123",
//         "9876543210",
//         "02 Feb.,2022",
//         "2 Day",
//         "00:00AM",
//         "0dfghjgfdfghjgxxfghjkhghf"
//     ),
// ];

export default function GenerateInvoicetable() {
    const [generateCatalouge, setGenerateCatalouge] = React.useState([]);

    const GenerateInvoice = async () => {
        const resp = await getGenerateInvoice();
        setGenerateCatalouge(resp.data.data.rows);
    };
    React.useEffect(() => {
        GenerateInvoice();
    }, []);
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead className="thead">
                        <TableRow>
                            <TableCell align="center" className="Sbold">
                                Request ID
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Urgency
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Unit No.
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Request Type
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Request Status
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                Staff Assigned
                            </TableCell>
                            <TableCell align="center" className="Sbold">
                                User Name
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {generateCatalouge.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    <Link to="/generateinvoiceproperty">
                                        {row.requestId}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">
                                    {row.isUrgent ? (
                                        <div className=" bgurgent d-flex justify-content-center align-items-center gbgcolor">
                                            {row.isurgent}
                                        </div>
                                    ) : null}
                                </TableCell>
                                <TableCell align="center">
                                    {row.user.flat.name_ar}
                                </TableCell>
                                <TableCell align="center">{row.type}</TableCell>
                                <TableCell align="center">
                                    {row.status}
                                </TableCell>
                                <TableCell align="center">
                                    {row.staff == null ? <p>-</p> : row.staff}
                                </TableCell>
                                <TableCell align="center">
                                    {row.user.name}
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
