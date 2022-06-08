import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./index.css";
function Model({ show, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton></Modal.Header> */}
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <div>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <label htmlFor="formet">
                                            Date form
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            data-placeholder="Date of birth"
                                            id="formet"
                                            style={{
                                                border: "none",
                                                borderBottom:
                                                    "1px solid #DFE0E0",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="datestart">
                                            Date to
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="datestart"
                                            placeholder=""
                                            style={{
                                                border: "none",
                                                borderBottom:
                                                    "1px solid #DFE0E0",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <select
                                            style={{
                                                width: "180px",
                                                height: "48px",
                                                marginTop: "18px",
                                                border: "none",
                                            }}
                                        >
                                            <option>Report format </option>
                                            <option>fggfdfr</option>
                                        </select>
                                    </div>
                                    <button
                                        style={{
                                            width: "170px",
                                            height: "48px",
                                            background: "#0C344E",
                                            color: "white",
                                            marginTop: "18px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        Generate Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Model;
