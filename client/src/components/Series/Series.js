import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import DatesNav from "../DatesNav/DatesNav";
import Loading from "../Loading/Loading.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Series.css";
import axios from "axios";
import moment from "moment";

class Series extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tournaments: [],
      dropdownOpen: false,
      name: "",
      logo: "",
      year: "",
      badgeColor: "",
      startDate: "",
      endDate: ""
    };
  }

  componentDidMount() {
    this.getSeries();
  }

  getSeries = () => {
    let game = this.props.match.path.includes("lol") ? "lol" : "ow";
    // get series by id and then store all tournaments, then generate links/routes based on tournament
    axios
      .get(`/api/${game}/series/${this.props.seriesId}`)
      .then(response => {
        const series = response.data[0];
        this.setState({
          name: series.league.name,
          logo: series.league.image_url,
          year: series.year,
          badgeColor:
            series.videogame.id === 1 ? "badge-primary" : "badge-warning",
          tournaments: series.tournaments,
          startDate: moment(series.begin_at.slice(0, 10)).format("MM/DD/YYYY"),
          endDate: series.end_at
            ? moment(series.end_at.slice(0, 10)).format("MM/DD/YYYY")
            : ""
        });
      })
      .then(response => {
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={600}
              transitionEnter={false}
              transitionLeave={false}
            >
              <Route
                exact
                path={`${this.props.match.path}`}
                render={() => {
                  return (
                    <div className="container mt-3">
                      <div className="row ">
                        <div className="col" />
                        <div className="col-12 col-md-10 col-lg-8">
                          <div className="card border-0">
                            <div className="card-header">
                              <div className="media">
                                <img
                                  src={this.state.logo}
                                  alt=""
                                  className="mr-3"
                                  width="100"
                                />
                                <div className="media-body align-self-center">
                                  <h4>{this.state.name}</h4>
                                  <span
                                    className={`badge ${
                                      this.state.badgeColor
                                    } shadow-sm`}
                                  >
                                    {this.state.year}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <ul className="list-group list-group-flush">
                              {this.state.tournaments.map(tournament => (
                                <Link
                                  key={tournament.id}
                                  to={`${
                                    this.props.match.url
                                  }/${tournament.name.toLowerCase()}`}
                                  className="list-group-item list-group-item-action"
                                >
                                  {tournament.name}{" "}
                                  <small className="text-muted float-right">
                                    {moment(
                                      tournament.begin_at.slice(0, 10)
                                    ).format("MMM D")}{" "}
                                    -{" "}
                                    {tournament.end_at
                                      ? moment(
                                          tournament.end_at.slice(0, 10)
                                        ).format("MMM D")
                                      : ""}
                                  </small>
                                </Link>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col" />
                      </div>
                    </div>
                  );
                }}
              />
            </ReactCSSTransitionGroup>
            {this.state.tournaments.map(tournament => (
              <Route
                key={tournament.id}
                path={`${
                  this.props.match.path
                }/${tournament.name.toLowerCase()}`}
                render={props => {
                  return <DatesNav tournamentId={tournament.id} {...props} />;
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Series;
