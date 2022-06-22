import React, { useState } from "react";
import "../index.css";
import SelectInput from "../../CreateInvoice/SelectInput";
import Textfiled from "../../../components/Textfiled";
import { AiOutlinePlus } from "react-icons/ai";
import AddExpensestable from "../../../components/AddExpensestable";
const AddBudget = () => {
    const [expenses, setExpenses] = React.useState(false);
    const [addrow, setAddRow] = useState([]);
    const handleAddRow = () => {
        setAddRow([
            ...addrow,
            {
                first: "",
                second: "",
                third: "",
            },
        ]);
    };
    console.log("add row", addrow);
    const handleExpenses = () => {
        setExpenses(true);
    };

    const handleIncome = () => {
        setExpenses(false);
    };

    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="p-4">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>Add New Budget</h5>
                    </div>
                    <div>
                        <button className="bcancel">Cancel</button>
                        <button className="bsave">Save</button>
                    </div>
                </div>
                <div className=" f-AddBudget">
                    <div className="d-flex justify-content-between align-items-end mt-4">
                        <SelectInput label="Select Property" placeholder="" />
                        <Textfiled label="Budget Name" placeholder="" />
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <SelectInput label="Fascal year" placeholder="2022" />
                        <SelectInput
                            label="Fascal year start"
                            placeholder="January"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <div>
                        <button
                            className={expenses ? "editincome" : "bgeditincome"}
                            onClick={handleIncome}
                        >
                            Income
                        </button>
                        <button
                            className={
                                expenses ? "bgeditexpenses" : "editexpenses"
                            }
                            onClick={handleExpenses}
                        >
                            Expenses
                        </button>
                    </div>
                    <div>
                        <button className="addrow" onClick={handleAddRow}>
                            <AiOutlinePlus /> &nbsp; Add New Row
                        </button>
                    </div>
                </div>
                <div className="mt-3">
                    {expenses ? (
                        <AddExpensestable
                            placeholder="Expenses Source"
                            data={addrow}
                        />
                    ) : (
                        <AddExpensestable
                            placeholder="Income Source"
                            data={addrow}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddBudget;
