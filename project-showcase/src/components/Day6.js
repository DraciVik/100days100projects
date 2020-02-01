import React from "react";
import Showcase from "./images/project-showcase.png";

export default function Day6() {
  return (
    <article class="card">
      <a href="#">
        <img src={Showcase} alt="Showcase page" />
        <section>
          <h4>Showcase Page - Day: 006</h4>
        </section>
      </a>
    </article>
  );
}
