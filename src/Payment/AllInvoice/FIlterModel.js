import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TiDeleteOutline } from "react-icons/ti";
import "./index.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function FilterModel({ handleClose, open }) {
    const data = [
        { type: "Checkbox", text: "Complete" },
        { type: "Checkbox", text: "In Process" },
        { type: "Checkbox", text: "Pending" },
    ];
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    <h5>Add FIlters</h5>
                </BootstrapDialogTitle>
                <DialogContent>
                    <div className="d-flex">
                        <select className="spayment">
                            <option>Payment Status</option>
                            <option>hjghhj</option>
                            <option>hjghhj</option>
                            <option>hjghhj</option>
                        </select>
                        <button className="psubmit">Save</button>
                    </div>
                    <hr />
                    <div className="mgap">
                        {data.map((item, index) => (
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <input type={item.type} />
                                <p className="m-0 ">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="d-flex flex-wrap gap-3">
                        <p className="dfilter">
                            Pending
                            <TiDeleteOutline style={{ fontSize: "20px" }} />
                        </p>
                        <p className="dfilter">
                            Pending
                            <TiDeleteOutline style={{ fontSize: "20px" }} />
                        </p>
                        <p className="dfilter">
                            Filter2
                            <TiDeleteOutline style={{ fontSize: "20px" }} />
                        </p>
                        <p className="dfilter">
                            filter1
                            <TiDeleteOutline style={{ fontSize: "20px" }} />
                        </p>
                        <p className="dfilter">
                            Filter2
                            <TiDeleteOutline style={{ fontSize: "20px" }} />
                        </p>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
