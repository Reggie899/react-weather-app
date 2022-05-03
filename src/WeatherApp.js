import React from "react";

import "./WeatherApp.css";
import SearchSection from "./SearchSection";
import InfoOutput from "./InfoOutput";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="weather">
        <SearchSection />
        <InfoOutput 
          yourLocation={"Your location"}
          currentTime={"11:05 AM"}
          currentDescription={"sunny"}
          todayTemp={21}
          todayWeatherPic={"http://openweathermap.org/img/wn/10d@2x.png"}
          todayMin={15}
          todayMax={22}
          humidity={5}
          wind={1}
        />
     
      </div>
    </div>
  );
}
