import React from "react";
import "./index.css";
import SearchBar from "../../components/SearchBar";
import { AiOutlinePlus } from "react-icons/ai";
import SelectInput from "./SelectInput";
import { TextField } from "@mui/material";
const CreateInvoice = () => {
    const [bulk, setbulk] = React.useState(true);

    const handleSearchVisible = () => {
        setbulk(false);
    };
    const handleSearchHidden = () => {
        setbulk(true);
    };

    return (
        <>
            <div
                className="container bg-white"
                style={{ borderTopLeftRadius: "50px" }}
            >
                <div className="p-4">
                    <div className="d-flex justify-content-between">
                        <h5>Create Invoice</h5>
                        <button className="Cinvoice">Cancel</button>
                    </div>
                    <div className="d-flex gap-3 mt-4">
                        <button
                            className="individual"
                            onClick={handleSearchHidden}
                        >
                            Individual
                        </button>
                        <button className="bulk" onClick={handleSearchVisible}>
                            Bulk
                        </button>
                    </div>

                    <div className="d-flex gap-5">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-start gap-5 mt-5">
                                {bulk && (
                                    <div className="Sinvoice ">
                                        <SearchBar />
                                        <div className="d-flex justify-content-start align-items-center gap-2 mt-3">
                                            OR <div className="line"></div>
                                        </div>
                                        <div></div>
                                    </div>
                                )}
                            </div>
                            <div className="rform">
                                <div className="d-flex justify-content-between mt-4">
                                    <SelectInput label="Select Property" />
                                    <SelectInput label="Unit Category" />
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <SelectInput label="Select Unit" />
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="datestart"
                                        placeholder="Due Date"
                                        style={{
                                            border: "none",
                                            borderBottom: "1px solid #DFE0E0",
                                            width: "255px",
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <SelectInput label="Charges Category" />
                                    <TextField
                                        id="standard-helperText"
                                        variant="standard"
                                        placeholder="Total Amount (AED)"
                                        style={{
                                            marginTop: "13px",
                                            width: "255px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <TextField
                                    id="filled-multiline-static"
                                    multiline
                                    rows={4}
                                    placeholder="Add a note"
                                    variant="filled"
                                    style={{
                                        borderRadius: "12px",
                                        width: "600px",
                                        border: "none",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h5>Attach Documents</h5>
                            <button className="Radd">
                                <AiOutlinePlus /> &nbsp; Add Document
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateInvoice;
