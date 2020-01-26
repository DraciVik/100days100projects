import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";

function BreakInterval({ breakLength, handleTimerChange }) {
  return (
    <div className="break">
      <div id="break-label">Break Length</div>
      <div id="break-length">
        <FontAwesomeIcon
          id="break-increment"
          onClick={handleTimerChange}
          icon={faArrowCircleUp}
        />

        {breakLength}
        <FontAwesomeIcon
          id="break-decrement"
          onClick={handleTimerChange}
          icon={faArrowCircleDown}
        />
      </div>
    </div>
  );
}

export default BreakInterval;
