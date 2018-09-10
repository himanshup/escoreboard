import React from "react";
import { Route } from "react-router-dom";
import Series from "../Series/Series.js";
import LeagueHome from "../LeagueHome/LeagueHome.js";
import LeagueLinks from "../LeagueLinks/LeagueLinks.js";

const LeagueRoutes = ({ match }) => {
  return (
    <div>
      <Route
        exact
        path={match.path}
        render={props => {
          return <LeagueHome {...props} />;
        }}
      />
      <Route
        exact
        path={match.path}
        render={props => {
          return <LeagueLinks {...props} />;
        }}
      />

      <Route
        path={`${match.path}/na`}
        render={props => {
          return <Series seriesId="1482" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/eu`}
        render={props => {
          return <Series seriesId="1509" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/lck`}
        render={props => {
          return <Series seriesId="1481" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/lpl`}
        render={props => {
          return <Series seriesId="1513" {...props} />;
        }}
      />
      <Route
        path={`${match.path}/lms`}
        render={props => {
          return <Series seriesId="1520" {...props} />;
        }}
      />
    </div>
  );
};

export default LeagueRoutes;
