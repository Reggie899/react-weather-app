import React from "react";

import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="Navigation">
      <button class="btn btn-light NavButton">
        <a href="#forecast">
          View <br /> Forecast
        </a>
      </button>
      <button class="btn btn-light NavButton">
        <a href="#activities">
          {" "}
          Activity <br /> ideas
        </a>
      </button>
    </div>
  );
}
