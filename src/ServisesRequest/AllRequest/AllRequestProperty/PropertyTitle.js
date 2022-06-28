import React from "react";

const PropertyTitle = () => {
    return (
        <>
            <div className=" d-flex  align-items-center">
                <p className="headtitle">Request ID - 000123456</p>
                <span className="mx-3  urgent">Urgent</span>
            </div>
            <div className=" d-flex justify-content-between lh-1 mt-3">
                <div>
                    <p>Property : Dubai Marina </p>
                    <p>Unit No : A123</p>
                    <p>Category : Electrical</p>
                    <p>Resident Name : Insha Ahmed</p>
                </div>
                <div>
                    <p>22/02/2022</p>
                    <p>12:09 Pm</p>
                    <span className="urgent">Pending</span>
                </div>
            </div>
        </>
    );
};

export default PropertyTitle;
