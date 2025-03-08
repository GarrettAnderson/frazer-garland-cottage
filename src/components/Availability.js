import React from "react";
import { useState } from "react";
import "../App.css";
import "../assets/styles/DesktopNav.css";
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
      <nav className="internal_mobile-nav-container">
        <Hamburger onClickHamburger={toggleHamburger} />
        <MobileNav toggleNav={hamburgerOpen} />
        <InternalDesktopNav />
      </nav>

      <section className="universal_page-title projects_main-content">
        <h1>Availability</h1>
      </section>
    </section>
  );
}
