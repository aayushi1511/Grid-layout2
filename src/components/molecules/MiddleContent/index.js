import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ContentTitle } from "../../atoms/ContentTitle";
import { ContentDescription } from "../../atoms/ContentDescription";

export const MiddleContent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        item
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.home__text}
      >
        <ContentTitle title={props.title} />
        <ContentDescription description={props.description} />
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  home__text:{
    paddingLeft: '8rem',
    width: '45%',
    textAlign: 'left',
  }
}));
