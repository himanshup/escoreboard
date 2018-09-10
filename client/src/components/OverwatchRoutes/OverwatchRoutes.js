import React from "react";
import { Route } from "react-router-dom";
import Series from "../Series/Series.js";
import OverwatchHome from "../OverwatchHome/OverwatchHome.js";
import OverwatchLinks from "../OverwatchLinks/OverwatchLinks.js";

const OverwatchRoutes = ({ match }) => {
  return (
    <div>
      <Route
        exact
        path={match.path}
        render={props => {
          return <OverwatchHome {...props} />;
        }}
      />
      <Route
        exact
        path={match.path}
        render={props => {
          return <OverwatchLinks {...props} />;
        }}
      />

      <Route
        path={`${match.path}/owl`}
        render={props => {
          return <Series seriesId="1500" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/wc`}
        render={props => {
          return <Series seriesId="1537" {...props} />;
        }}
      />
    </div>
  );
};

export default OverwatchRoutes;
