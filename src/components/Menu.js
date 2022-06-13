import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Menu.css";
import { RiDeleteBin5Line } from "react-icons/ri";
//import { FaRegCheckCircle } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";

//    const useStyles = makeStyles((theme) => ({
//         root: {

//         }
//       });

export default function oMenuPopupState({ data: { icons, texts } }) {
    
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
                    </Button>
                    <Menu
                        {...bindMenu(popupState)}
                        style={{ overflow: "hidden" }}
                        className="menu-popup"
                    >
                        <MenuItem
                            onClick={popupState.close}
                            style={{ display: "flex", columnGap: "10px" }}
                        >
                            {icons[0]} {texts[0]}
                        </MenuItem>
                        <MenuItem
                            onClick={popupState.close}
                            style={{ display: "flex", columnGap: "10px" }}
                        >
                            {icons[1]}
                            {texts[1]}
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
