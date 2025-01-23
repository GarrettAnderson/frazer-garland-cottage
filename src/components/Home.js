import React, { useEffect, useState } from "react";
import moment from "moment";
import MobileNav from "./Navigation/MobileNav";
import Hamburger from "./Navigation/Hamburger";
import DesktopNav from "./Navigation/DesktopNav";
import CottageImg from "../assets/images/cottage.png";
import "../assets/styles/Home.css";
import WeatherForecast from "./WeatherForecast";
import { CurrentWeather } from "./CurrentWeather";

export default function Home() {
  let [weatherData, setWeatherData] = useState({});
  let [loading, setLoading] = useState(true);
  const lat = 41.553223;
  const long = -70.608589;
  const apiKey = "189a38ae6bf0bf147aa5670c0b4b70d5"; // process.env.REACT_APP_OPEN_WEATHER_API_KEY;

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
    <div className="landing_home-page">
      {/* <header>
        <section className="weather-container container col-12 col-md-9 col-lg-9 w-90">
          <div className="current-weather row container">
            {loading ? (
              <div>Loading weather data...</div>
            ) : (
              <CurrentWeather weatherData={weatherData} />
            )}
          </div>
          <WeatherForecast loading={loading} weatherData={weatherData} />
        </section>
      </header> */}
      <main className="landing_main-content">
        <section className="landing_main-content_left">
          <section className="landing_title">
            <h1>The Cottage</h1>
            {/* <h2>Falmouth, MA</h2> */}
            {/* <h2>Frazer-Garland Trust</h2> */}
          </section>
        </section>
        <section className="landing_main-content_right">
          {/* Navigation menus */}
          <nav className="site-navigation">
            <Hamburger onClick={toggleHamburger} />
            <MobileNav toggleNav={hamburgerOpen} />
            <DesktopNav />
          </nav>
        </section>
      </main>
    </div>
  );
}
