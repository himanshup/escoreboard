import React from "react";
import RegionLinks from "../RegionLinks/RegionLinks";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron text-center rounded-0 bg-transparent">
        <h1 className="display-4 mt-5">eScoreboard</h1>
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

      <RegionLinks />
    </div>
  );
};

export default Home;
