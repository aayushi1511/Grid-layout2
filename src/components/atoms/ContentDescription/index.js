import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

export const ContentDescription = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item className={classes.description__text}>
        {props.description}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  description__text:{
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '1.13',
    color: '#fff',
  }
}));
