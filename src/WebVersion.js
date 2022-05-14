import React, { useState, useEffect } from "react";
import WeatherApp from "./WeatherApp";
import Activities from "./Activities";
import Forecast from "./Forecast";
import "./WeatherAppWebVersion.css";

export default function WebVersion() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Activities />
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
