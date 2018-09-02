import React, { Component } from "react";
import Match from "../Match/Match";
import axios from "axios";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = { start: props.start, end: props.end, matches: [] };
  }

  componentDidMount() {
    // console.log(this.props.start);
    // console.log(this.props.end);
    this.getMatches(this.props.start, this.props.end);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    this.getMatches(nextProps.start, nextProps.end);
  }

  getMatches = (start, end) => {
    axios
      .get(`/api/nalcs/regular/matches/:${start}/:${end}`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          matches: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>matches</h1>
        {this.state.matches.map(match => (
          <Match
            key={match.id}
            matchId={match.id}
            date={match.begin_at.slice(0, 10)}
            status={match.status}
          />
        ))}
      </div>
    );
  }
}

export default Matches;
