import React, {useState, useEffect} from "react";
import WeatherApp from "./WeatherApp";
import Forecast from "./Forecast";
import Activities from "./Activities";
import "./Navigation.css";

export default function MobileVersion() {


///////////// STATES //////////////////

const [showMain, setShowMain] = useState(true);
const [showForecast, setShowForecast] = useState (false);
const [showIdeas, setShowIdeas] = useState (false);

///////////// VIEW MAIN //////////////////

const ButtonMain = () => (
  <button onClick={() => { setShowMain(true);setShowIdeas(false);setShowForecast(false);  }} className="btn btn-light NavButton">
<a href="#main">
  {" "}
  Weather <br /> Today
</a>
</button>)

///////////// VIEW FORECAST //////////////////

const ButtonForecast = () => (
  <button onClick={() => { setShowMain(false);setShowIdeas(false);setShowForecast(true);  }} className="btn btn-light NavButton">
<a href="#forecast">
  View <br /> Forecast
</a>
</button>)


///////////// VIEW IDEAS //////////////////

const ButtonIdeas = () => (  <button  onClick={() => { setShowMain(false);setShowIdeas(true);setShowForecast(false);  }} className="btn btn-light NavButton">
<a href="#activities">
  {" "}
  Activity <br /> ideas
</a>
</button>)


///////////// RETURN PART //////////////////

    return (
        <div>
         { showMain ? <WeatherApp /> : null }
         { showForecast ? <Forecast
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
          /> : null}
        { showIdeas ? <Activities
        idea1={"Trying out a new sort of 🍧"}
        idea2={"Riding your 🚲"}
        idea3={"Taking pictures outside 📷"}
      /> : null }
        <div className="Navigation">
        {showForecast ? null : <ButtonForecast />}
        {showMain ? null : <ButtonMain />}
        {showIdeas ? null : <ButtonIdeas/>}
         </div> 
        </div>
    )
}