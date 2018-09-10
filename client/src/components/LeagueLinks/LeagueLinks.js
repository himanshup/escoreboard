import React from "react";
import { Link } from "react-router-dom";
import "./LeagueLinks.css";

const LeagueLinks = ({ match }) => {
  return (
    <div className="container text-center mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to={`${match.url}/na`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">NA</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to="/lol/eu"
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">EU</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to="/lol/lck"
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">LCK</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to="/lol/lpl"
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">LPL</span>
          </Link>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <Link
            to="/lol/lms"
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            <span className="text-uppercase">LMS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeagueLinks;
