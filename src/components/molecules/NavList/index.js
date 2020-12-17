import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const NavList = (props) => {
    const classes = useStyles();
    return(
          <ListItem button style={{marginTop: '3rem'}}>
            <ListItemIcon>{<img src={props.list__icon} />}</ListItemIcon>
            <ListItemText primary={props.list__text} className={classes.menuItem__text} />
          </ListItem>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuItem__text:{
        marginLeft: '1.5rem'
      },
  }));