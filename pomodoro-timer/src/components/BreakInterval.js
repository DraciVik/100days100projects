import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";

function BreakInterval({ breakLength, handleTimerChange }) {
  return (
    <section className="break">
      <h4 id="break-label">Break Length</h4>
      <section id="break-length">
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
      </section>
    </section>
  );
}

export default BreakInterval;
