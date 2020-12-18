import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ProfileButton } from "../../atoms/ProfileButton";

const drawerWidth = 240;

export const NavProfile = (props) => {
    const classes = useStyles();

    return(
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBar__shift]: props.open,
        })}
      >
        <Toolbar style={{ padding: 0 }}>
          <ProfileButton onClick={props.handleDrawerOpen} />
        </Toolbar>
      </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    boxShadow: "none",
    height: 0,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "none",
  },
  appBar__shift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));