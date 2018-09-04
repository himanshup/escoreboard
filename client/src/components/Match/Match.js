import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { FaAngleDown } from "react-icons/fa";
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
      <div className="row d-flex justify-content-center">
        <div className="col-11 col-sm-9 col-md-6 col-lg-4">
          <div className="card border-0 mt-4">
            <span className="ml-3 mt-2">
              <span className="text-muted">Sat, Jun 16</span>
              <span className="mr-3 mt-0 float-right">Final</span>
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
                      <small className="text-primary">Victory</small>
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
                    Team Liquid <span className="float-right mt-2">0</span>
                    <div>
                      <small className="text-danger">Defeat</small>
                    </div>
                  </h5>
                </div>
              </div>
              <div className="text-center stuff">
                <Button className="colBtn bg-transparent p-0 border-0" id="toggler">
                  <FaAngleDown className="text-dark" />
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt magni, voluptas debitis similique porro a molestias
                  consequuntur earum odio officiis natus, amet hic, iste sed
                  dignissimos esse fuga! Minus, alias.
                </UncontrolledCollapse>
              </div>
            </div>
          </div>
        </div>

        <div className="col-11 col-sm-9 col-md-6 col-lg-4">
          <div className="card border-0 mt-4">
            <span className="ml-3 mt-2">
              <span className="text-muted">Sat, Jun 16</span>
              <span className="mr-3 mt-0 float-right">Final</span>
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
                      <small className="text-primary">Victory</small>
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
                    Team Liquid <span className="float-right mt-2">0</span>
                    <div>
                      <small className="text-danger">Defeat</small>
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-11 col-sm-9 col-md-6 col-lg-4">
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
