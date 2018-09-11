import React, { Component } from "react";
import Collapse, { Panel } from "rc-collapse";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Ionicon from "react-ionicons";
import moment from "moment";
import axios from "axios";
import "./Match.css";
import "rc-collapse/assets/index.css";

function expandIcon({ isActive }) {
  return (
    <div className="text-center">
      <Ionicon
        icon="ios-arrow-down"
        className="text-muted"
        width="1em"
        height="1em"
        fontSize="17px"
        style={{
          marginTop: "178px",
          verticalAlign: "-.125em",
          transition: "transform .2s",
          transform: `rotate(${isActive ? 180 : 0}deg)`
        }}
      />
    </div>
  );
}

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      matchId: "",
      date: "",
      longDate: "",
      status: "",
      numOfGames: "",
      matchName: "",
      league: "",
      patch: "",
      tournamentName: "",
      games: [],
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
    this.getMatchInfo();
  }

  getMatchInfo = () => {
    let game = this.props.match.path.includes("lol") ? "lol" : "ow";
    // use match id passed in props to find match by id and store information
    axios
      .get(`/api/${game}/match/${this.props.matchId}`)
      .then(response => {
        const match = response.data[0];
        let status;
        if (match.status === "finished") {
          status = "Final";
        } else if (match.status === "not_started") {
          status = "Not Started";
        } else {
          status = "Live";
        }
        // formats dates in a clean readable format
        const date = moment(match.begin_at.slice(0, 10)).format("ddd, MMM D");
        const date2 = moment(match.begin_at.slice(0, 10)).format(
          "MMMM D, YYYY"
        );
        // simply removes all dashes in match names for cleaner output
        const matchName = match.name.includes("-")
          ? match.name.replace(/-/g, " ")
          : match.name;
        // sort games by position
        const games = match.games.sort((a, b) => {
          return a.position - b.position;
        });
        // loop through games and teams to find winner of each game
        for (const game of games) {
          if (game.winner.id === null && game.begin_at !== null) {
            this.setState({
              games: this.state.games.concat([
                {
                  id: game.id,
                  position: game.position,
                  winner: false
                }
              ])
            });
          } else {
            for (const team of match.opponents) {
              if (team.opponent.id === game.winner.id) {
                this.setState({
                  games: this.state.games.concat([
                    {
                      id: game.id,
                      position: game.position,
                      winner: team.opponent.name
                    }
                  ])
                });
              }
            }
          }
        }
        this.setState({
          matchId: match.id,
          date: date,
          longDate: date2,
          status: status,
          numOfGames: match.number_of_games,
          matchName: matchName,
          league: match.league.name,
          patch: match.videogame_version && match.videogame_version.name,
          tournamentName: match.tournament.name
        });
        // if else statement for when there is no information on a match yet
        // checks if length is one for when there is only one team in the opponents array
        if (match.opponents.length === 0) {
          for (var i = 0; i < 2; i++) {
            this.setDummyData(i);
          }
        } else if (match.opponents.length === 1) {
          this.setTeams(match);
          this.setDummyData(0);
        } else {
          this.setTeams(match);
        }
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

  // set dummy data for when the opponent hasn't been determined yet
  setDummyData = id => {
    this.setState({
      teams: this.state.teams.concat([
        {
          id: id,
          name: "TBD",
          image:
            "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/lolesports_feapp/en_US/82d3718bcef9317f420e4518a7cb7ade57ed9116/assets/img/tbd.png",
          score: "0",
          status: false
        }
      ])
    });
  };

  // loop through teams and scores to see which scores belond to which teams
  // also checks who the winner is
  setTeams = match => {
    for (const team of match.opponents) {
      for (const result of match.results) {
        if (team.opponent.id === result.team_id) {
          let gameStatus;
          if (match.winner !== null && match.winner.id === team.opponent.id) {
            gameStatus = "Victory";
          } else if (match.winner === null) {
            gameStatus = "";
          } else {
            gameStatus = "Defeat";
          }
          this.setState({
            teams: this.state.teams.concat([
              {
                id: team.opponent.id,
                name: team.opponent.acronym,
                image: team.opponent.image_url,
                score: result.score,
                status: gameStatus
              }
            ])
          });
        }
      }
    }
  };

  render() {
    const teams = this.state.teams.map(team => (
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
          <h5>
            {team.name}
            <span className="float-right mt-1 badge badge-light p-2">
              {team.score}
            </span>
            <div>
              {team.status ? (
                <span className="gameStatus text-muted">{team.status}</span>
              ) : (
                <span className="gameStatus text-muted invisible">TBD</span>
              )}
            </div>
          </h5>
        </div>
      </div>
    ));

    return (
      <div>
        {this.state.loading === true ? (
          ""
        ) : (
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={600}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div className="card border-0 mt-4 hvr-float">
              <span className="ml-3 mt-2">
                <span className="text-muted">{this.state.date} </span>

                <span
                  className={`mr-3 mt-0 float-right ${
                    this.state.status === "Live" ? "text-danger" : ""
                  }`}
                >
                  {this.state.status === "Live" && (
                    <span className="pulse mr-1" />
                  )}{" "}
                  {this.state.status}
                </span>
              </span>

              <div className="card-body">
                <ReactCSSTransitionGroup
                  transitionName="matches"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                >
                  {teams}
                </ReactCSSTransitionGroup>
                <Collapse
                  accordion={this.state.accordion}
                  onChange={this.onChange}
                  activeKey={this.state.activeKey}
                  expandIcon={expandIcon}
                  className="align-self-center bg-transparent border-0"
                >
                  <Panel key={this.state.matchId}>
                    <div className="text-dark text-center">
                      <h5 className="card-title">
                        {this.state.league} {this.state.tournamentName}
                      </h5>
                      <div>{this.state.matchName}</div>
                      <div>{this.state.longDate}</div>
                      <div>Best of {this.state.numOfGames} series</div>
                      {this.state.patch && <div>Patch: {this.state.patch}</div>}
                      <div className="mt-3">
                        {this.state.games.map(game => (
                          <div key={game.id}>
                            Game {game.position}:{" "}
                            {game.winner
                              ? `${game.winner} wins`
                              : `In Progress`}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        )}
      </div>
    );
  }
}

export default Match;
