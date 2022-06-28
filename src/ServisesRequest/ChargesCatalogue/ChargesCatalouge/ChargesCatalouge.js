import React from "react";
import "../index.css";
import CatalogForm from "./CatalogForm";
import CatalogForm2 from "./CatalogForm2";
import SearchBar from "../../../components/SearchBar";
import RoundIcons from "../../../components/RoundIcons";

const ChargesCatalouge = () => {
    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="width:400px">
                        <h5>Charges Catalogue</h5>
                    </div>
                    <div className=" d-flex align-items-center">
                        <div>
                            <SearchBar />
                        </div>
                        <RoundIcons />
                        <button className="Cbtn">Create</button>
                        <button className="Sbtn">Edit</button>
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
