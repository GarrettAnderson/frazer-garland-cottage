import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/MobileNav.css";

export default function MobileNav(props) {
  return (
    <div
      className={`mobile-navigation ${
        props.toggleNav ? "open" : ""
      } landing_landing-nav internal_mobile-nav`}
      // style={{ display: props.toggleNav ? "block" : "none" }}
    >
      <ul>
        <li>
          <NavLink className="navbar-link" activeClassName="is-active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/forecast"
          >
            Forecast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/availability"
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
      </ul>
    </div>
  );
}
