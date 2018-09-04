import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { FaAngleDown } from "react-icons/fa";
import "./Match.css";
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";

function expandIcon({ isActive }) {
  return (
    <FaAngleDown
      className="text-dark"
      width="1em"
      height="1em"
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
        } else if (response.data[0].status === "running") {
          status = "&#11044; Live";
        } else {
          status = "Not Started";
        }
        this.setState({
          matchId: response.data[0].id,
          date: response.data[0].begin_at.slice(0, 10),
          status: status,
          numOfGames: response.data[0].number_of_games,
          matchName: response.data[0].name,
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
          <span className="text-muted">
            <Moment format="ddd, MMM D">{this.state.date}</Moment>
          </span>
          <span className="mr-3 mt-0 float-right">{this.state.status}</span>
        </span>

        <div className="card-body">
          <div className="media">
            <img
              className="mr-3"
              src={this.state.teams[0] && this.state.teams[0].image}
              alt=""
              width="50px"
            />
            <div className="media-body">
              <h5 className="">
                {this.state.teams[0] && this.state.teams[0].name}
                <span className="float-right mt-2">
                  {this.state.teams[0] && this.state.teams[0].score}
                </span>
                <div>
                  <small>
                    {this.state.teams[0] && this.state.teams[0].status}
                  </small>
                </div>
              </h5>
            </div>
          </div>
          <div className="media mt-3">
            <img
              className="mr-3"
              src={this.state.teams[1] && this.state.teams[1].image}
              alt=""
              width="50px"
            />
            <div className="media-body">
              <h5 className="">
                {this.state.teams[1] && this.state.teams[1].name}
                <span className="float-right mt-2">
                  {this.state.teams[1] && this.state.teams[1].score}
                </span>
                <div>
                  <small>
                    {this.state.teams[1] && this.state.teams[1].status}
                  </small>
                </div>
              </h5>
            </div>
          </div>
          <Collapse
            accordion={this.state.accordion}
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            expandIcon={expandIcon}
            className="text-center bg-transparent border-0 text-dark"
          >
            <Panel key={this.state.matchId}>
              <div className="text-dark">
                <div>
                  {this.state.league} {this.state.tournamentName}
                </div>
                <div>{this.state.matchName}</div>
                <div>
                  <Moment format="ddd, MMM D">{this.state.date}</Moment>
                </div>
                <div>Best of {this.state.numOfGames} series</div>
                <div>Patch: {this.state.patch}</div>
                {/* <div className="mt-3">Game 1: Team Liquid Wins</div> */}
              </div>
            </Panel>
          </Collapse>
        </div>
        {/* {this.state.teams[0] && this.state.teams[0].name} (
        {this.state.teams[0] && this.state.teams[0].status}) vs.{" "}
        {this.state.teams[1] && this.state.teams[1].name} (
        {this.state.teams[1] && this.state.teams[1].status}) <Moment format="ddd, MMM D">{this.props.date}</Moment> */}

        {/* <div className="col-11 col-sm-9 col-md-6 col-lg-4">
          <div className="card border-0 mt-4">
            <span className="ml-3 mt-2">
              <span className="text-muted">Sat, Jun 16</span>
              <span className="mr-3 mt-0 float-right text-danger">
                &#11044; Live
              </span>
            </span>

            <div className="card-body">
              <div className="media">
                <img
                  className="mr-3"
                  src="https://cdn.pandascore.co/images/team/image/1537/300px-100_Thieveslogo_square.png"
                  alt=""
                  width="50px"
                />
                <div className="media-body">
                  <h5 className="">
                    100 Thieves <span className="float-right mt-2">1</span>
                    <div>
                      <small className="text-primary invisible">Victory</small>
                    </div>
                  </h5>
                </div>
              </div>
              <div className="media mt-3">
                <img
                  className="mr-3"
                  src="https://cdn.pandascore.co/images/team/image/390/team-liquid-3g983dra.png"
                  alt=""
                  width="50px"
                />
                <div className="media-body">
                  <h5 className="">
                    Team Liquid <span className="float-right mt-2">1</span>
                    <div>
                      <small className="text-danger invisible">Defeat</small>
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Match;
