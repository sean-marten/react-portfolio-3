import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./Image";
import Sean from '../assets/sean-marten.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    textAlign: "center",
    textDecoration: "underline",
  },
  container: {
    backgroundColor: '#302E2E',
    padding: '20px'
  },
  image: {
    textAlign: "center",
    paddingTop: "20px",
  },
  text: {
    color: 'white'
  }
}));

export default function Biography() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.image}>
        <Image css={{paddingRight: '80px'}} source={Sean}/>
        <Image css={{paddingLeft: '80px'}} source="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/12434053081537347969-512.png"/>
      </div>
      <h3 style={{color: 'white'}} className={classes.header}>Introduction</h3>
      <p className={classes.text}>
        I began my professional journey at UC Davis studying chemical
        engineering. After graduating and beginning work in Automation for a
        company called Zymergen, I quickly found my passion working with
        software. The software that I have been able to work on in this role is
        mostly back end development with Javascript, C# and Python. With almost
        2 years of experience in this position getting my feet wet with
        software, I have decided I wanted to expand my software experience by
        taking on new challenges. In order to round out and sharpen some more of
        my software tools, I decided to begin a certification program through UC
        Berkeley for full stack software development. This course covers
        everything from the basics of development with HTML, CSS and JavaScript
        and then moves quickly into back end development covering APIs, user
        authentication, the full MERN stack, Django and more.
      </p>
      <h3 style={{color: 'white'}} className={classes.header}>Where I'm From</h3>
      <p className={classes.text}>
        My parents both immigrated to the United States from Canada before I was
        born. They planted roots in Roseville, California, a suburb of
        Sacramento, where I grew up. I later moved to Davis for college and soon
        after began to move closer to the bay area as I progressed through jobs
        out of college. I currently reside in Oakland, California.
      </p>
      <h3 style={{color: 'white'}} className={classes.header}>What are my favorite hobbies</h3>
      <p className={classes.text}>
        I have a few hobbies that I keep close and committed to. I love staying
        active which includes lifting weights, running, hiking and playing a
        variety of sports. I also really enjoy reading and try to read at least
        one book a month. If you don't find me doing any of those things, I am
        probably spending time with my friends.
      </p>
      <h3 style={{color: 'white'}} className={classes.header}>What my dream job is</h3>
      <p className={classes.text}>
        Realizing how much I love software has driven me to set my career path
        in software engineering. I am still somewhat new to the industrty and am
        exploring different types of software and focuses. With further
        experience I will begin to focus in on what I want to specialize in. But
        for now, I want to be working with as much software as I can so I can
        learn a wide stack of programming languages.
      </p>
      <h3 style={{color: 'white'}} className={classes.header}>Why I want to be a software engineer</h3>
      <p className={classes.text}>
        I think it can be pretty rare to realize what you really want to do for
        the rest of your life. For some people that realization never really
        comes. For me the past year and a half or so I have been working with a
        lot of software, at work, at school and on my own ventures. Each step of
        the way I have only become more passionate about it. With putting as
        much as I can on my plate at work with software, as well as through my
        software development program, I can confidently say that as exhausting
        as it is sometimes, I absolutely love it and that feeling is not going
        anywhere.
      </p>
    </Container>
  );
}
