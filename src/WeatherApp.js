import React from "react";

import "./WeatherApp.css";
import SearchSection from "./SearchSection";
import InfoOutput from "./InfoOutput";
import Navigation from "./Navigation";
import Forecast from "./Forecast";

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
        <Navigation />
        <Forecast
          weekDay1={"Wed"}
          iconDay1="http://openweathermap.org/img/wn/10d@2x.png"
          weatherForecastTemperatureMin1={12}
          weatherForecastTemperatureMax1={19}
          weekDay2={"Thu"}
          iconDay2="http://openweathermap.org/img/wn/10d@2x.png"
          weatherForecastTemperatureMin2={12}
          weatherForecastTemperatureMax2={17}
          weekDay3={"Fri"}
          iconDay3="http://openweathermap.org/img/wn/10d@2x.png"
          weatherForecastTemperatureMin3={12}
          weatherForecastTemperatureMax3={18}
          weekDay4={"Sat"}
          iconDay4="http://openweathermap.org/img/wn/10d@2x.png"
          weatherForecastTemperatureMin4={12}
          weatherForecastTemperatureMax4={20}
          weekDay5={"Sun"}
          iconDay5="http://openweathermap.org/img/wn/10d@2x.png"
          weatherForecastTemperatureMin5={11}
          weatherForecastTemperatureMax5={18}
          weekDay6={"Mon"}
          iconDay6="http://openweathermap.org/img/wn/10d@2x.png"
          weatherForecastTemperatureMin6={14}
          weatherForecastTemperatureMax6={20}
        />
      </div>
    </div>
  );
}
