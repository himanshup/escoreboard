import React, { Component } from "react";
import { Route } from "react-router-dom";
import Matches from "../Matches/Matches";
import axios from "axios";

class MatchRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/nalcs/regular/matches")
      .then(response => {
        console.log(response.data[0].matches);
        const matches = response.data[0].matches;
        const matchTimes = [];
        for (const match of matches) {
          matchTimes.push(match.begin_at);
        }
        this.setState({
          matches: matchTimes
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path={`/nalcs/regular/week/1`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[0]}
                end={this.state.matches[9]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/2`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[10]}
                end={this.state.matches[19]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/3`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[20]}
                end={this.state.matches[29]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/4`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[30]}
                end={this.state.matches[39]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/5`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[40]}
                end={this.state.matches[49]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/6`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[50]}
                end={this.state.matches[59]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/7`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[60]}
                end={this.state.matches[69]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/8`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[70]}
                end={this.state.matches[79]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/9`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[80]}
                end={this.state.matches[89]}
              />
            );
          }}
        />
        <Route
          exact
          path={`/nalcs/regular/week/10`}
          render={() => {
            return (
              <Matches
                start={this.state.matches[90]}
                end={this.state.matches[93]}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default MatchRoutes;
