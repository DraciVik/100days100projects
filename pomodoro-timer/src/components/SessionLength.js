import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";

function SessionLength({ sessionLength, handleTimerChange }) {
  return (
    <section className="session">
      <h4 id="session-label">Session Length</h4>
      <section id="session-length">
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
      </section>
    </section>
  );
}

export default SessionLength;
