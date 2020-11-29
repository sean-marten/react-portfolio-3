import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#302E2E",
    color: "white",
    textAlign: "center",
  },
  media: {
    height: "250px",
    width: "100%",
  },
}));

export default function PortfolioCard(props) {
  const classes = useStyles();
  return (
    <a style={{ textDecoration: "none" }} href={props.link}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Day Planner"
            image={props.img}
            title="Day planner"
          />
          <hr
            style={{ border: "none", backgroundColor: "black", height: "5px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}
