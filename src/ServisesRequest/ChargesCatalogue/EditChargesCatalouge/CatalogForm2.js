import React from "react";
import InputField from "../InputField";
import "../index.css";
import { TiDeleteOutline } from "react-icons/ti";
import Form from "../Form";

const CatalogForm2 = () => {
    return (
        <Form>
            <div className="d-flex justify-content-end col-12">
                <TiDeleteOutline style={{ fontSize: "25px" }} />
            </div>
            <InputField placeholder="Housekeeping" label="Categery Name" />
            <div className="d-flex align-items-end">
                <button className="addCharge">Add New Charge Type</button>
            </div>
            <InputField placeholder="Carpet Shampoo" label="Charge Type" />
            <InputField placeholder="400" label="Service Cost (AED)" />
            <InputField placeholder="Carpet Shampoo" label="Charge Type" />
            <InputField placeholder="400" label="Service Cost (AED)" />
        </Form>
    );
};

export default CatalogForm2;
