import React from "react";
import "./index.css";
import SelectInput from "../CreateInvoice/SelectInput";
import Textfiled from "../../components/Textfiled";
import { InputTextArea } from "../../components/InputTextArea";
import PaymentModel from "./PaymentModel";
const ExpensesDetails = () => {
    const [open, setOpen] = React.useState(false);
    const [paymentDue, setPaymentDue] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="p-4">
                <PaymentModel open={open} handleClose={handleClose} />
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-4">
                        <h5>Expense Details</h5>
                        {paymentDue ? (
                            <p className="pdue">Payment Due</p>
                        ) : (
                            <p className="pdue">Payment is process</p>
                        )}
                    </div>
                    <div>
                        <button className="editedtail">Edit Details</button>
                        <button className="Dpaynow" onClick={handleOpen}>
                            Pay Now
                        </button>
                    </div>
                </div>
                <div className="d-flex gap-3 mt-4">
                    <button disabled className="pexpenses">
                        Property Expenses
                    </button>
                    <button disabled className="uexpenses">
                        Unit Expenses
                    </button>
                </div>
                <div className="d-flex justify-content-between Edetailform">
                    <div className="rform">
                        <div className="d-flex justify-content-between mt-4">
                            <SelectInput label="Select Property" />
                            <SelectInput label="Unit Category" />
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <SelectInput label="Select Unit" />
                            <SelectInput label="Charges Category" />
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <Textfiled placeholder="500" label="Amount" />
                            <div>
                                <label htmlFor="datestart">Due Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="datestart"
                                    placeholder=""
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #DFE0E0",
                                        width: "250px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <InputTextArea placeholder="Add a notes" />
                </div>
                <div className="mt-4">
                    <h5>Receiver Bank Details</h5>
                    <div className="holder">
                        <Textfiled
                            placeholder="Md Insha Ahmad"
                            label="Holder Name"
                            style={{ width: "580px" }}
                        />
                    </div>
                    <div className="d-flex justify-content-between  swift">
                        <Textfiled placeholder="12345" label="IBAN Number" />
                        <Textfiled placeholder="12345" label="Swift Number" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpensesDetails;
