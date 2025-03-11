import React from "react";
import { useState } from "react";
import "../App.css";
import "../assets/styles/DesktopNav.css";
import "../assets/styles/Availability.css";
import MobileNav from "./Navigation/MobileNav";
import Hamburger from "./Navigation/Hamburger";
import InternalDesktopNav from "./Navigation/InternalDesktopNav";

export default function Availability() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
    console.log("hamburger open", !hamburgerOpen);
  };

  return (
    <section className="universal_background-img universal_internal-page-container availability-container">
      <nav className="internal_nav-container">
        <Hamburger onClickHamburger={toggleHamburger} />
        <MobileNav toggleNav={hamburgerOpen} />
        <InternalDesktopNav />
      </nav>

      <section className="universal_page-title projects_main-content availability_main-content">
        <h1>Availability</h1>
        <secction className="section-container availability_detail-contaianer">
          <ul>
            <h2>2025 Cottage Calendar</h2>
            <section className="availability_list-items">
              <li>
                <h4>Rented</h4>
                <p>June 14 to September 07</p>
              </li>
              <li>
                <h4>Family Usage</h4>
                <p>May 28 to June 11</p>
              </li>
              <li>
                <h4>Availabile</h4>
                <p>September 08 to October 30</p>
              </li>
            </section>
          </ul>
        </secction>
      </section>
    </section>
  );
}
