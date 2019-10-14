import React from "react";
import "./App.scss";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import LandingPage from "./components/LandingPage";
import Homes from "./components/Homes";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/homes" exact component={Homes} />
          <Route path="/about-us" exact component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
