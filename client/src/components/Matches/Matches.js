import React, { Component } from "react";
import Match from "../Match/Match";
import axios from "axios";
import Loading from "../Loading/Loading.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Matches.css";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
    this.cancelTokenSource = axios.CancelToken.source();
  }

  componentDidMount() {
    this.getMatches(this.props.date);
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.getMatches(this.props.date);
    }
  }

  getMatches = async date => {
    let game = this.props.match.path.includes("lol") ? "lol" : "ow";
    // use tournament id and date passed in props to find all matches on this date
    // store matches and then pass to Match component to generate cards
    try {
      const matches = await axios.get(
        `/api/${game}/matches/${this.props.id}/${date}`,
        {
          cancelToken: this.cancelTokenSource.token
        }
      );
      for (const match of matches.data) {
        this.setState({
          matches: this.state.matches.concat([match])
        });
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        // ignore
      } else {
        throw err;
      }
    } finally {
      this.cancelTokenSource = null;
    }
  };

  componentWillUnmount() {
    this.cancelTokenSource && this.cancelTokenSource.cancel();
  }

  render() {
    return (
      <div className="row d-flex justify-content-center">
        {this.state.matches.map(match => (
          <div className="col-11 col-sm-9 col-md-6 col-lg-4" key={match.id}>
            <Match matchId={match.id} {...this.props} />
          </div>
        ))}
      </div>
    );
  }
}

export default Matches;
