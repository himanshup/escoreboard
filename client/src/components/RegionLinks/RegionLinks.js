import React from "react";
import { Link } from "react-router-dom";
import "./RegionLinks.css";

const RegionLinks = () => {
  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-center">
        <div className="col">
          <Link to="/na" className="btn btn-lg btn-outline-dark mt-4">
            <span className="text-uppercase">NA</span>
          </Link>
        </div>
        <div className="col">
          <Link to="/eu" className="btn btn-lg btn-outline-dark mt-4">
            <span className="text-uppercase">EU</span>
          </Link>
        </div>
        <div className="col">
          <Link to="/lck" className="btn btn-lg btn-outline-dark mt-4">
            <span className="text-uppercase">LCK</span>
          </Link>
        </div>
        <div className="col">
          <Link to="/lpl" className="btn btn-lg btn-outline-dark mt-4">
            <span className="text-uppercase">LPL</span>
          </Link>
        </div>
        <div className="col">
          <Link to="/lms" className="btn btn-lg btn-outline-dark mt-4">
            <span className="text-uppercase">LMS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegionLinks;
