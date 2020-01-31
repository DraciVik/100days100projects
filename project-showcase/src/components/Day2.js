import React from "react";
import Background from "./images/random-background.png";

export default function Day2() {
  return (
    <article class="card">
      <a href="https://random-background.netlify.com/" target="_blank">
        <img src={Background} alt="random background app" />
        <section>
          <h4>Random Background - Day: 002</h4>
        </section>
      </a>
    </article>
  );
}
