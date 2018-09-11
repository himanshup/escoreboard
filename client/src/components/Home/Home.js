import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container text-center">
        <h1 className="display-4 mt-5">eScoreboard</h1>
        <p className="lead">Scoreboard for various eSports games.</p>
        <h1 className="display-4">
          <i className="icon ion-logo-game-controller-b" />
        </h1>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-10 col-md-4 col-lg-3">
            <Link to="/lol" className="btn btn-lg btn-block btn-dark mt-4">
              League of Legends
            </Link>
          </div>
          <div className="col-10 col-md-4 col-lg-3">
            <Link to="/ow" className="btn btn-lg btn-block btn-warning mt-4">
              Overwatch
            </Link>
          </div>
          <div className="col-10 col-md-4 col-lg-3">
            <Link
              to="/dota"
              className="btn btn-lg btn-block btn-danger mt-4 disabled"
            >
              Dota
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
