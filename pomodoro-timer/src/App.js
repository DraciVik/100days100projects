import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="break">
        <div id="break-length">5</div>
        <div id="break-label">Break Length</div>
        <div id="break-decrement"></div>
        <div id="break-increment"></div>
      </div>
      <div class="session">
        <div id="session-length">25</div>
        <div id="session-length">Session Length</div>
        <div id="break-decrement"></div>
        <div id="break-increment"></div>
      </div>
      <div class="timer">
        <div id="timer-label">Session</div>
        <div id="time-left">Time left</div>
      </div>
      <div class="controls">
        <div id="start_stop"></div>
        <div id="reset"></div>
      </div>
    </div>
  );
}

export default App;
