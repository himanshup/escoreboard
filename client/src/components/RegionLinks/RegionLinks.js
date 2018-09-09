import React from "react";
import { Link } from "react-router-dom";
import "./RegionLinks.css";

const RegionLinks = () => {
  return (
    <div>
      <div className="jumbotron text-center rounded-0 bg-transparent">
        <h1 className="display-4 mt-4">escoreboard</h1>
        <p className="lead">League of Legends</p>
        <div className="mt-4">
          <div className="row d-flex justify-content-center">
            <img
              src="https://cdn.pandascore.co/images/league/image/289/na-lcs-g63ljv52.png"
              alt=""
              className="resize"
            />
            <img
              src="https://cdn.pandascore.co/images/league/image/290/eu-lcs-b29u5nim.png"
              alt=""
              className="resize"
            />
            <img
              src="https://cdn.pandascore.co/images/league/image/293/LCK_2018_logo.png"
              alt=""
              className="resize"
            />
            <img
              src="https://cdn.pandascore.co/images/league/image/294/lpl-china-6ygsd4c8.png"
              alt=""
              className="resize"
            />
            <img
              src="https://cdn.pandascore.co/images/league/image/295/b030bfca-cac7-11e7-92d4-0e6c723feec8.png"
              alt=""
              className="resize"
            />
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default RegionLinks;
