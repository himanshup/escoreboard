import React, { Component } from "react";
import Match from "../Match/Match";
import axios from "axios";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
  }

  componentDidMount() {
    this.getMatches(this.props.date);
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.getMatches(this.props.date);
    }
  }

  getMatches = date => {
    // use tournament id and date passed in props to find all matches on this date
    // store matches and then pass to Match component to generate cards
    axios
      .get(`/api/matches/${this.props.id}/${date}`)
      .then(matches => {
        for (const match of matches.data) {
          this.setState({
            matches: this.state.matches.concat([match])
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center">
          {this.state.matches.map(match => (
            <div className="col-11 col-sm-9 col-md-6 col-lg-4" key={match.id}>
              <Match matchId={match.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Matches;
