import React, { Component } from "react";
import Match from "../Match/Match";
import axios from "axios";

class Matches extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { matches: [] };
  }

  componentDidMount() {
    this.getMatches(this.props.start, this.props.end);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.start !== prevProps.start &&
      this.props.end !== prevProps.end
    ) {
      this.getMatches(this.props.start, this.props.end);
    }
  }

  getMatches = (start, end) => {
    axios
      .get(`/api/nalcs/regular/matches/:${start}/:${end}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          matches: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
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
