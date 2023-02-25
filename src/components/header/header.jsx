import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_icon"
            src="https://i.ibb.co/mRJTsyq/Daco-4076977.png"
            alt=""
          />
        </Link>
        <Link
          to="/movies/popular"
          className="nav_link"
          style={{ textDecoration: "none" }}
        >
          <span>Courses</span>
        </Link>
        <Link
          to="/movies/top_rated"
          className="nav_link"
          style={{ textDecoration: "none" }}
        >
          <span>Challenges</span>
        </Link>
        <Link
          to="/movies/upcoming"
          className="nav_link"
          style={{ textDecoration: "none" }}
        >
          <span>Alumni</span>
        </Link>
      </div>
    </div>
  );
};

export default header;
