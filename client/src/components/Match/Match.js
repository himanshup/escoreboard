import React, { Component } from "react";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa";
import "./Match.css";
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import moment from "moment";

function expandIcon({ isActive }) {
  return (
    <FaAngleDown
      className="text-dark"
      width="30em"
      height="10em"
      style={{
        verticalAlign: "-.125em",
        transition: "transform .2s",
        transform: `rotate(${isActive ? 180 : 0}deg)`
      }}
    />
  );
}

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchId: "",
      date: "",
      status: "",
      numOfGames: "",
      matchName: "",
      league: "",
      patch: "",
      tournamentName: "",
      teams: [],
      accordion: false,
      activeKey: []
    };
  }

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  componentDidMount() {
    axios
      .get(`/api/nalcs/match/${this.props.matchId}`)
      .then(response => {
        // console.log(response.data[0]);
        var status;
        if (response.data[0].status === "finished") {
          status = "Final";
        } else if (response.data[0].status === "not_started") {
          status = "Not Started";
        }

        const date = moment(response.data[0].begin_at.slice(0, 10)).format(
          "ddd, MMM D"
        );
        const date2 = moment(response.data[0].begin_at.slice(0, 10)).format(
          "MMMM D, YYYY"
        );
        const matchName = response.data[0].name.includes("-")
          ? response.data[0].name.replace(/-/g, " ")
          : response.data[0].name;
        this.setState({
          matchId: response.data[0].id,
          date: date,
          longDate: date2,
          status: status,
          numOfGames: response.data[0].number_of_games,
          matchName: matchName,
          league: response.data[0].league.name,
          patch: response.data[0].videogame_version.name,
          tournamentName: response.data[0].tournament.name
        });
        for (const team of response.data[0].opponents) {
          for (const result of response.data[0].results) {
            if (team.opponent.id === result.team_id) {
              const status =
                response.data[0].winner.id === team.opponent.id
                  ? "Victory"
                  : "Defeat";
              this.setState({
                teams: this.state.teams.concat([
                  {
                    id: team.opponent.id,
                    name: team.opponent.acronym,
                    image: team.opponent.image_url,
                    score: result.score,
                    status: status
                  }
                ])
              });
            }
          }
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div className="card border-0 mt-4">
        <span className="ml-3 mt-2">
          <span className="text-muted">{this.state.date}</span>
          <span className="mr-3 mt-0 float-right">
            {this.state.status === "Final" ||
            this.state.status === "Not Started" ? (
              this.state.status
            ) : (
              <span className="text-danger">&#11044; Live</span>
            )}
          </span>
        </span>

        <div className="card-body">
          {this.state.teams.map(team => (
            <div key={team.id} className="media">
              <img
                className="mr-3"
                src={
                  team.image
                    ? team.image
                    : "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/lolesports_feapp/en_US/82d3718bcef9317f420e4518a7cb7ade57ed9116/assets/img/tbd.png"
                }
                alt=""
                width="50px"
              />
              <div className="media-body">
                <h5 className="">
                  {team.name}
                  <span className="float-right mt-2">{team.score}</span>
                  <div>
                    {team.status ? (
                      <small className="text-muted">{team.status}</small>
                    ) : (
                      <small className="text-muted invisible">
                        {team.status}
                      </small>
                    )}
                  </div>
                </h5>
              </div>
            </div>
          ))}
          <Collapse
            accordion={this.state.accordion}
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            expandIcon={expandIcon}
            className="text-center bg-transparent border-0"
          >
            <Panel key={this.state.matchId}>
              <div className="text-dark">
                <div>
                  {this.state.league} {this.state.tournamentName}
                </div>
                <div>{this.state.matchName}</div>
                <div>{this.state.longDate}</div>
                <div>Best of {this.state.numOfGames} series</div>
                <div>Patch: {this.state.patch}</div>
                {/* <div className="mt-3">Game 1: Team Liquid Wins</div> */}
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Match;
