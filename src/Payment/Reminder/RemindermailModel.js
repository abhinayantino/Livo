import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;

    return (
        <div ref={ref} style={style} {...other}>
            {children}
        </div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
    border: "none",
};

export default function RemindermailModel({ handleClose, open }) {
    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <h6 className="text-center">
                            Send Reminder Mail? (200)
                        </h6>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod te.
                        </p>
                        <div className="d-flex justify-content-between">
                            <button className="rcancel">Cancel</button>
                            <button className="rsendmail">Send Mail</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
