import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import MatchesNav from "../MatchesNav/MatchesNav";
import axios from "axios";

class Region extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { tournaments: [] };
  }

  componentDidMount() {
    axios
      .get(`/api/series/${this.props.seriesId}`)
      .then(series => {
        this.setState({
          tournaments: series.data[0].tournaments
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Route
          path={`${this.props.match.path}`}
          render={() => {
            return (
              <div className="container text-center">
                <div className="d-flex justify-content-around">
                  {this.state.tournaments.map(tournament => (
                    <Link
                      key={tournament.id}
                      to={`${
                        this.props.match.url
                      }/${tournament.name.toLowerCase()}`}
                    >
                      <span className="text-capitalize">{tournament.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }}
        />

        {this.state.tournaments.map(tournament => (
          <Route
            key={tournament.id}
            path={`${this.props.match.path}/${tournament.name.toLowerCase()}`}
            render={props => {
              return <MatchesNav tournamentId={tournament.id} {...props} />;
            }}
          />
        ))}
      </div>
    );
  }
}

export default Region;
