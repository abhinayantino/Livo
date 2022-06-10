import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Menu.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

//    const useStyles = makeStyles((theme) => ({
//         root: {

//         }
//       });

export default function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button
                        {...bindTrigger(popupState)}
                        sx={{
                            minWidth: "0px",
                        }}
                        className="menubtn"
                    >
                        <BsThreeDotsVertical />
                        <BsThreeDotsVertical />
                    </Button>
                    <Menu
                        {...bindMenu(popupState)}
                        style={{ overflow: "hidden" }}
                        className="menu-popup"
                    >
                        <MenuItem onClick={popupState.close}>
                            <RiDeleteBin5Line />
                            &nbsp; Ignore
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            {" "}
                            <FaRegCheckCircle />
                            &nbsp; Remove
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
