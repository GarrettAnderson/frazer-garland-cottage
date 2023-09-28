import React, { useState } from "react";
import "./App.css";
import WeatherForceast from "./components/WeatherForcast";
import MobileNav from "./components/Navigation/MobileNav";
import Hamburger from "./components/Navigation/Hamburger";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = (x) => {
    console.log(x, "hamburger open");
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Cottage</h1>
        <h2>Frazer-Garland Trust</h2>
      </header>

      {/* Navigation menus */}
      <Hamburger onClick={toggleHamburger} />
      <MobileNav toggleNav={hamburgerOpen} />
      {/* Weather Component */}
      <WeatherForceast />
    </div>
  );
}

export default App;
