import React, { useEffect, useState } from "react";
import "../../../App.css";
const PropertyTitle = ({
    requestId,
    isUrgent,
    type,
    unitNo,
    ResidentName,
    date,
    status,
    time,
    property,
}) => {
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(status);
    }, [status]);

    return (
        <>
            <div className=" d-flex  align-items-center">
                <p className="headtitle">Request ID - {requestId}</p>
                {isUrgent ? <span className="mx-3  urgent">Urgent</span> : null}
            </div>
            <div className=" d-flex justify-content-between lh-1 mt-3">
                <div>
                    <p>Property :{property} </p>
                    <p>Unit No : {unitNo}</p>
                    <p>Category : {type}</p>
                    <p>Resident Name :{ResidentName}</p>
                </div>
                <div>
                    <p>{date?.split("T")[0]}</p>
                    <p>{time}</p>
                    {active == "Pending" && (
                        <span className="pending">{status}</span>
                    )}
                    {active == "In-Process" && (
                        <span className="inprocess">{status}</span>
                    )}
                    {active == "Completed" && (
                        <span className="success">{status}</span>
                    )}
                </div>
            </div>
        </>
    );
};

export default PropertyTitle;
