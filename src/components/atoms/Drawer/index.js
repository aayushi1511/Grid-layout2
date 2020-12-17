
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';


export const Drawer = (props) => {
    const classes = useStyles();
     return(
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
       {props.children}
      </Drawer>
     )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#606060',
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: '6rem !important',
        backgroundColor: '#282828',
        overflowX: 'hidden',
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
  }));