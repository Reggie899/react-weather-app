import React, { useState, useEffect, useContext } from "react";
import WeatherApp from "./WeatherApp";
import Activities from "./Activities";
import Forecast from "./Forecast";
import "./WeatherAppWebVersion.css";
import ApiDatatContext from "./ApiDataContext";


export default function WebVersion() {
  const [weatherData, setWeatherData] = useContext(ApiDatatContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
        { weatherData.ready ? <Activities /> : <div style={{fontFamily: "Indie Flower, cursive", fontSize: "4em", fontWeight: "bolder", color: "magenta", transform: "rotate(-20deg)"}}>Weather App</div> }
        </div>
        <div className="col-6">
          <WeatherApp />
        </div>
        <div className="col-2">
          <Forecast />
        </div>
      </div>
    </div>
  );
}
