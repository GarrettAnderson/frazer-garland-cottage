import React from "react";
import "../../assets/styles/MobileNav.css";

export default function MobileNav(props) {
  return (
    <div
      className="navigation"
      style={{ display: props.toggleNav ? "inline" : "none" }}
    >
      <ul>
        <li>Weather</li>
        <li>Availability</li>
        <li>Management Record</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
