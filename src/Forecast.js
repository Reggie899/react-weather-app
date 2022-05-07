import React, {useContext, useEffect, useState} from "react";
import ApiDatatContext from "./ApiDataContext"; 
import axios from "axios";

import "./Forecast.css";
 
export default function Forecast(props) {
  const [weatherData, setWeatherData] = useContext(ApiDatatContext);
  
  function handleResponseForecast(response) {
    console.log("forecast:", response);
  }
  
  useEffect(() => {
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=e49d8a2ceb4c7b4bb750c995e9734044`
    axios.get(forecastUrl).then(handleResponseForecast);

  },[weatherData.city])
  





  return (
    <div className="Forecast">
      <div className="card">
        <ul className="list-group list-group-flush" id="forecast">
        <div className="cityForecast">YOUR LOCATION : {weatherData.city}</div>

          <li className="list-group-item">
            {" "}
            <span className="weather-forecast-date">{props.weekDay1}:</span>
            <img className="pic" src={props.iconDay1} />{" "}
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-min">
                {" "}
                {props.weatherForecastTemperatureMin1}°C
              </span>
              /
              <span className="weather-forecast-temperature-max">
                {props.weatherForecastTemperatureMax1}°C
              </span>
            </span>{" "}
          </li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="weather-forecast-date">{props.weekDay2}:</span>
            <img className="pic" src={props.iconDay2} />
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-min">
                {" "}
                {props.weatherForecastTemperatureMin2}°C
              </span>
              /
              <span className="weather-forecast-temperature-max">
                {props.weatherForecastTemperatureMax2}°C
              </span>
            </span>{" "}
          </li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="weather-forecast-date">{props.weekDay3}:</span>
            <img className="pic" src={props.iconDay3} />
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-min">
                {" "}
                {props.weatherForecastTemperatureMin3}°C
              </span>
              /
              <span className="weather-forecast-temperature-max">
                {props.weatherForecastTemperatureMax3}°C
              </span>
            </span>{" "}
          </li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="weather-forecast-date">{props.weekDay4}:</span>
            <img className="pic" src={props.iconDay4} />
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-min">
                {" "}
                {props.weatherForecastTemperatureMin4}°C
              </span>
              /
              <span className="weather-forecast-temperature-max">
                {props.weatherForecastTemperatureMax4}°C
              </span>
            </span>{" "}
          </li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="weather-forecast-date">{props.weekDay5}:</span>
            <img className="pic" src={props.iconDay5} />
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-min">
                {" "}
                {props.weatherForecastTemperatureMin5}°C
              </span>
              /
              <span className="weather-forecast-temperature-max">
                {props.weatherForecastTemperatureMax5}°C
              </span>
            </span>{" "}
          </li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="weather-forecast-date">{props.weekDay6}:</span>
            <img className="pic" src={props.iconDay6} />
            <span className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-min">
                {" "}
                {props.weatherForecastTemperatureMin6}°C
              </span>
              /
              <span className="weather-forecast-temperature-max">
                {props.weatherForecastTemperatureMax6}°C
              </span>
            </span>{" "}
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
