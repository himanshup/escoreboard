import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Matches from "../Matches/Matches";
import "./MatchesNav.css";
import axios from "axios";
import moment from "moment";

class MatchesNav extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      dates: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/tournament/${this.props.tournamentId}`)
      .then(response => {
        // console.log(response.data[0].matches);
        const matches = response.data[0].matches;
        const dates = [];
        for (const match of matches) {
          dates.push(match.begin_at.slice(0, 10));
        }
        const newDatesArray = this.removeDuplicates(dates);
        this.setState({
          dates: newDatesArray
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeDuplicates = a => {
    return Array.from(new Set(a));
  };

  render() {
    if (this.state.dates.length === 0) {
      return <h1 className="container text-center mt-3">No Matches Found</h1>;
    } else {
      return (
        <div>
          <div className="container-fluid maxWidth">
            <div id="menu" className="p-3 text-center shadow-sm">
              <div className="row">
                {this.state.dates.map(date => (
                  <div className="col" key={date}>
                    <Link
                      to={`${this.props.match.url}/${date}`}
                      className="lead hvr-underline-from-left"
                    >
                      {moment(date).format("ddd, MMM D")}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="container mb-5">
            {this.state.dates.map(date => (
              <Route
                key={date}
                path={`${this.props.match.path}/${date}`}
                render={() => {
                  return <Matches date={date} id={this.props.tournamentId} />;
                }}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default MatchesNav;
