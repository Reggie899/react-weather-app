import React, { useContext, useEffect, useState } from "react";
import ApiDatatContext from "./ApiDataContext";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useContext(ApiDatatContext);
  const [loadedForecast, setLoadedForecast] = useState(false);
  const [forecastResponse, setForecastResponse] = useState(null);
  // const [dayMin, setDayMin] = useState(null);
  // const [dayMax, setDayMax] = useState(null);
  // const [forecastIcon, setForecastIcon] = useState(null);
  // const [forecastDay, setForecastDay] = useState(null);

 

  function handleResponseForecast(response) {
    setLoadedForecast(true);
    console.log("forecast:", response);
    console.log("daily:", response.data.daily);
    console.log("today:");
    setForecastResponse(response.data.daily);
    // setDayMin(Math.round(response.data.daily[0].temp.min));
    // setDayMax(Math.round(response.data.daily[0].temp.max));
    // setForecastIcon(response.data.daily[0].weather[0].icon);
    // setForecastDay(response.data.daily[0].dt);
    // let date = new Date(response.data.daily[0].dt * 1000);
    // setForecastDay(forecastDays[date.getDay()]);
    }

  useEffect(() => {
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=e49d8a2ceb4c7b4bb750c995e9734044&units=metric`;
    axios.get(forecastUrl).then(handleResponseForecast);
  }, [weatherData.city]);

  const ForecastBoxes = () => (
    <div className="Forecast">
      <div className="card">
        <ul className="list-group list-group-flush" id="forecast">
          <div className="cityForecast">YOUR LOCATION: <div style={{color: "magenta"}}>{weatherData.city} </div> </div>
          {forecastResponse.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) { 
              return ( 
            <li className="list-group-item" key={index}>
            {" "}
            <WeatherForecastDay data={dailyForecast} />
        
          </li>
              )} })}
        </ul>
      </div>
    </div>
  );

  return <div>{loadedForecast ? <ForecastBoxes /> : null}</div>;
}
