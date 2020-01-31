import React from "react";
import Pomodoro from "./images/pomodoro-clock.png";

export default function Day4() {
  return (
    <article class="card">
      <a
        href="https://pomodoro-clock-balding-coder.netlify.com/"
        target="_blank"
      >
        <img src={Pomodoro} alt="pomodoro clock app" />
        <section>
          <h4>Pomodoro Clock App - Day: 004</h4>
        </section>
      </a>
    </article>
  );
}
