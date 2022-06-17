import React from "react";
import InputField from "../InputField";
import Form from "../Form";
import { TiDeleteOutline } from "react-icons/ti";

const CatalogForm = () => {
    return (
        <Form>
            <div className="d-flex justify-content-end col-12">
                <TiDeleteOutline style={{ fontSize: "25px" }} />
            </div>
            <InputField placeholder="Category Name" />
            <div className="d-flex  align-items-end">
                <button className="addCharge">Add New Charge Type</button>
            </div>
            <InputField placeholder="Charge Text" />
            <InputField placeholder="Service Cost (AED)" />
        </Form>
    );
};

export default CatalogForm;
