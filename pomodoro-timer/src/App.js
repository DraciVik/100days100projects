import React from "react";
import BreakInterval from "./components/BreakInterval";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      playing: false,
      intervalId: 0,
      isSession: true,
      timerSecond: 0
    };
  }

  handlePlayingState = () => {
    const btn = document.querySelector(".button");
    btn.classList.toggle("paused");
    this.setState(prevState => ({
      playing: !prevState.playing
    }));

    if (btn.classList.contains("paused")) {
      let intervalId = setInterval(this.decreaseTimer, 1000);
      this.setState({
        intervalId: intervalId
      });
    } else {
      this.stopTimer();
    }
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
  };

  decreaseTimer = () => {
    const { timerSecond, timerMinute, isSession } = this.state;
    switch (timerSecond) {
      case 0:
        if (timerMinute === 0) {
          if (isSession) {
            this.setState({
              isSession: false
            });
            this.onToggleInterval();
          } else {
            this.setState({
              isSession: true
            });
            this.onToggleInterval();
          }
        }
        this.onUpdateTimerMinute();
        this.setState({
          timerSecond: 59
        });
        break;
      default:
        this.setState(prevState => {
          return {
            timerSecond: prevState.timerSecond - 1
          };
        });
        break;
    }
  };

  resetTimer = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      playing: false,
      intervalId: 0,
      isSession: true,
      timerSecond: 0
    });
    const btn = document.querySelector(".button");
    btn.classList.remove("paused");
    this.stopTimer();
  };

  handleTimerChange = e => {
    const id = e.currentTarget.id;
    const { breakLength, sessionLength, isSession } = this.state;
    if (!isSession) {
      if (id === "break-increment") {
        this.setState(prevState => ({
          breakLength: prevState.breakLength + 1,
          timerMinute: prevState.breakLength + 1
        }));
      } else if (id === "break-decrement") {
        if (breakLength === 0) return;
        this.setState(prevState => ({
          breakLength: prevState.breakLength - 1,
          timerMinute: prevState.breakLength - 1
        }));
      } else if (id === "session-increment") {
        this.setState(prevState => ({
          sessionLength: prevState.sessionLength + 1
        }));
      } else if (id === "session-decrement") {
        if (sessionLength === 0) return;

        this.setState(prevState => ({
          sessionLength: prevState.sessionLength - 1
        }));
      }
    }
    if (isSession) {
      if (id === "session-increment") {
        this.setState(prevState => ({
          sessionLength: prevState.sessionLength + 1,
          timerMinute: prevState.sessionLength + 1
        }));
      } else if (id === "session-decrement") {
        if (sessionLength === 0) return;

        this.setState(prevState => ({
          sessionLength: prevState.sessionLength - 1,
          timerMinute: prevState.sessionLength - 1
        }));
      } else if (id === "break-increment") {
        this.setState(prevState => ({
          breakLength: prevState.breakLength + 1
        }));
      } else if (id === "break-decrement") {
        if (breakLength === 0) return;
        this.setState(prevState => ({
          breakLength: prevState.breakLength - 1
        }));
      }
    }
  };

  onUpdateTimerMinute = () => {
    this.setState(prevState => {
      return {
        timerMinute: prevState.timerMinute - 1
      };
    });
  };

  onToggleInterval = () => {
    const { isSession } = this.state;
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      });
    }
  };

  render() {
    let {
      breakLength,
      sessionLength,
      timerMinute,
      isSession,
      timerSecond
    } = this.state;
    return (
      <div className="app">
        <div className="pomodoro">
          <h1>Pomodoro Clock</h1>
          <BreakInterval
            breakLength={breakLength}
            handleTimerChange={this.handleTimerChange}
          />
          <SessionLength
            sessionLength={sessionLength}
            handleTimerChange={this.handleTimerChange}
          />
          <Timer
            isSession={isSession}
            timerSecond={timerSecond}
            timerMinute={timerMinute}
            breakLength={breakLength}
            updateTimerMinute={this.onUpdateTimerMinute}
            toggleInterval={this.onToggleInterval}
          />
          <div className="controls">
            <button
              id="start_stop"
              className="button"
              onClick={this.handlePlayingState}
            ></button>
            <button id="reset" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
