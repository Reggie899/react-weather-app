import React from "react";

import "./SearchSection.css";

export default function SearchSection({ city, setCity }) {
  const [ct, setct] = React.useState("");

  return (
    <div className="SearchSection">
        <form
          id="biggerForm SearchSection"
          onSubmit={(e) => {
            e.preventDefault();
            setCity(ct);
            // alert("test");
          }}
        >
                      <div className="col-8">

          <input
            type="search"
            placeholder="Enter city here..."
            className="form-control"
            id="bigForm"
            autofocus="on"
            autocomplete="on"
            onChange={(e) => setct(e.target.value)}
          />
                      </div>
                      <div className="col-4">

            <div className="searchButton">
              <input
                type="submit"
                className="btn btn-light"
                id="bigButton"
                value="Search"
              />
            </div>
            </div>

        </form>
      </div>
  );
}
