import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

export const Collections = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item className={classes.collections__text}>
        {props.heading}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  collections__text:{
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '1.13',
    color: '#fff',
    paddingLeft: '8rem',
    marginTop: '3rem'
  }
}));
