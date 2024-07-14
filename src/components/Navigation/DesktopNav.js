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
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/availability"
            exact
          >
            AVAILABILITY
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/records"
            exact
          >
            MANAGEMENT RECORDS 
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/projects"
            exact
          >
            PROJECTS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
