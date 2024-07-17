import React from "react";
import "../assets/styles/CurrentWeather.css";

function CurrentWeather(props) {
  return (
    <ol className="current-weather">
      <li className="d-flex flex-row">Falmouth, MA</li>
      <li className="d-flex flex-row">
        <img
          src={`http://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png`}
        />
        <p>{props.weatherData.current.weather[0].description}</p>
      </li>

      <li className="d-flex flex-row">
        <div id="current-temp">
          {props.weatherData.current.temp.toFixed(0)}
          <span className="temp-deg-symbol">°</span>
        </div>
        <p>Current Temp</p>
      </li>
      {/* <li className="d-flex flex-row">
                <div id="current-wind">
                  {props.weatherData.current.wind_speed.toFixed(0)}
                </div>
                <p>Wind Speed (MPH)</p>
              </li>
              <li className="d-flex flex-row">
                <div id="current-humidity">
                  {props.weatherData.current.humidity}
                  <span className="percent-symbol">%</span>
                </div>
                <p>Humidity </p>
              </li> */}
    </ol>
  );
}

export { CurrentWeather };
