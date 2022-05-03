import React, {useState, useEffect} from "react";
// import WeatherApp from "./WeatherApp"; //       <WeatherApp />

import Footer from "./Footer";
import MobileVersion from "./MobileVersion";


import "./styles.css"; 
import WebVersion from "./WebVersion";



export default function App() {
  const [width, setWidth]   = useState(window.innerWidth);
const [mobileVersionDisplay, setMobileVersionDisplay] = useState(null);
//const [WebVersionDisplay, setWebVersionDisplay] = useState(null);


  const updateDimensions = () => {setWidth(window.innerWidth);}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    if (width < 800) {
setMobileVersionDisplay(true);
    }
    if (width > 800) {
      setMobileVersionDisplay(false);
          }
    console.log(width);
    return () => window.removeEventListener("resize", updateDimensions);
}, [width]);



  return (
    <div className="App">
     {mobileVersionDisplay ? <MobileVersion /> : <WebVersion />} 
      <Footer />
    </div>
  );
}
