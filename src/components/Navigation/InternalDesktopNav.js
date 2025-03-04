import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Home.css";

export default function InternalDesktopNav(props) {
  return (
    <div className="internal_desktop-nav">
      <ul>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/forecast"
            exact
          >
            Forecast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/projects"
            exact
          >
            Projects
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/records"
            exact
          >
            Management Records
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/availability"
            exact
          >
            Availability
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
