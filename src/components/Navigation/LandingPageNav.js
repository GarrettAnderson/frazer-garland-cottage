import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/MobileNav.css";

<<<<<<< HEAD
export default function DesktopNav(props) {
=======
export default function LandingPageNav(props) {
>>>>>>> dev_env
  return (
    <div className="desktop-navigation">
      <ul>
        {/* <li>
          <NavLink
            className="navbar-link"
            activeClassName="is-active"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li> */}
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
          >
            Availability
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
