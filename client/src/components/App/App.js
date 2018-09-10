import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import LeagueRoutes from "../LeagueRoutes/LeagueRoutes.js";
import Home from "../Home/Home.js";
import LeagueNav from "../LeagueNav/LeagueNav.js";
import OverwatchNav from "../OverwatchNav/OverwatchNav.js";
import OverwatchRoutes from "../OverwatchRoutes/OverwatchRoutes.js";

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
                  <Home />
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
