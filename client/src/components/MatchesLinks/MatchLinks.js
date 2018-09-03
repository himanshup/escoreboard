import React from "react";
import { Link } from "react-router-dom";
import "./MatchLinks.css";

const MatchLinks = () => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div id="menu" className="p-3 text-center shadow-sm">
      {weeks.map((week,index) => (
        <Link key={index} to={`/nalcs/regular/week/${week}`} className="text-dark lead mr-3">
          Week {week}
        </Link>
      ))}
    </div>
  );
};

export default MatchLinks;
