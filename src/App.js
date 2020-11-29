import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Biography from "./components/Biography";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename={"https://sean-marten.github.io/react-portfolio-3/"}>
      <Navbar />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route exact path="/" component={Biography} />
    </Router>
  );
}

export default App;
