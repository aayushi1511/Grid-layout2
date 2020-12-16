import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: 327,
    marginLeft: '2.5rem',
    marginBottom: '2rem',
  },
  media: {
    height: 327,
    maxWidth: 327,
    backgroundColor: '#000'
    
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title='collections'
          height='327'
          width='327'
        />
        
      </CardActionArea>
    </Card>
  );
}
