import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SelectInput from "../CreateInvoice/SelectInput";
import Textfiled from "../../components/Textfiled";

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

export default function PaymentModel({ open, handleClose }) {
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
                    <h6>Pay Now?</h6>
                </BootstrapDialogTitle>
                <DialogContent>
                    <div className="pmodel">
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <h5>AED 500</h5>
                            <SelectInput />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <Textfiled placeholder="Card Number" />
                            <Textfiled placeholder="CVV" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <Textfiled placeholder="Holder Name" />
                            <Textfiled placeholder="Expiry year" />
                        </div>
                        <hr className="mt-5" />
                        <div className="d-flex justify-content-between">
                            <button className="plater">Save & Pay Later</button>
                            <button className="pnow">Pay Now</button>
                        </div>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
