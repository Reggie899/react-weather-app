import React, {useContext, useEffect, useState} from "react";

import "./Activities.css";
import ApiDatatContext from "./ApiDataContext"; 

export default function Acitivities() { 
  const [weatherData, setWeatherData] = useContext(ApiDatatContext);
  const [idea1, setIdea1] = useState("Trying out a new sort of 🍧");
  const [idea2, setIdea2] = useState("Riding your 🚲");
  const [idea3, setIdea3] = useState("Taking pictures outside 📷");

  console.log("icon", weatherData.icon);

  const changeIcon = () => {
    if (weatherData.icon === "01d") {
      setIdea1("Taking a walk 👣");
      setIdea2("Eating a salad 🥗");
      setIdea3("Calling a friend 📲");
    }
   else if (weatherData.icon === "09d") {
      setIdea1("Texting a friend 📲");
      setIdea2("Reading a book 📚");
      setIdea3("Cleaning up 🧹🧽");
    }
    else if (weatherData.icon === "04d") {
      console.log("hello", weatherData.icon);
      setIdea1("Buying cheese 🧀");
      setIdea2("Not texting your ex 😑☝️");
      setIdea3("Listing the top 5 things you like about yourself 👑");
    }
    else if (weatherData.icon === "02d") {
      setIdea1("Creating a playlist 💽");
      setIdea2("Wearing something bright 👗");
      setIdea3("Writing into your diary 📖✍️");
    }
    else if (weatherData.icon === "03d") {
      setIdea1("Dancing to a song 💃🕺");
      setIdea2("Making a card 🖌🌈");
      setIdea3("Cooking something yummy 🍝🤤");
    }
    else if (weatherData.icon === "11d") {
      setIdea1("Hiding under a blanket 👀");
      setIdea2("Staying inside ☝️");
      setIdea3("Watching a movie 🎥🍿");
    }
    else if (weatherData.icon === "01n") {
      setIdea1("Stargazing ✨🔭");
      setIdea2("Preparing your to do list for the next day 📝");
      setIdea3("Reflecting on the day 🧐");
    } 
    //   For some reason else sets everything to those?!: 
      else {
      setIdea1("Sleep 😴");
      setIdea2("Brushing your teeth 🪥");
      setIdea3("Making a wish 🧞‍♂️");
    } 
  }

  useEffect(() => {
   changeIcon();
    // console.log("lon:", weatherData.lon);
    // console.log("lat:", weatherData.lat);

  }, [weatherData.icon])

  return (
    <div className="Activities">
      <div className="toDo" id="activities">
        <div className="titleToDo">Perfect weather for ...</div>
        <ul className="ideas">
          <li className="idea1" id="toDo1">
            {idea1}
          </li>
          <li className="idea2" id="toDo2">
            {idea2}
          </li>
          <li className="idea3" id="toDo3">
            {idea3}
          </li>
        </ul>
      </div>
    </div>
  );
}
