import React, {useState} from "react";

import "./InfoOutput.css";

export default function InfoOutput(props) {
const [unit, setUnit] = useState(true);


let minutes = props.currentMinutes; 
if (minutes < 10) {
  minutes = `0${minutes}`;
}

function unitconverter() {
setUnit(!unit);
}

  return (
    <div className="InfoOutput">
      <div className="cityDisplay" id="cityDisplay1">
        {props.yourLocation}{" "}
      </div>
      <div className="additionalInfo" id="currentTime">
        {props.currentHours}:{minutes} <br />
        <span id="descritpion">{props.currentDescription}</span>
      </div>
      <div className="todayTemp">
        <span id="todayTemp">{unit ? props.todayTemp : (Math.round((props.todayTemp * 9) / 5 + 32)) }</span>
        <span className="units">
          <a onClick={() => unitconverter()} id="celsiusLink" className={unit ? "active" : ""}>
            °C{" "}
          </a>
          |
          <a onClick={() => unitconverter()} id="fahrenheitLink" className={unit ? "" : "active"}>
            °F
          </a>
        </span>
        <img src={props.todayWeatherPic} id="icon" />
      </div>
      <div className="minMax">
        <span id="min">{unit ? props.todayMin: (Math.round((props.todayMin * 9) / 5 + 32))}</span>°C /{" "}
        <span id="max">{unit ? props.todayMax: (Math.round((props.todayMax * 9) / 5 + 32))}</span>°C
      </div>
      <div className="additionalInfo">
        Humidity: <span id="humidity">{props.humidity}</span>% <br />
        Wind: <span id="wind">{props.wind}</span> km/h
      </div>
    </div>
  );
}
