import React, {useState, useEffect} from "react"; 
import WeatherApp from "./WeatherApp";
import Activities from "./Activities";
import Forecast from "./Forecast";
import "./WeatherAppWebVersion.css";


export default function WebVersion() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-4">
            <Activities
        idea1={"Trying out a new sort of 🍧"}
        idea2={"Riding your 🚲"}
        idea3={"Taking pictures outside 📷"}
      /> 
            </div>
      <div className="col-6">
<WeatherApp />  
</div>
<div className="col-2">

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
</div>  )
} 