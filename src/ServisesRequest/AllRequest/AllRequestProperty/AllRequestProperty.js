import React, { useState, useEffect } from "react";
import "./index.css";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pdf from "../../../components/Pdf";
import CommentsField from "../../../components/CommentsField";
import PropertyTitle from "./PropertyTitle";
import ResidentData from "./ResidentData";
import { useParams } from "react-router-dom";
import {
    deleteStaffDeatail,
    getAllRequestProperty,
} from "../../../services/allServisesApi";
import { formatAMPM } from "../../../util";
import { getStaffdetail } from "../../../services/allServisesApi";
import { TiDelete } from "react-icons/ti";
// import staffimage from "../../../assets/staffimage.png";
import { postStaffDeatail } from "../../../services/allServisesApi";

const AllRequestProperty = () => {
    const urlParams = useParams();

    const [AllRequestProperty, setAllRequestProperty] = useState({});
    const [staffassign, setStaffAssign] = useState([]);
    const [staffDisabled, setStaffDisabled] = useState(false);
    const [hideButton, setHideButton] = useState(true);
    const [deleteStaff, setDeleteStaff] = useState(true);
    const [staffData, setStaffData] = useState({
        name: "",
        img: "",
        id: "",
    });

    const fetchAllRequestProperty = async () => {
        const response = await getAllRequestProperty(urlParams?.id);
        setAllRequestProperty(response.data.data);
    };

    useEffect(() => {
        fetchAllRequestProperty();
    }, []);

    const [optionSelect, setOptionSelect] = useState();

    const StaffAssign = async () => {
        const response2 = await getStaffdetail();
        setStaffAssign(response2.data.data);
        if (response2) {
            fetchAllRequestProperty();
        }
    };
    useEffect(() => {
        let statusw;
        if (AllRequestProperty.status == "In-Process") {
            statusw = true;
        }
        if (AllRequestProperty.status == "Completed") {
            statusw = true;
            setHideButton(false);
        }
        StaffAssign();
        setOptionSelect(statusw);
    }, []);

    useEffect(() => {
        let statusw;
        if (AllRequestProperty.status == "In-Process") {
            statusw = true;
        }
        if (AllRequestProperty.status == "Completed") {
            statusw = true;
            setHideButton(false);
        }
        if (AllRequestProperty.staff === null) {
            setOptionSelect(false);
        } else {
            setOptionSelect(statusw);
            setStaffData({
                name: AllRequestProperty.staff && AllRequestProperty.staff.name,
                img:
                    AllRequestProperty.staff &&
                    AllRequestProperty.staff.profilePicture,
                id: AllRequestProperty.staff && AllRequestProperty.staff.id,
            });
            setStaffDisabled(false);
            setDeleteStaff(statusw);
        }
    }, [AllRequestProperty]);

    const AssignStaffDetail = async () => {
        let data = {
            requestId: urlParams.id,
            staffId: staffData.id,
        };
        const response3 = await postStaffDeatail(data);
        if (response3.data.status === "success") {
            fetchAllRequestProperty();
        }
    };

    const deleteRequset = async () => {
        let data = {
            requestId: urlParams.id,
        };
        let response = await deleteStaffDeatail(data);
        if (response.data.status === "success") {
            fetchAllRequestProperty();
            setStaffDisabled(false);
            setDeleteStaff(true);
        }
    };

    const selectItem = (e, g, id) => {
        setStaffDisabled(true);
        setOptionSelect(true);

        setStaffData({
            name: e.target.value,
            img: g,
            id: id,
        });
    };

    return (
        <div
            className="container bg-white"
            style={{ borderTopLeftRadius: "50px" }}
        >
            <div className="p-4">
                <PropertyTitle
                    requestId={AllRequestProperty.requestId}
                    isUrgent={AllRequestProperty.isUrgent}
                    type={AllRequestProperty.type}
                    unitNo={AllRequestProperty.user?.flat?.name_ar}
                    ResidentName={AllRequestProperty?.user?.name}
                    date={AllRequestProperty.createdAt}
                    status={AllRequestProperty.status}
                    time={formatAMPM(AllRequestProperty.createdAt)}
                    property={AllRequestProperty.user?.flat?.building?.name_ar}
                />
                <ResidentData images={AllRequestProperty.files} />
                <div className="d-flex  mt-3">
                    <div style={{ width: "750px" }}>
                        <p className="assist">Assign Staff</p>
                    </div>
                    <p className="assist">Attached Documents</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="mb-3">
                        {optionSelect ? (
                            <div style={{ width: "270px" }}>
                                <div className="d-flex justify-content-between align-items-center paros">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Avatar
                                            // src={staffimage}
                                            src={staffData?.img}
                                            alt="pdfimage"
                                        />
                                        <p
                                            style={{
                                                padding: "12px 0px 0px 10px",
                                            }}
                                        >
                                            {staffData?.name}
                                        </p>
                                    </div>
                                    {hideButton && (
                                        <div className="float-right">
                                            {staffDisabled ? (
                                                <TiDelete
                                                    onClick={() => {
                                                        setOptionSelect(false);
                                                        setStaffDisabled(false);
                                                    }}
                                                />
                                            ) : (
                                                <TiDelete
                                                    onClick={() =>
                                                        deleteRequset()
                                                    }
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <TextField
                                id="Area"
                                select
                                label="Select"
                                variant="standard"
                                placeholder="Select Property"
                                style={{
                                    fontFamily: "Barlow",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                    width: "250px",
                                }}
                            >
                                {staffassign &&
                                    Object.keys(staffassign).map((option) => (
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <p className="f-bold">
                                                    {option}
                                                </p>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {staffassign &&
                                                    staffassign[option].map(
                                                        (staff) => {
                                                            return (
                                                                <div className="d-flex  align-items-center gap-2">
                                                                    <input
                                                                        type="radio"
                                                                        value={
                                                                            staff.name
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            selectItem(
                                                                                e,
                                                                                staff.profilePicture,
                                                                                staff.id
                                                                            );
                                                                        }}
                                                                    />

                                                                    <p
                                                                        style={{
                                                                            margin: "0px",
                                                                        }}
                                                                    >
                                                                        {
                                                                            staff.name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                            </TextField>
                        )}
                    </div>
                    <div>
                        {hideButton && (
                            <button
                                className={
                                    staffDisabled ? "assign" : "disassign"
                                }
                                onClick={AssignStaffDetail}
                                disabled={staffDisabled ? false : true}
                            >
                                Assign
                            </button>
                        )}
                    </div>
                    <div>
                        <Pdf />
                    </div>
                </div>
                <div className="float-end">
                    <Pdf />
                </div>
                <div>
                    <h6 className="mt-5">comments</h6>
                    <CommentsField />
                    <CommentsField />
                </div>
                <div className="description">
                    <div className="mt-5">
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={4}
                            placeholder="Description"
                            variant="filled"
                            style={{ borderRadius: "12px", width: "578px" }}
                        />
                    </div>
                    <div>
                        <button className="prbtn">Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRequestProperty;
