import React from "react";
import Calculator from "./images/calculator.png";

export default function Day1() {
  return (
    <article class="card">
      <a
        href="https://react-calculator-balding-coder.netlify.com"
        target="_blank"
      >
        <img src={Calculator} alt="calculator app" />
        <section>
          <h4>React Calculator - Day: 001</h4>
        </section>
      </a>
    </article>
  );
}
