import React from "react";
import InputField from "../InputField";
import "../index.css";

import Form from "../Form";

const CatalogForm2 = () => {
    return (
        <Form>
            <div className="d-flex  col-12">
                <h6>Engineering</h6>
            </div>
            <InputField placeholder="Electrical Repair" label="Charge Type" />
            <InputField placeholder="400" label="Service Cost (AED)" />
            <InputField placeholder="Service Cost (AED)" label="Charge Cost" />

            <InputField placeholder="200" label="Service Cost (AED)" />
        </Form>
    );
};

export default CatalogForm2;
