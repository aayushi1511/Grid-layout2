import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const NavList = () => {
    const classes = useStyles();
    return(
          <ListItem button key={nav.text} style={{marginTop: '3rem'}}>
            <ListItemIcon>{<img src={nav.icon} />}</ListItemIcon>
            <ListItemText primary={nav.text} className={classes.menuItem__text}/>
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