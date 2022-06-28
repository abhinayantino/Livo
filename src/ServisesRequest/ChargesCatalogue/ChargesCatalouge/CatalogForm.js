import React from "react";
import InputField from "../InputField";
import Form from "../Form";

const CatalogForm = () => {
    return (
        <Form>
            <div className="d-flex  col-12">
                <h6>Housekeeping</h6>
            </div>
            <InputField placeholder="Carpet Shampoo" label="Charge Text" />
            <InputField placeholder="400" label="Service Cost (AED)" />
            <InputField placeholder="Additional Bedding" label="Charge Text" />
            <InputField placeholder="200" label="Service Cost (AED)" />
        </Form>
    );
};

export default CatalogForm;
