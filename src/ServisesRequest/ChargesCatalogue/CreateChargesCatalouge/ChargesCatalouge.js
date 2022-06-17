import React from "react";
import "../index.css";
import { AiOutlinePlus } from "react-icons/ai";
import CatalogForm from "./CatalogForm";
import CatalogForm2 from "./CatalogForm2";

const ChargesCatalouge = () => {
    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="width:400px">
                        <h5>Create Charges Catalogue</h5>
                    </div>
                    <div className="align-items-center">
                        <button className="gap Abtn">
                            <AiOutlinePlus />
                            &nbsp; Add New Category
                        </button>
                        <button className="Sbtn">Save</button>
                    </div>
                </div>
                <div>
                    <CatalogForm />
                </div>
                <div className="Cform2">
                    <CatalogForm2 />
                </div>
            </div>
        </div>
    );
};

export default ChargesCatalouge;
