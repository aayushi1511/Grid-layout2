import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';


export const MenuItemIcon = (props) =>{
    return(
        <ListItemIcon>{<img src={props.image} />}</ListItemIcon>
    )
}