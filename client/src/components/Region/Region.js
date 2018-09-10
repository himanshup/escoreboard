import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import DatesNav from "../DatesNav/DatesNav";
import axios from "axios";

class Region extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournaments: [],
      dropdownOpen: false,
      name: "",
      logo: "",
      seeason: ""
    };
  }

  componentDidMount() {
    this.getSeries();
  }

  getSeries = () => {
    // get series by id and then store all tournaments, then generate links/routes based on tournament
    axios
      .get(`/api/series/${this.props.seriesId}`)
      .then(series => {
        console.log(series.data[0]);
        this.setState({
          name: series.data[0].league.name,
          logo: series.data[0].league.image_url,
          season: series.data[0].full_name,
          tournaments: series.data[0].tournaments
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <div>
        <Route
          exact
          path={`${this.props.match.path}`}
          render={() => {
            return (
              <div className="container mt-3 text-center">
                <h1>{this.state.name}</h1>
                <p className="lead">{this.state.season}</p>
                <img src={this.state.logo} alt="" width="150" />
                <div className="row d-flex justify-content-center">
                  {this.state.tournaments.map(tournament => (
                    <div
                      key={tournament.id}
                      className="col-12 col-md-4 col-lg-3"
                    >
                      <Link
                        to={`${
                          this.props.match.url
                        }/${tournament.name.toLowerCase()}`}
                        className="btn btn-lg btn-outline-dark mt-4"
                        onClick={() =>
                          this.setState({
                            activeTournament: `${tournament.name}`
                          })
                        }
                      >
                        <span className="text-capitalize">
                          {tournament.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          }}
        />

        {this.state.activeTournament &&
          this.state.tournaments.map(tournament => (
            <Route
              key={tournament.id}
              path={`${this.props.match.path}/${tournament.name.toLowerCase()}`}
              render={props => {
                return <DatesNav tournamentId={tournament.id} {...props} />;
              }}
            />
          ))}
      </div>
    );
  }
}

export default Region;
