import React from "react";

import "./Activities.css";

export default function Acitivities(props) { 
  return (
    <div className="Activities">
      <div className="toDo" id="activities">
        <div className="titleToDo">Perfect weather for ...</div>
        <ul className="ideas">
          <li className="idea1" id="toDo1">
            {props.idea1}
          </li>
          <li className="idea2" id="toDo2">
            {props.idea2}
          </li>
          <li className="idea3" id="toDo3">
            {props.idea3}
          </li>
        </ul>
      </div>
    </div>
  );
}
