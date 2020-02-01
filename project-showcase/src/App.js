/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Day4 from "./components/Day4";
import Day5 from "./components/Day5";
import Day6 from "./components/Day6";
import Day7 from "./components/Day7";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  const myArr = new Array(92).fill(5);
  return (
    <div className="App">
      <header className="shocaseHeader">
        <h1>
          <span className="blue">#100</span>Days
          <span className="blue">100</span>Projects - project showcase
        </h1>
      </header>
      <main id="container">
        <Day1 />
        <Day2 />
        <Day3 />
        <Day4 />
        <Day5 />
        <Day6 />
        <Day7 />
        {myArr.map((value, index) => {
          return (
            <article key={index} class="card">
              <a href="#" target="_blank">
                <img
                  src="https://source.unsplash.com/random/300x400"
                  alt="randomPhoto"
                />
                <section>
                  <h4>Placeholder image - 00{index + 8}</h4>
                </section>
              </a>
            </article>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
