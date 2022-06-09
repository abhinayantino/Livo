import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button {...bindTrigger(popupState)}>
                        <BsThreeDotsVertical />
                    </Button>
                    <Menu
                        {...bindMenu(popupState)}
                        style={{ overflow: "hidden" }}
                    >
                        <MenuItem onClick={popupState.close}>Ignore</MenuItem>
                        <MenuItem onClick={popupState.close}>Remove</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
