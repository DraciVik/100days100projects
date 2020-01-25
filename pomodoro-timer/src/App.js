import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      playing: false
    };
  }

  handleTimerChange = e => {
    const id = e.currentTarget.id;

    if (id === "break-increment") {
      this.setState(prevState => ({
        breakLength: prevState.breakLength + 1
      }));
    } else if (id === "break-decrement") {
      this.setState(prevState => ({
        breakLength: prevState.breakLength - 1
      }));
    } else if (id === "session-increment") {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength + 1
      }));
    } else if (id === "session-decrement") {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength - 1
      }));
    }
  };
  render() {
    return (
      <div className="app">
        <div className="pomodoro">
          <h1>Pomodoro Clock</h1>
          <div className="break">
            <div id="break-label">Break Length</div>
            <div id="break-length">
              <span id="break-increment" onClick={this.handleTimerChange}>
                &uarr;
              </span>
              {this.state.breakLength}
              <span id="break-decrement" onClick={this.handleTimerChange}>
                &darr;
              </span>
            </div>
          </div>
          <div className="session">
            <div id="session-length">Session Length</div>
            <div id="session-length">
              <span id="session-increment" onClick={this.handleTimerChange}>
                &uarr;
              </span>
              {this.state.sessionLength}
              <span id="session-decrement" onClick={this.handleTimerChange}>
                &darr;
              </span>
            </div>
          </div>
          <div className="timer">
            <div id="timer-label">Session</div>
            <div id="time-left">{this.state.sessionLength}</div>
          </div>
          <div className="controls">
            <div id="start_stop"></div>
            <div id="reset"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
