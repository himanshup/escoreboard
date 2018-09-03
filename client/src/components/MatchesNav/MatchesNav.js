import React, { Component } from "react";
import MatchLinks from "../MatchesLinks/MatchLinks";
import MatchRoutes from "../MatchRoutes/MatchRoutes";

class MatchesNav extends Component {
  render() {
    return (
      <div>
        <MatchLinks />
        <MatchRoutes />
      </div>
    );
  }
}

export default MatchesNav;
