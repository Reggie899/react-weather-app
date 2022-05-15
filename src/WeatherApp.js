import React, {useEffect, useState, useContext} from "react";
import axios from "axios";


import "./WeatherApp.css";
import SearchSection from "./SearchSection";
import SearchSection2 from "./SearchSection2";
import InfoOutput from "./InfoOutput";
import ApiDatatContext from "./ApiDataContext";

export default function WeatherApp() {
  // UseContext für WeatherData in App.js installieren -> Acitivtäten 
  const [weatherData, setWeatherData] = useContext(ApiDatatContext);
  const [city, setCity] = useState("");

  function handleResponse(response) {
    console.log("response:", response.data);
  setWeatherData({
    ready: true, 
    temperature: response.data.main.temp, 
    wind: response.data.wind.speed, 
    city: response.data.name, 
humidity: response.data.main.humidity,
todayMin: response.data.main.temp_min, 
todayMax: response.data.main.temp_max, 
description:  response.data.weather[0].main,
icon: response.data.weather[0].icon,
time: new Date(response.data.dt * 1000),
lon: response.data.coord.lon,
lat: response.data.coord.lat,
  });}

useEffect(() => {
  const apiKey = "e49d8a2ceb4c7b4bb750c995e9734044";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}, [city])


const WeatherBox = () => (
<div className="WeatherApp">
      <div className="weather">
      <SearchSection2 city={city} setCity={setCity} />
        <InfoOutput 
          yourLocation={weatherData.city}
          currentHours={weatherData.time.getHours()}
          currentMinutes={weatherData.time.getMinutes()}
          currentDescription={weatherData.description}
          todayTemp={Math.round(weatherData.temperature)}
          todayWeatherPic={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          todayMin={Math.round(weatherData.todayMin)}
          todayMax={Math.round(weatherData.todayMax)}
          humidity={weatherData.humidity}
          wind={Math.round(weatherData.wind)}
        />
      </div>
    </div>
)

 
 return (
     <div>
  {weatherData.ready ? null : <SearchSection city={city} setCity={setCity} /> }
  {weatherData.ready ? <WeatherBox /> : null }
  </div>
 )
}