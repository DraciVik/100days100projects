import React from "react";
import HoverBoard from "./images/hover-board.png";

export default function Day4() {
  return (
    <article class="card">
      <a href="https://hover-board.netlify.com/" target="_blank">
        <img src={HoverBoard} alt="hover board app" />
        <section>
          <h4>Hover Board App - Day: 005</h4>
        </section>
      </a>
    </article>
  );
}
