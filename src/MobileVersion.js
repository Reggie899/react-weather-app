import React, {useState, useEffect, useContext} from "react";
import WeatherApp from "./WeatherApp";
import Forecast from "./Forecast";
import Activities from "./Activities";
import "./Navigation.css";
import ApiDatatContext from "./ApiDataContext";


export default function MobileVersion() {


///////////// STATES //////////////////

const [showMain, setShowMain] = useState(true);
const [showForecast, setShowForecast] = useState (false);
const [showIdeas, setShowIdeas] = useState (false);
const [weatherData, setWeatherData] = useContext(ApiDatatContext);


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

const ButtonIdeas = () => (  <button  onClick={() => { setShowMain(false);setShowIdeas(true);setShowForecast(false);   window.scrollTo(0, 0)
}} className="btn btn-light NavButton">
<a href="#activities">
  {" "}
  Activity <br /> ideas
</a>
</button>)

const scrollUp = () => {
  window.scrollTo(0, 0)

}

///////////// RETURN PART //////////////////

    return (
        <div>
         { weatherData.ready ? null : <div style={{fontFamily: "Indie Flower, cursive", fontSize: "4em", fontWeight: "bolder", color: "magenta", transform: "rotate(-7deg)", margin: "-5% 5% 5%"}}>Weather App</div>}
         { showMain ? <WeatherApp /> : null }
         { showForecast ? <Forecast /> : null}
         { showIdeas ? <Activities /> : null }
         { weatherData.ready ? <div className="Navigation">
         {showForecast ? null : <ButtonForecast />}
         { showMain ? null : <ButtonMain />}
         {showIdeas ? null : <ButtonIdeas/>}
         </div> : null }
        </div>
    )
}