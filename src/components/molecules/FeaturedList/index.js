import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Collections } from "../../atoms/Collections";
import MediaCard from "../../atoms/Card";

export const FeaturedList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        item
        direction="column"
        justify="flex-start"
        //alignItems="flex-start"
      >
        <Collections heading={props.heading} />
        <Grid container item className={classes.card__image} direction="row" spacing={3}>
        {props.collections.map((img, i) => {
            return(
                <MediaCard image={img.img} />
            )
        })}
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card__image:{
    marginTop: '2rem',
    paddingLeft: '6rem',
  }
}));
