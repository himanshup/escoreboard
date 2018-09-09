import React from "react";
import { Route } from "react-router-dom";
import Region from "../Region/Region";
import Home from "../Home/Home";

const RegionRoutes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route
        path="/na"
        render={props => {
          return <Region seriesId="1482" {...props} />;
        }}
      />
      <Route
        path="/eu"
        render={props => {
          return <Region seriesId="1509" {...props} />;
        }}
      />
      <Route
        path="/lck"
        render={props => {
          return <Region seriesId="1481" {...props} />;
        }}
      />
      <Route
        path="/lpl"
        render={props => {
          return <Region seriesId="1513" {...props} />;
        }}
      />
      <Route
        path="/lms"
        render={props => {
          return <Region seriesId="1520" {...props} />;
        }}
      />
    </div>
  );
};

export default RegionRoutes;
