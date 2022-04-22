import React from "react";

import "./InfoOutput.css";

export default function InfoOutput(props) {
  return (
    <div className="InfoOutput">
      <div className="cityDisplay" id="cityDisplay1">
        {props.yourLocation}{" "}
      </div>
      <div className="additionalInfo" id="currentTime">
        {props.currentTime} <br />
        <span id="descritpion">{props.currentDescription}</span>
      </div>
      <div className="todayTemp">
        <span id="todayTemp">{props.todayTemp}</span>
        <span className="units">
          <a href="#" id="celsiusLink" className="active">
            °C{" "}
          </a>
          |
          <a href="#" id="fahrenheitLink">
            °F
          </a>
        </span>
        <img src={props.todayWeatherPic} id="icon" />
      </div>
      <div className="minMax">
        <span id="min">{props.todayMin}</span>°C /{" "}
        <span id="max">{props.todayMax}</span>°C
      </div>
      <div className="additionalInfo">
        Humidity: <span id="humidity">{props.humidity}</span>% <br />
        Wind: <span id="wind">{props.wind}</span> km/h
      </div>
    </div>
  );
}
