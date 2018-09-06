import React, { Component } from "react";
import MatchLinks from "../MatchesLinks/MatchLinks";
import MatchRoutes from "../MatchRoutes/MatchRoutes";
import "./MatchesNav.css";

class MatchesNav extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid maxWidth">
          <MatchLinks />
        </div>
        <div className="container mb-5">
          <MatchRoutes />
        </div>
      </div>
    );
  }
}

export default MatchesNav;
