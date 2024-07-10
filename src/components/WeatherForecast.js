import moment from "moment";

function WeatherForecast(props) {
  return (
    <div className="row">
      <h3>5-Day Forecast:</h3>
      {props.loading ? (
        <div>Loading weather data...</div>
      ) : (
        <ol id="forecast-weather" className="forecast column">
          {props.weatherData.daily.slice(0, 5).map((day, index) => {
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
  );
}

export default WeatherForecast;
