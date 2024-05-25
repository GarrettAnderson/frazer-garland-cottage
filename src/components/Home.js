import React, { useEffect, useState } from "react";
import moment from "moment";
import "../App.css";

export default function Home() {
  let [weatherData, setWeatherData] = useState({});
  let [loading, setLoading] = useState(true);
  const lat = 41.553223;
  const long = -70.608589;
  let apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  // let apiKey = "189a38ae6bf0bf147aa5670c0b4b70d5";
  // var cityWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Cottage</h1>
        <h2>Frazer-Garland Trust</h2>
      </header>
      <section className="weather-container container col-12 col-md-9 col-lg-9 w-90">
        <div className="current-weather row border container">
          {loading ? (
            <div>Loading weather data...</div>
          ) : (
            <ol>
              <li className="d-flex flex-row">
                <p>Current Temp: </p>
                <span id="current-temp">{weatherData.current.temp}</span>
              </li>
              <li className="d-flex flex-row">
                <p>Wind Speed: </p>
                <span id="current-wind">{weatherData.current.wind_speed}</span>
              </li>
              <li className="d-flex flex-row">
                <p>Humidity: </p>
                <span id="current-humidity">
                  {weatherData.current.humidity}
                </span>
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
