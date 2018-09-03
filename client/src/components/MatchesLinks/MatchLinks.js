import React from "react";
import { Link } from "react-router-dom";
import "./MatchLinks.css";

const MatchLinks = () => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div id="menu" className="p-3 text-center shadow-sm">
      <div className="row">
        {weeks.map((week, index) => (
          <div className="col" key={index}>
            <Link to={`/nalcs/regular/week/${week}`} className="text-dark lead">
              Week {week}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchLinks;
