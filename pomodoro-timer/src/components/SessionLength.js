import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";

function SessionLength({ sessionLength, handleTimerChange }) {
  return (
    <div className="session">
      <div id="session-label">Session Length</div>
      <div id="session-length">
        <FontAwesomeIcon
          id="session-increment"
          onClick={handleTimerChange}
          icon={faArrowCircleUp}
        />

        {sessionLength}
        <FontAwesomeIcon
          id="session-decrement"
          onClick={handleTimerChange}
          icon={faArrowCircleDown}
        />
      </div>
    </div>
  );
}

export default SessionLength;
