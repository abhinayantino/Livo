import React from "react";
import InputField from "../InputField";
import Form from "../Form";

const CatalogForm = () => {
    return (
        <Form>
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
