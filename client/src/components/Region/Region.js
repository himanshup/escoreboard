import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import MatchesNav from "../MatchesNav/MatchesNav";
import axios from "axios";

class Region extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: [],
      dropdownOpen: false,
      activeTournament: ""
    };
  }

  componentDidMount() {
    // get series by id and then store all tournaments, then generate links/routes based on tournament
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

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <div>
        <Route
          path={`${this.props.match.path}`}
          render={() => {
            return (
              <div className="container-fluid mt-3">
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={() => this.toggle()}
                >
                  <DropdownToggle className="btn btn-lg btn-dark " caret>
                    {this.state.activeTournament
                      ? this.state.activeTournament
                      : "Select Tournament"}
                  </DropdownToggle>
                  <DropdownMenu className="shadow-sm border-0 rounded-0">
                    {this.state.tournaments.map(tournament => (
                      <Link
                        key={tournament.id}
                        to={`${
                          this.props.match.url
                        }/${tournament.name.toLowerCase()}`}
                        className="dropdown-item"
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
                    ))}
                  </DropdownMenu>
                </Dropdown>
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
                return <MatchesNav tournamentId={tournament.id} {...props} />;
              }}
            />
          ))}
      </div>
    );
  }
}

export default Region;
