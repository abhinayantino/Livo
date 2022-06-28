import React from "react";
import LeftNav from "../../../components/leftNav";
import TopNav from "../../../components/topNav";
import AllRequestProperty from "./AllRequestProperty";

const AllRequestpropertyMain = () => {
    return (
        <>
            <TopNav />
            <div style={{ display: "flex", background: "#FFE3D2" }}>
                <LeftNav />
                <AllRequestProperty />
            </div>
        </>
    );
};

export default AllRequestpropertyMain;
