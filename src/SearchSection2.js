import React from "react";

import "./SearchSection2.css";

export default function SearchSection({ city, setCity }) {
  const [ct, setct] = React.useState("");

  return (
    <div className="SearchSection2">
        <form
          id="biggerForm2 SearchSection2"
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
            className="form-control2"
            id="bigForm2"
            // autofocus="on"
            // autocomplete="on"
            onChange={(e) => setct(e.target.value)}
          />
                      </div>
                      <div className="col-4">

            <div className="searchButton2">
              <input
                type="submit"
                className="btn btn-light"
                id="bigButton2"
                value="Search"
              />
            </div>
            </div>

        </form>
      </div>
  );
}
