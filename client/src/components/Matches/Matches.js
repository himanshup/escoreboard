import React, { Component } from "react";
import Match from "../Match/Match";
import axios from "axios";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
  }

  // componentDidMount() {
  //   this.getMatches(this.props.start, this.props.end);
  // }

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.start !== prevProps.start &&
  //     this.props.end !== prevProps.end
  //   ) {
  //     this.getMatches(this.props.start, this.props.end);
  //   }
  // }

  // getMatches = (start, end) => {
  //   axios
  //     .get(`/api/nalcs/regular/matches/:${start}/:${end}`)
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({
  //         matches: response.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error.response);
  //     });
  // };

  render() {
    return (
      <div>
        {/* <h1>matches</h1> */}
        <Match />
        {/* {this.state.matches.map(match => (
          <Match
            key={match.id}
            matchId={match.id}
            date={match.begin_at.slice(0, 10)}
            status={match.status}
          />
        ))} */}
      </div>
    );
  }
}

export default Matches;
