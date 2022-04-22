import React from "react";
import Activities from "./Activities";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <WeatherApp />
      <Activities
        idea1={"Trying out a new sort of 🍧"}
        idea2={"Riding your 🚲"}
        idea3={"Taking pictures outside 📷"}
      />
      <Footer />
    </div>
  );
}
