import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import profile from '../../../assets/profile.png';
import IconButton from '@material-ui/core/IconButton';

export const ProfileButton = (props) => {
    const classes = useStyles();
    return(
        <IconButton
        onClick={props.handleDrawerOpen}
        edge="start"
        className={clsx(classes.menu__button, {
          [classes.hide]: open,
        })}
      >
        <img src={profile} className={classes.profile__img} />
      </IconButton>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    profile__img:{
        width: '57px',
        height: '56px',
      },
      menu__button: {
        padding:0,
        margin: 0,
        borderRadius: 0,
        marginTop: '5rem',
        width: '5.5%',
      },
  }));