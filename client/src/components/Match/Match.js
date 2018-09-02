import React, { Component } from "react";
import axios from "axios";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  componentDidMount() {
    axios
      .get(`/api/match/${this.props.matchId}`)
      .then(response => {
        // console.log(response.data[0]);
        for (const team of response.data[0].opponents) {
          for (const result of response.data[0].results) {
            if (team.opponent.id === result.team_id) {
              const wonState =
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
                    won: wonState
                  }
                ])
              });
            }
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.teams[0] && this.state.teams[0].name} (
        {this.state.teams[0] && this.state.teams[0].won}) vs.{" "}
        {this.state.teams[1] && this.state.teams[1].name} (
        {this.state.teams[1] && this.state.teams[1].won}) {this.props.date}
        {/* {this.state.teams.map((team, index) => (
          <div key={team.id}>
            {team.name} ({team.score})
          </div>
        ))} */}
      </div>
    );
  }
}

export default Match;
