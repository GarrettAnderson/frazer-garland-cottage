import React from "react";
import "./App.css";
import WeatherForceast from "./components/WeatherForcast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Cottage</h1>
        <h2>Frazer-Garland Trust</h2>
      </header>
      {/* Weather Component */}
      <WeatherForceast />
    </div>
  );
}

export default App;
