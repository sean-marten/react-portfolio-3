import Container from "@material-ui/core/Container";
import PorftolioCard from "./PortfolioCard";
import { makeStyles } from "@material-ui/core/styles";
import DayPlanner from "../assets/day-planner.png";
import ClapperBoard from "../assets/clapper-board.png";
import NoteTaker from "../assets/note-taker.png";
import OrgChart from "../assets/org-chart.png";
import PasswordGenerator from "../assets/password-generator.jpg";
import ReadmeGenerator from "../assets/readme-generator.png";
import SoftwareQuiz from "../assets/software-quiz.jpg";
import WeatherDashboard from "../assets/weather-dashboard.png";
import HypeType from "../assets/typing.png";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    textAlign: "center",
  },
  header: {
    fontSize: "50px",
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h1 className={classes.header}>Software Portfolio</h1>
      <br />
      <br />
      <Grid
        container
        spacing={10}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Day Planner"
            img={DayPlanner}
            link={"https://sean-marten.github.io/nine-to-five/"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Actor Search"
            img={ClapperBoard}
            link={"https://sean-marten.github.io/project-1/"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Note Taker"
            img={NoteTaker}
            link={"https://github.com/sean-marten/note-taker"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Org Chart"
            img={OrgChart}
            link={"https://github.com/sean-marten/org-chart-generator"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Password Generator"
            img={PasswordGenerator}
            link={
              "https://sean-marten.github.io/password-protected/src/index.html"
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Readme Generator"
            img={ReadmeGenerator}
            link={"https://github.com/sean-marten/writeme"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Software Quiz"
            img={SoftwareQuiz}
            link={"https://sean-marten.github.io/java-what/"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Weather Dashboard"
            img={WeatherDashboard}
            link={"https://sean-marten.github.io/the-weather-outside/"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PorftolioCard
            title="Hype Type"
            img={HypeType}
            link={"https://hype-type.herokuapp.com/"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
