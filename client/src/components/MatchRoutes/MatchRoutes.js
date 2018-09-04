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
        // const matchTimes = [];
        // for (const match of matches) {
        //   matchTimes.push(match.begin_at);
        // }
        this.setState({
          matches: matches
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
                start={this.state.matches[0] && this.state.matches[0].begin_at}
                end={this.state.matches[0] && this.state.matches[9].begin_at}
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
                start={
                  this.state.matches[10] && this.state.matches[10].begin_at
                }
                end={this.state.matches[19] && this.state.matches[19].begin_at}
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
                start={
                  this.state.matches[20] && this.state.matches[20].begin_at
                }
                end={this.state.matches[29] && this.state.matches[29].begin_at}
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
                start={
                  this.state.matches[30] && this.state.matches[30].begin_at
                }
                end={this.state.matches[39] && this.state.matches[39].begin_at}
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
                start={
                  this.state.matches[40] && this.state.matches[40].begin_at
                }
                end={this.state.matches[49] && this.state.matches[49].begin_at}
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
                start={
                  this.state.matches[50] && this.state.matches[50].begin_at
                }
                end={this.state.matches[59] && this.state.matches[59].begin_at}
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
                start={
                  this.state.matches[60] && this.state.matches[60].begin_at
                }
                end={this.state.matches[69] && this.state.matches[69].begin_at}
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
                start={
                  this.state.matches[70] && this.state.matches[70].begin_at
                }
                end={this.state.matches[79] && this.state.matches[79].begin_at}
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
                start={
                  this.state.matches[80] && this.state.matches[80].begin_at
                }
                end={this.state.matches[89] && this.state.matches[89].begin_at}
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
                start={
                  this.state.matches[90] && this.state.matches[90].begin_at
                }
                end={this.state.matches[93] && this.state.matches[93].begin_at}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default MatchRoutes;
