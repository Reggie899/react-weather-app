import React, { useState, useEffect } from "react";
import ApiDatatContext from "./ApiDataContext";
import Footer from "./Footer";
import MobileVersion from "./MobileVersion";

import "./styles.css";
import WebVersion from "./WebVersion";
// import "./fonts/indie-flower-v17-latin-regular.woff";
// import "./fonts/indie-flower-v17-latin-regular.woff2";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileVersionDisplay, setMobileVersionDisplay] = useState(null);
  const [weatherData, setWeatherData] = useState({ready: false});

  //const [WebVersionDisplay, setWebVersionDisplay] = useState(null);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
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
    <ApiDatatContext.Provider value={[weatherData, setWeatherData]}>
    <div className="App">
      {mobileVersionDisplay ? <MobileVersion /> : <WebVersion />}
      <Footer />
    </div>
    </ApiDatatContext.Provider>
  );
}
