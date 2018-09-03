import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import "./Match.css";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  // componentDidMount() {
  //   axios
  //     .get(`/api/nalcs/match/${this.props.matchId}`)
  //     .then(response => {
  //       // console.log(response.data[0]);
  //       for (const team of response.data[0].opponents) {
  //         for (const result of response.data[0].results) {
  //           if (team.opponent.id === result.team_id) {
  //             const status =
  //               response.data[0].winner.id === team.opponent.id
  //                 ? "Victory"
  //                 : "Defeat";
  //             this.setState({
  //               teams: this.state.teams.concat([
  //                 {
  //                   id: team.opponent.id,
  //                   name: team.opponent.acronym,
  //                   image: team.opponent.image_url,
  //                   score: result.score,
  //                   status: status
  //                 }
  //               ])
  //             });
  //           }
  //         }
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error.response);
  //     });
  // }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <div className="card border-0 mt-4">
            <span className="ml-3 mt-1">
              Sat, Jun 16
              <span className="mr-3 mt-0 float-right">Final</span>
            </span>

            <div className="card-body">
              <h5 className="card-title mt-2 float-right">1</h5>
              <div />
              <h5 id="team1" className="card-title">
                <img
                  src="https://cdn.pandascore.co/images/team/image/1537/300px-100_Thieveslogo_square.png"
                  alt=""
                  width="50px"
                  className="mr-3"
                />
                <span className="team1">100 Thieves</span>
              </h5>
              <h5 className="card-title mt-2 float-right">0</h5>
              <div />
              <h5 id="team2" className="card-title">
                <img
                  src="https://cdn.pandascore.co/images/team/image/390/team-liquid-3g983dra.png"
                  alt=""
                  width="50px"
                  className="mr-3"
                />
                <span className="team2">Team Liquid</span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <div className="card border-0 mt-4">
            <span className="ml-3 mt-1">
              Sat, Jun 16
              <span className="mr-3 mt-0 float-right">Final</span>
            </span>

            <div className="card-body">
              <h5 className="card-title mt-2 float-right">1</h5>
              <div />
              <h5 id="team1" className="card-title">
                <img
                  src="https://cdn.pandascore.co/images/team/image/1537/300px-100_Thieveslogo_square.png"
                  alt=""
                  width="50px"
                  className="mr-3"
                />
                100 Thieves
              </h5>
              <h5 className="card-title mt-2 float-right">0</h5>
              <div />
              <h5 id="team2" className="card-title">
                <img
                  src="https://cdn.pandascore.co/images/team/image/390/team-liquid-3g983dra.png"
                  alt=""
                  width="50px"
                  className="mr-3"
                />
                Team Liquid
              </h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <div className="card border-0 mt-4">
            <span className="ml-3 mt-1">
              Sat, Jun 16
              <span className="mr-3 mt-0 float-right">Final</span>
            </span>

            <div className="card-body">
              <h5 className="card-title mt-2 float-right">1</h5>
              <div />
              <h5 id="team1" className="card-title">
                <img
                  src="https://cdn.pandascore.co/images/team/image/1537/300px-100_Thieveslogo_square.png"
                  alt=""
                  width="50px"
                  className="mr-3"
                />
                100 Thieves
              </h5>
              <h5 className="card-title mt-2 float-right">0</h5>
              <div />
              <h5 id="team2" className="card-title">
                <img
                  src="https://cdn.pandascore.co/images/team/image/390/team-liquid-3g983dra.png"
                  alt=""
                  width="50px"
                  className="mr-3"
                />
                Team Liquid
              </h5>
            </div>
          </div>
        </div>

        {/* {this.state.teams[0] && this.state.teams[0].name} (
        {this.state.teams[0] && this.state.teams[0].status}) vs.{" "}
        {this.state.teams[1] && this.state.teams[1].name} (
        {this.state.teams[1] && this.state.teams[1].status}) <Moment format="ddd, MMM D">{this.props.date}</Moment> */}
      </div>
    );
  }
}

export default Match;
