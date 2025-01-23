import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/MobileNav.css";

export default function DesktopNav(props) {
  return (
    <div className="desktop-navigation">
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
            to="/availability"
            exact
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/records"
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
            to="/projects"
            exact
          >
            Availability
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
