import React from "react";
import PropertyTitle from "../../AllRequest/AllRequestProperty/PropertyTitle";
import DataManulist from "./DataManulist";
import DailogBox from "./DailogBox";
import "./index.css";
const GenerateInvoiceProperty = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const submitdata = () => {
        setOpen(true);
    };

    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="p-4">
                <div>
                    <PropertyTitle />
                </div>
                <div>
                    <DataManulist />
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button className="Rpayment" onClick={submitdata}>
                        Request Payment
                    </button>
                </div>
            </div>
            <DailogBox
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
            />
        </div>
    );
};

export default GenerateInvoiceProperty;
