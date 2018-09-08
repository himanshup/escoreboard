import React from "react";
import { Link, Route } from "react-router-dom";
import Region from "../Region/Region";

const Home = () => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div className="container text-center">
              <div className="d-flex justify-content-around">
                <Link to="/na">NA</Link>
                <Link to="/eu">EU</Link>
                <Link to="/lck">LCK</Link>
              </div>
            </div>
          );
        }}
      />

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
    </div>
  );
};

export default Home;
