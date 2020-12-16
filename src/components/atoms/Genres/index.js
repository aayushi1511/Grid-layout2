import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

export const Genres = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item className={classes.genres}>
        {props.text}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  genres:{
  //textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: 1,
  color: '#A0A0A0',
  marginBottom: '1.5rem',
  },
}));
