import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";

function BreakInterval({ breakLength, handleTimerChange }) {
  return (
    <section className="break">
      <section id="break-label">
        <h4>Break Length</h4>

        <FontAwesomeIcon
          id="break-increment"
          onClick={handleTimerChange}
          icon={faArrowCircleUp}
        />

        <p id="break-length"> {breakLength}</p>
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
