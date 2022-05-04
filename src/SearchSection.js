import React from "react";
import axios from "axios";

import "./SearchSection.css";

export default function SearchSection() {
  return (
    <div className="SearchSection">
      <div className="col-8 SearchArrangement">
        <form id="biggerForm SearchSection">
          <input
            type="search"
            placeholder="Enter city here..."
            className="form-control"
            id="bigForm"
            autofocus="on"
            autocomplete="on"
          />
        </form>
      </div>
      <div className="col-4">
        <div className="searchButton">
          <button type="button" className="btn btn-light" id="bigButton">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
