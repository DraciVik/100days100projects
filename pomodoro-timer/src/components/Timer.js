import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <section className="timer">
        <h4 id="timer-label">
          {this.props.isSession === true ? "Session" : "Break"}
        </h4>
        <section id="time-left">
          <span>{this.props.timerMinute}</span>
          <span>:</span>
          <span>
            {this.props.timerSecond === 0
              ? "00"
              : this.props.timerSecond < 10
              ? "0" + this.props.timerSecond
              : this.props.timerSecond}
          </span>
        </section>
      </section>
    );
  }
}

export default Timer;
