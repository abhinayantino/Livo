import React from "react";
import "./index.css";
const DataManulist = () => {
    const data = [
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
        {
            Eletrical: "Electrical Circuit Repair",
            type: "checkbox",
            ACD: "ACD090",
            name: "onecheck",
        },
    ];
    return (
        <div className="datalist">
            <div className="p-3">
                <div>
                    <select className="selectinput">
                        <option>Engineering</option>
                        <option>dfdfhfgdf</option>
                        <option>sdfgdfgf</option>
                    </select>
                </div>

                <div className="scrollbar">
                    {data.map((item, index) => (
                        <div className="d-flex justify-content-between align-items-center pt-3">
                            <div className="d-flex justify-content-center gap ">
                                <div className="d-flex justify-content-center align-items-center ">
                                    <input
                                        type={item.type}
                                        className="input"
                                        name="onecheck"
                                    />
                                </div>

                                <p className="m-0">{item.Eletrical}</p>
                            </div>
                            <div>{item.ACD}</div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <h6 className="amount">Invoice Amount</h6>
                        <p>Service Tax</p>
                        <p>Other Charges</p>
                        <h6 className="amount">Total Amount</h6>
                    </div>
                    <div>
                        <h6 className="amount">8800 AED</h6>
                        <p>1000 AED</p>
                        <p>1000 AED</p>
                        <h6 className="amount">8800 AED</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataManulist;
