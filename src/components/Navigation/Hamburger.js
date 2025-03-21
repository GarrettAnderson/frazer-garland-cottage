import React from "react";
import { useState } from "react";
import "../../assets/styles/Hamburger.css";

export default function Hamburger(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenToggleClass = () => {
    setIsOpen((prev) => !prev);
    console.log("props:", props.onClickHamburger);
    // Call the onClick function from props if it's passed
    if (props.onClickHamburger) {
      console.log("toggle menu");
      props.onClickHamburger();
    }
  };

  return (
    <div
      className={`mobile-nav_hamburger ${isOpen ? "open" : ""}`}
      onClick={handleOpenToggleClass}
    >
      <div className={`burger burger1 ${isOpen ? "open" : ""}`}></div>
      <div className={`burger burger2 ${isOpen ? "open" : ""}`}></div>
      <div className={`burger burger3 ${isOpen ? "open" : ""}`}></div>
      {/* <div className={`burger burger4 ${isOpen ? "open" : ""}`}></div> */}
    </div>

    // <div id={isOpenToggleClass}>
    //   <span className="burger"></span>
    //   <span className="burger"></span>
    //   <span className="burger"></span>
    //   <span className="burger"></span>
    // </div>
  );
}
