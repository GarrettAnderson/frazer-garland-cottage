import React, { useState } from "react";
import {
  HashRouter as /* BrowserRouter */ Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Availability from "./components/Availability";
import ManagementRecord from "./components/ManagementRecord";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App-container">
      {/* <BrowserRouter> */}
      <Router basename="/frazer-garland-cottage">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/availability" element={<Availability />}></Route>
          <Route exact path="/records" element={<ManagementRecord />}></Route>
          <Route exact path="/projects" element={<ProjectList />}></Route>
        </Routes>
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
