import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home.js";
import LeagueNav from "../LeagueNav/LeagueNav.js";
import LeagueRoutes from "../LeagueRoutes/LeagueRoutes.js";
import OverwatchNav from "../OverwatchNav/OverwatchNav.js";
import OverwatchRoutes from "../OverwatchRoutes/OverwatchRoutes.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Footer from "../Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <NavBar />
                  <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnter={false}
                    transitionLeave={false}
                  >
                    <Home />
                    <Footer />
                  </ReactCSSTransitionGroup>
                </div>
              );
            }}
          />
          <Route
            path="/lol"
            render={props => {
              return (
                <div>
                  <LeagueNav {...props} />
                  <LeagueRoutes {...props} />
                  <Footer />
                </div>
              );
            }}
          />
          <Route
            path="/ow"
            render={props => {
              return (
                <div>
                  <OverwatchNav {...props} />
                  <OverwatchRoutes {...props} />
                  <Footer />
                </div>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
