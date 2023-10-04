import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/MobileNav.css";

export default function MobileNav(props) {
  return (
    <div
      className="mobile-navigation"
      style={{ display: props.toggleNav ? "inline" : "none" }}
    >
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
            Availability
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/records"
            exact
          >
            Management Records
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
      </ul>
    </div>
  );
}
