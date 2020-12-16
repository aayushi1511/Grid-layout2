import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Genres } from '../../atoms/Genres';
import genres from '../../../assets/genreData';

export const GenreList = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container item className={classes.main}>
        {genres.map((gen, i) => {
            return(
                <Genres text={gen.text} key={i}/>
            )
        })}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main:{
      paddingLeft: '8rem',
      textAlign: 'left'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 0,
    ...theme.mixins.toolbar,
  },
}));
