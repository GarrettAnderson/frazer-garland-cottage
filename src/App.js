import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MobileNav from "./components/Navigation/MobileNav";
import Hamburger from "./components/Navigation/Hamburger";
import DesktopNav from "./components/Navigation/DesktopNav";
import Availability from "./components/Availability";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = (x) => {
    console.log(x, "hamburger open");
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <BrowserRouter>
      <div>
        {/* Navigation menus */}
        <Hamburger onClick={toggleHamburger} />
        <MobileNav toggleNav={hamburgerOpen} />
        <DesktopNav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/availability" element={<Availability />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
