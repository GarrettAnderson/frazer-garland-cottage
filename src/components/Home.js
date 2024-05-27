import React, { useEffect, useState } from "react";
import moment from "moment";
import MobileNav from "./Navigation/MobileNav";
import Hamburger from "./Navigation/Hamburger";
import DesktopNav from "./Navigation/DesktopNav";
import "../App.css";

export default function Home() {
  let [weatherData, setWeatherData] = useState({});
  let [loading, setLoading] = useState(true);
  const lat = 41.553223;
  const long = -70.608589;
  let apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  // create a useCallback or useMemo function for the fetch to the weather api and put that function in the useEffect

  useEffect(() => {
    console.log(process.env.OPEN_WEATHER_API_KEY);
    const fetchWeather = async () => {
      // fetch weather data with lat and long variables
      fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          setWeatherData(data);
          console.log(data);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchWeather();
  }, [lat, long]);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = (x) => {
    console.log(x, "hamburger open");
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="site-navigation">
          {/* Navigation menus */}
          <Hamburger onClick={toggleHamburger} />
          <MobileNav toggleNav={hamburgerOpen} />
          <DesktopNav />
        </div>
        <h1>The Cottage</h1>
        <h2>Frazer-Garland Trust</h2>
      </header>
      <section className="weather-container container col-12 col-md-9 col-lg-9 w-90">
        <div className="current-weather row border container">
          {loading ? (
            <div>Loading weather data...</div>
          ) : (
            <ol>
              <li className="d-flex flex-row">Falmouth, MA</li>
              <li className="d-flex flex-row">
                {weatherData.current.weather[0].description}
              </li>
              <li className="d-flex flex-row">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                />
              </li>
              <li className="d-flex flex-row">
                <span id="current-temp">
                  {weatherData.current.temp.toFixed(0)}°
                </span>
                <p>Current Temp </p>
              </li>
              <li className="d-flex flex-row">
                <span id="current-wind">
                  {weatherData.current.wind_speed.toFixed(0)} MPH
                </span>
                <p>Wind Speed </p>
              </li>
              <li className="d-flex flex-row">
                <span id="current-humidity">
                  {weatherData.current.humidity} %
                </span>
                <p>Humidity </p>
              </li>
            </ol>
          )}
        </div>

        <div className="row">
          <h3>5-Day Forecast:</h3>
          {loading ? (
            <div>Loading weather data...</div>
          ) : (
            <ol id="forecast-weather" className="forecast column">
              {weatherData.daily.slice(0, 5).map((day, index) => {
                return (
                  <li key={index} className="column border">
                    <h5>{moment.unix(day.dt).format("L")}</h5>
                    <p>Hi: {day.temp.max}</p>
                    <p>Low: {day.temp.min}</p>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </section>
    </div>
  );
}
