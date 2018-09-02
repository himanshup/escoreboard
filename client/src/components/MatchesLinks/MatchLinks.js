import React from "react";
import { Link } from "react-router-dom";

const MatchLinks = () => {
  return (
    <div>
      <span>Week</span>
      <Link to={`/nalcs/regular/week/1`}>1</Link>{" "}
      <Link to={`/nalcs/regular/week/2`}>2</Link>{" "}
      <Link to={`/nalcs/regular/week/3`}>3</Link>{" "}
      <Link to={`/nalcs/regular/week/4`}>4</Link>{" "}
      <Link to={`/nalcs/regular/week/5`}>5</Link>{" "}
      <Link to={`/nalcs/regular/week/6`}>6</Link>{" "}
      <Link to={`/nalcs/regular/week/7`}>7</Link>{" "}
      <Link to={`/nalcs/regular/week/8`}>8</Link>{" "}
      <Link to={`/nalcs/regular/week/9`}>9</Link>
    </div>
  );
};

export default MatchLinks;
