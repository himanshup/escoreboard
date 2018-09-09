import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Matches from "../Matches/Matches";
import "./MatchesNav.css";
import axios from "axios";
import moment from "moment";

class MatchesNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      currentDate: "",
      currentIndex: 0
    };
  }

  componentDidMount() {
    // get tournament by id and then store the dates from each match in an array
    // also used to generate links/routes
    axios
      .get(`/api/tournament/${this.props.tournamentId}`)
      .then(tournament => {
        const matches = tournament.data[0].matches;

        const dates = [];
        for (const match of matches) {
          dates.push(match.begin_at.slice(0, 10));
        }
        const newDatesArray = this.removeDuplicates(dates);
        this.setState({
          dates: newDatesArray
        });

        for (let [index, match] of matches.entries()) {
          if (match.status === "running") {
            this.setState({
              currentIndex: index
            });
            break;
          } else if (match.status === "not_started") {
            this.setState({
              currentIndex: index
            });
            break;
          } else {
            this.setState({
              currentIndex: newDatesArray.length - 1
            });
            break;
          }
        }
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
          <div className="container-fluid maxWidth mt-3">
            <div id="menu" className="p-3 text-center shadow-sm">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  {this.state.dates[this.state.currentIndex - 1] ? (
                    <Link
                      to={`${this.props.match.url}/${
                        this.state.dates[this.state.currentIndex - 1]
                      }`}
                      className="lead hvr-underline-from-left"
                      onClick={() =>
                        this.setState({
                          currentIndex: this.state.currentIndex - 1
                        })
                      }
                    >
                      <i className="icon ion-ios-arrow-back p-3" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {this.state.dates[this.state.currentIndex - 2] ? (
                    <div className="col">
                      <Link
                        to={`${this.props.match.url}/${
                          this.state.dates[this.state.currentIndex - 2]
                        }`}
                        className="lead hvr-underline-from-left"
                        onClick={() =>
                          this.setState({
                            currentIndex: this.state.currentIndex - 2
                          })
                        }
                      >
                        {moment(
                          this.state.dates[this.state.currentIndex - 2]
                        ).format("ddd, MMM D")}
                      </Link>
                    </div>
                  ) : (
                    <div className="col invisible">No Date</div>
                  )}

                  {this.state.dates[this.state.currentIndex - 1] ? (
                    <div className="col">
                      <Link
                        to={`${this.props.match.url}/${
                          this.state.dates[this.state.currentIndex - 1]
                        }`}
                        className="lead hvr-underline-from-left"
                        onClick={() =>
                          this.setState({
                            currentIndex: this.state.currentIndex - 1
                          })
                        }
                      >
                        {moment(
                          this.state.dates[this.state.currentIndex - 1]
                        ).format("ddd, MMM D")}
                      </Link>
                    </div>
                  ) : (
                    <div className="col invisible">No Date</div>
                  )}

                  <div className="col">
                    <Link
                      to={`${this.props.match.url}/${
                        this.state.dates[this.state.currentIndex]
                      }`}
                      className="lead hvr-underline-from-left"
                      onClick={() =>
                        this.setState({ currentIndex: this.state.currentIndex })
                      }
                    >
                      {moment(this.state.dates[this.state.currentIndex]).format(
                        "ddd, MMM D"
                      )}
                    </Link>
                  </div>
                  {this.state.dates[this.state.currentIndex + 1] ? (
                    <div className="col">
                      <Link
                        to={`${this.props.match.url}/${
                          this.state.dates[this.state.currentIndex + 1]
                        }`}
                        className="lead hvr-underline-from-left"
                        onClick={() =>
                          this.setState({
                            currentIndex: this.state.currentIndex + 1
                          })
                        }
                      >
                        {moment(
                          this.state.dates[this.state.currentIndex + 1]
                        ).format("ddd, MMM D")}
                      </Link>
                    </div>
                  ) : (
                    <div className="col invisible">No Date</div>
                  )}

                  {this.state.dates[this.state.currentIndex + 2] ? (
                    <div className="col">
                      <Link
                        to={`${this.props.match.url}/${
                          this.state.dates[this.state.currentIndex + 2]
                        }`}
                        className="lead hvr-underline-from-left"
                        onClick={() =>
                          this.setState({
                            currentIndex: this.state.currentIndex + 2
                          })
                        }
                      >
                        {moment(
                          this.state.dates[this.state.currentIndex + 2]
                        ).format("ddd, MMM D")}
                      </Link>
                    </div>
                  ) : (
                    <div className="col invisible">No Date</div>
                  )}
                  {this.state.dates[this.state.currentIndex + 1] ? (
                    <Link
                      to={`${this.props.match.url}/${
                        this.state.dates[this.state.currentIndex + 1]
                      }`}
                      className="lead hvr-underline-from-left"
                      onClick={() =>
                        this.setState({
                          currentIndex: this.state.currentIndex + 1
                        })
                      }
                    >
                      <i className="icon ion-ios-arrow-forward" />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
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
