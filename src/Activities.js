import React, {useContext, useEffect, useState} from "react";

import "./Activities.css";
import ApiDatatContext from "./ApiDataContext"; 
// import "./fonts/indie-flower-v17-latin-regular.woff";
// import "./fonts/indie-flower-v17-latin-regular.woff2";
// import "./fonts/IndieFlower-Regular.woff";


export default function Acitivities() { 
  const [weatherData, setWeatherData] = useContext(ApiDatatContext);
  const [idea1, setIdea1] = useState("Trying out a new sort of ๐ง");
  const [idea2, setIdea2] = useState("Riding your ๐ฒ");
  const [idea3, setIdea3] = useState("Taking pictures outside ๐ท");

  console.log("icon", weatherData.icon);

  const changeIcon = () => {
    if (weatherData.icon === "01d") {
      setIdea1("Taking a walk ๐ฃ");
      setIdea2("Eating a salad ๐ฅ");
      setIdea3("Calling a friend ๐ฒ");
    }
   else if (weatherData.icon === "09d") {
      setIdea1("Texting a friend ๐ฒ");
      setIdea2("Reading a book ๐");
      setIdea3("Cleaning up ๐งน๐งฝ");
    }
    else if (weatherData.icon === "04d") {
      console.log("hello", weatherData.icon);
      setIdea1("Buying cheese ๐ง");
      setIdea2("Not texting your ex ๐โ๏ธ");
      setIdea3("Listing the top 5 things you like about yourself ๐");
    }
    else if (weatherData.icon === "02d") {
      setIdea1("Creating a playlist ๐ฝ");
      setIdea2("Wearing something bright ๐");
      setIdea3("Writing into your diary ๐โ๏ธ");
    }
    else if (weatherData.icon === "03d") {
      setIdea1("Dancing to a song ๐๐บ");
      setIdea2("Making a card ๐๐");
      setIdea3("Cooking something yummy ๐๐คค");
    }
    else if (weatherData.icon === "11d") {
      setIdea1("Hiding under a blanket ๐");
      setIdea2("Staying inside โ๏ธ");
      setIdea3("Watching a movie ๐ฅ๐ฟ");
    }
    else if (weatherData.icon === "01n") {
      setIdea1("Stargazing โจ๐ญ");
      setIdea2("Preparing your to do list for the next day ๐");
      setIdea3("Reflecting on the day ๐ง");
    } 
    //   For some reason else sets everything to those?!: 
      else {
      setIdea1("Sleep ๐ด");
      setIdea2("Brushing your teeth ๐ชฅ");
      setIdea3("Making a wish ๐งโโ๏ธ");
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
