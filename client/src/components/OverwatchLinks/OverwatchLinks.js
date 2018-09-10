import React from "react";
import { Link } from "react-router-dom";
import "./OverwatchLinks.css";

const OverwatchLinks = ({ match }) => {
  return (
    <div className="container text-center mb-5">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-10 col-md-4 col-lg-3">
          <Link
            to={`${match.url}/owl`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            Overwatch League
          </Link>
        </div>
        <div className="col-10 col-md-4 col-lg-3">
          <Link
            to={`${match.url}/wc`}
            className="btn btn-lg btn-block btn-outline-dark mt-4"
          >
            World Cup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OverwatchLinks;
