import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Matches from "../Matches/Matches";
import "./DatesNav.css";
import axios from "axios";
import moment from "moment";
import Loading from "../Loading/Loading";

class DatesNav extends Component {
  constructor(props) {
    super(props);
    this.state = { dates: [], loading: true };
    this.cancelTokenSource = axios.CancelToken.source();
  }

  componentDidMount() {
    this.getDates(this.props.tournamentId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.tournamentId !== prevProps.tournamentId) {
      this.getDates(this.props.tournamentId);
    }
  }

  getDates = async date => {
    let game = this.props.match.path.includes("lol") ? "lol" : "ow";

    try {
      const tournament = await axios.get(`/api/${game}/tournament/${date}`);
      const matches = tournament.data[0].matches;
      const dates = [];
      for (const match of matches) {
        if (match.begin_at !== null) {
          dates.push(match.begin_at.slice(0, 10));
        }
      }
      const newDatesArray = Array.from(new Set(dates));

      this.setState({
        dates: newDatesArray
      });

      // determines where the dates navbar should start
      for (const match of matches) {
        if (match.status === "running") {
          for (const [index, date] of newDatesArray.entries()) {
            if (date === match.begin_at.slice(0, 10)) {
              this.setState({
                currentIndex: index
              });
            }
          }
          break;
        } else if (match.status === "not_started") {
          for (const [index, date] of newDatesArray.entries()) {
            if (date === match.begin_at.slice(0, 10)) {
              this.setState({
                currentIndex: index
              });
            }
          }
          break;
        } else if (tournament.data[0].winner_id !== null) {
          this.setState({
            currentIndex: newDatesArray.length - 1
          });
          break;
        } else if (
          tournament.data[0].winner_id === null &&
          matches[matches.length - 1].status === "finished"
        ) {
          this.setState({
            currentIndex: newDatesArray.length - 1
          });
          break;
        }
      }
      this.setState({
        loading: false
      });
    } catch (err) {
      if (axios.isCancel(err)) {
        // ignore
      } else {
        throw err;
      }
    } finally {
      this.cancelTokenSource = null;
    }
  };

  getCurrentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }
    return (today = `${yyyy}-${mm}-${dd}`);
  };

  componentWillUnmount() {
    this.cancelTokenSource && this.cancelTokenSource.cancel();
  }

  render() {
    const today = this.getCurrentDate();
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            {this.state.dates < 1 ? (
              <div className="container text-center mt-4">
                <h1>No Matches</h1>
              </div>
            ) : (
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
                            className="lead menuLinks mt-1"
                            onClick={() =>
                              this.setState({
                                currentIndex: this.state.currentIndex - 1
                              })
                            }
                          >
                            <i className="icon ion-ios-arrow-back p-3" />
                          </Link>
                        ) : (
                          <a href="/" className="invisible lead menuLinks mt-1">
                            <i className="icon ion-ios-arrow-back p-3" />
                          </a>
                        )}
                        {this.state.dates[this.state.currentIndex - 2] ? (
                          <div className="col d-none d-lg-block">
                            <Link
                              to={`${this.props.match.url}/${
                                this.state.dates[this.state.currentIndex - 2]
                              }`}
                              className="lead hvr-underline-from-center menuLinks"
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
                          <div className="col invisible d-none d-lg-block">
                            No Date
                          </div>
                        )}

                        {this.state.dates[this.state.currentIndex - 1] ? (
                          <div className="col d-none d-sm-block">
                            <Link
                              to={`${this.props.match.url}/${
                                this.state.dates[this.state.currentIndex - 1]
                              }`}
                              className="lead hvr-underline-from-center menuLinks"
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
                          <div className="col invisible d-none d-sm-block">
                            No Date
                          </div>
                        )}

                        <div className="col">
                          <Link
                            to={`${this.props.match.url}/${
                              this.state.dates[this.state.currentIndex]
                            }`}
                            className="lead activeLink"
                          >
                            {this.state.dates[this.state.currentIndex] === today
                              ? `Today, ${moment(
                                  this.state.dates[this.state.currentIndex]
                                ).format("MMM D")}`
                              : moment(
                                  this.state.dates[this.state.currentIndex]
                                ).format("ddd, MMM D")}
                          </Link>
                        </div>
                        {this.state.dates[this.state.currentIndex + 1] ? (
                          <div className="col d-none d-sm-block">
                            <Link
                              to={`${this.props.match.url}/${
                                this.state.dates[this.state.currentIndex + 1]
                              }`}
                              className="lead hvr-underline-from-center menuLinks"
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
                          <div className="col invisible d-none d-sm-block">
                            No Date
                          </div>
                        )}

                        {this.state.dates[this.state.currentIndex + 2] ? (
                          <div className="col d-none d-lg-block">
                            <Link
                              to={`${this.props.match.url}/${
                                this.state.dates[this.state.currentIndex + 2]
                              }`}
                              className="lead hvr-underline-from-center menuLinks"
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
                          <div className="col invisible d-none d-lg-block">
                            No Date
                          </div>
                        )}
                        {this.state.dates[this.state.currentIndex + 1] ? (
                          <Link
                            to={`${this.props.match.url}/${
                              this.state.dates[this.state.currentIndex + 1]
                            }`}
                            className="lead menuLinks mt-1"
                            onClick={() =>
                              this.setState({
                                currentIndex: this.state.currentIndex + 1
                              })
                            }
                          >
                            <i className="icon ion-ios-arrow-forward p-3" />
                          </Link>
                        ) : (
                          <a href="/" className="invisible lead menuLinks mt-1">
                            <i className="icon ion-ios-arrow-forward p-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mb-5">
                  {this.state.currentIndex !== undefined && (
                    <Route
                      exact
                      path={`${this.props.match.path}`}
                      render={props => {
                        return (
                          <Matches
                            date={this.state.dates[this.state.currentIndex]}
                            id={this.props.tournamentId}
                            {...props}
                          />
                        );
                      }}
                    />
                  )}

                  {this.state.dates.map(date => (
                    <Route
                      key={date}
                      path={`${this.props.match.path}/${date}`}
                      render={props => {
                        return (
                          <Matches
                            date={date}
                            id={this.props.tournamentId}
                            {...props}
                          />
                        );
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default DatesNav;
