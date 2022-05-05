import React, {useState} from "react";
import axios from "axios";


import "./WeatherApp.css";
import SearchSection from "./SearchSection";
import InfoOutput from "./InfoOutput";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data);
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
time: "13:20",
  });}

if (weatherData.ready) {
  return (
    <div className="WeatherApp">
      <div className="weather">
        <SearchSection />
        <InfoOutput 
          yourLocation={weatherData.city}
          currentTime={weatherData.time}
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
  );
 } else {
  let city = "Miami";
  const apiKey = "e49d8a2ceb4c7b4bb750c995e9734044";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 
 return "loading ..."
 }
}