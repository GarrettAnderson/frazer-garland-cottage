import React, { useEffect, useState } from "react";
import moment from "moment";
import MobileNav from "./Navigation/MobileNav";
import Hamburger from "./Navigation/Hamburger";
import DesktopNav from "./Navigation/DesktopNav";
import CottageImg from "../assets/images/cottage.png";
import "../assets/styles/Home.css";

export default function Home() {
  let [weatherData, setWeatherData] = useState({});
  let [loading, setLoading] = useState(true);
  const lat = 41.553223;
  const long = -70.608589;
  let apiKey = "189a38ae6bf0bf147aa5670c0b4b70d5"; // process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  // create a useCallback or useMemo function for the fetch to the weather api and put that function in the useEffect

  useEffect(() => {
    // console.log(process.env.OPEN_WEATHER_API_KEY);
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
      <nav className="site-navigation">
        {/* Navigation menus */}
        <Hamburger onClick={toggleHamburger} />
        <MobileNav toggleNav={hamburgerOpen} />
        <DesktopNav />
      </nav>
      <header className="App-hero">
        <section>
          <h1>The Cottage</h1>
          <h2>Frazer-Garland Trust</h2>
        </section>
        <section className="hero-img_hidden-on-mbile">
          <img src={CottageImg} />
        </section>
      </header>
      <section className="weather-container container col-12 col-md-9 col-lg-9 w-90">
        <div className="current-weather row container">
          {loading ? (
            <div>Loading weather data...</div>
          ) : (
            <ol>
              <li className="d-flex flex-row">Falmouth, MA</li>
              <li className="d-flex flex-row">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                />
                <p>{weatherData.current.weather[0].description}</p>
              </li>

              <li className="d-flex flex-row">
                <div id="current-temp">
                  {weatherData.current.temp.toFixed(0)}
                  <span className="temp-deg-symbol">°</span>
                </div>
                <p>Current Temp</p>
              </li>
              <li className="d-flex flex-row">
                <div id="current-wind">
                  {weatherData.current.wind_speed.toFixed(0)}
                </div>
                <p>Wind Speed (MPH)</p>
              </li>
              <li className="d-flex flex-row">
                <div id="current-humidity">
                  {weatherData.current.humidity}
                  <span className="percent-symbol">%</span>
                </div>
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
