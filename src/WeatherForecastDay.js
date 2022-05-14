import React from "react";


export default function WeatherForecastDay(props) {

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
      }
    
      function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
      }

      function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }

    return (
<div>
<span className="weather-forecast-date">{day()}:</span>
            <img className="pic" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} />{" "}
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-min">
                {" "}
                {minTemperature()}C
              </span>
              /
              <span className="weather-forecast-temperature-max">
                {maxTemperature()}C
              </span>
            </span>{" "}
</div>

    )
}