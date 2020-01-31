import React from "react";
import Word from "./images/guess-the-word.png";

export default function Day3() {
  return (
    <article class="card">
      <a
        href="https://guess-the-word-balding-coder.netlify.com/"
        target="_blank"
      >
        <img src={Word} alt="guess the word app" />
        <section>
          <h4>Guess The Word App - Day: 003</h4>
        </section>
      </a>
    </article>
  );
}
