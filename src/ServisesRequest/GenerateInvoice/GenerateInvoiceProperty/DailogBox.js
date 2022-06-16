import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import tick from "../../../assets/tick.gif";
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

export default function CustomizedDialogs({ open, handleClose }) {
    return (
        <div className="dailogbox">
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <div className="tickright">
                    <img src={tick} alt="tick" width="20%" className="tick" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                    >
                        <h6 className="psent">Payment Request Sent</h6>
                        <h6 className="invoice">Invoice No. 000123456</h6>
                    </BootstrapDialogTitle>
                </div>

                <DialogContent dividers>
                    <div className="d-flex justify-content-center devider ">
                        <div>
                            <p>Property</p>
                            <p>Units</p>
                            <p>Resident</p>
                            <p>Amount(ABD)</p>
                        </div>
                        <div>
                            <p>Property Name</p>
                            <p>AH 123</p>
                            <p>Insha Ahmed</p>
                            <p>123400</p>
                        </div>
                    </div>
                </DialogContent>
                <div className="d-flex justify-content-center align-items-center viewp">
                    <a href="/eeee" className="view">
                        View Notices
                    </a>
                </div>
            </BootstrapDialog>
        </div>
    );
}
