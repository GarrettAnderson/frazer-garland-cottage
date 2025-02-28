import React from "react";
import { useState } from "react";
import "../../assets/styles/Hamburger.css";

export default function Hamburger(props) {
  const [isOpenToggleClass, setIsOpenToggleClass] = useState(
    "mobile-nav_hamburger"
  );

  const handleOpenToggleClass = () => {
    setIsOpenToggleClass(isOpenToggleClass + ".open");
  };

  return (
    // <div className={isOpenToggleClass} onClick={handleOpenToggleClass}>
    //   <div className="burger burger1"></div>
    //   <div className="burger burger2"></div>
    //   <div className="burger burger3"></div>
    //   <div className="burger burger4"></div>
    // </div>

    <div id={isOpenToggleClass}>
      <span className="burger"></span>
      <span className="burger"></span>
      <span className="burger"></span>
      <span className="burger"></span>
    </div>
  );
}
