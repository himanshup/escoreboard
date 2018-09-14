import React from "react";
import { Route } from "react-router-dom";
import Series from "../Series/Series.js";
import LeagueHome from "../LeagueHome/LeagueHome.js";
import LeagueLinks from "../LeagueLinks/LeagueLinks.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const LeagueRoutes = ({ match }) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Route
        exact
        path={match.path}
        render={props => {
          return (
            <div>
              <LeagueHome {...props} />
              <LeagueLinks {...props} />
            </div>
          );
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
    </ReactCSSTransitionGroup>
  );
};

export default LeagueRoutes;
