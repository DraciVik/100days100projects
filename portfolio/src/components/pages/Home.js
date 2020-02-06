import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <section id="home">
      <section className="intro">
        <h1>Hi, I'm Viktor</h1>
        <p>A Front End Web Developer </p>
      </section>
      <Link to="portfolio">
        <button type="button">PORTFOLIO</button>
      </Link>
    </section>
  );
};

export default Home;
