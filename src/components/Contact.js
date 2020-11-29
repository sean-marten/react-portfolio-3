import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#302E2E",
    color: "white",
    padding: theme.spacing(4),
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    margin: theme.spacing(2),
  },
  button: {
    backgroundColor: "white",
    margin: theme.spacing(2),
  },
}));
export default function Contact() {
  const classes = useStyles();

  return (
    <Container>
      <form>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h3">Contact</Typography>
            <hr />
            <TextField
              className={classes.input}
              label="Name"
              variant="outlined"
            />
            <TextField
              className={classes.input}
              label="E-mail"
              variant="outlined"
            />
            <Typography variant="h6">Message</Typography>
            <TextField
              className={classes.input}
              label="Message"
              variant="outlined"
              multiline
              rows={10}
            />
          </CardContent>
          <CardActions>
            <Button type="submit" size="large" className={classes.button}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}
