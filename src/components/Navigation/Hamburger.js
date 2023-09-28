import React from "react";
import "../../assets/styles/Hamburger.css";

export default function Hamburger(props) {
  return (
    <div className="hamburger" onClick={props.onClick}>
      <div className="burger burger1"></div>
      <div className="burger burger2"></div>
      <div className="burger burger3"></div>
    </div>
  );
}
