import React from "react";
import "../../assets/styles/MobileNav.css";

export default function MobileNav(props) {
  return (
    <div className="navigation">
      <ul style={{ display: props.toggleNav ? "flex" : "none" }}>
        <li>Weather</li>
        <li>Availability</li>
        <li>Management Record</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
