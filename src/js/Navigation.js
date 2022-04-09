import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/Navigation.scss";

export default function Navigation() {
  return (
    <>
      <nav className="Navigation">
        <ul>
          <li className="nav-link">
            <NavLink to="/weather" className="weather-link"></NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/datetime" className="datetime-link"></NavLink>
          </li>
          <li className="nav-link">
            {" "}
            <NavLink to="/todolist" className="todolist-link"></NavLink>
          </li>
          <li className="nav-link">
            {" "}
            <NavLink to="/notes" className="notes-link"></NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
