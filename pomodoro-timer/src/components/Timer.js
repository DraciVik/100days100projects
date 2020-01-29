import React from "react";

function Timer({ isSession, timerMinute, timerSecond }) {
  return (
    <section className="timer">
      <h4 id="timer-label">{isSession === true ? "Session" : "Break"}</h4>
      <section>
        <span id="time-left">{timerMinute}</span>
        <span>:</span>
        <span>
          {timerSecond === 0
            ? "00"
            : timerSecond < 10
            ? "0" + timerSecond
            : timerSecond}
        </span>
      </section>
    </section>
  );
}

export default Timer;
