import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

export const ContentTitle = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item className={classes.title__text}>
        <p className={classes.title__para}>{props.title}</p>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title__para:{
    margin: '3rem 0 2rem 0'
  },
  title__text:{
    fontSize: '64px',
    fontWeight: 'bold',
    lineHeight: '1.13',
    color: '#fff',
  }
}));
