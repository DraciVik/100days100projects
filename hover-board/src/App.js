import React from "react";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const myDiv = document.querySelectorAll(".div");
    myDiv.forEach(div => {
      div.addEventListener("mouseover", this.addRandomBackground);
      div.addEventListener("mouseout", this.removeRandomBackground);
    });
  }

  removeRandomBackground = e => {
    let currentDiv = e.currentTarget;
    // e.currentTarget.transition: "2s ease"
    // currentDiv.style.transition = "2s ease";
    currentDiv.style.background = "#dec8fa";
    // this.removeTransition(e);
  };
  removeTransition = e => {
    let currentDiv = e.currentTarget;
    // e.currentTarget.transition: "2s ease"
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

  consoleThis = () => {
    return console.log("hi");
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
      </div>
    );
  }
}

export default App;
