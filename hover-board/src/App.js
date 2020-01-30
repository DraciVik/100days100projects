import React from "react";
import "./App.css";
import Footer from "./components/Footer";

class App extends React.Component {
  componentDidMount() {
    const myDiv = document.querySelectorAll(".div");
    myDiv.forEach(div => {
      div.addEventListener("mouseover", this.addRandomBackground);
      div.addEventListener("mouseout", this.removeRandomBackground);
      div.addEventListener("touchmove", this.addRandomBackground);
      div.addEventListener("touchend", this.removeRandomBackground);
    });
  }

  removeRandomBackground = e => {
    let currentDiv = e.currentTarget;

    currentDiv.style.background = "#dec8fa";
  };
  removeTransition = e => {
    let currentDiv = e.currentTarget;

    currentDiv.style.transition = "none";
  };

  addRandomBackground = e => {
    let randomRGBValue1 = Math.floor(Math.random() * 256);
    let randomRGBValue2 = Math.floor(Math.random() * 256);
    let randomRGBValue3 = Math.floor(Math.random() * 256);

    let backgroundValue = `rgb(${randomRGBValue1}, ${randomRGBValue2}, ${randomRGBValue3})`;
    let currentDiv = e.currentTarget;
    currentDiv.style.background = backgroundValue;
  };

  render() {
    let arrayOfDivs = new Array(480).fill(5);
    return (
      <div className="App">
        <main id="container">
          {arrayOfDivs.map((div, index) => (
            <div className="div" key={index}></div>
          ))}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
