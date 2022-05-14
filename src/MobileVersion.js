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
         { <Forecast />}
        { showIdeas ? <Activities /> : null }
        <div className="Navigation">
        {showForecast ? null : <ButtonForecast />}
        {showMain ? null : <ButtonMain />}
        {showIdeas ? null : <ButtonIdeas/>}
         </div> 
        </div>
    )
}