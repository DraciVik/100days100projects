/* eslint-disable eqeqeq */
import React from "react";
import { buzzwords, stringPermutations } from "./components/buzzwords";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartButton from "./components/StartButton";
import AnagramValue from "./components/AnagramValue";
import RangeSlider from "./components/RangeSlider";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      possibleWords: [],
      wordLength: "4",
      currentWord: "",
      currentAnagram: "",
      value: "4",
      userWord: "",
      permutations: []
    };
  }

  componentDidMount() {
    const singleBuzzwords = buzzwords.filter(
      value => value.length == this.state.wordLength
    );
    let length = singleBuzzwords.length;
    let randomNumber = Math.floor(Math.random() * length);
    let currentWord = singleBuzzwords[randomNumber];
    this.setState({
      currentWord,
      possibleWords: singleBuzzwords
    });
  }

  handleNewWord = () => {
    const { possibleWords, currentWord, currentAnagram } = this.state;
    if (currentAnagram) {
      const randomIndexNumber = Math.floor(
        Math.random() * possibleWords.length
      );

      const getRandomNewWord = () => {
        return possibleWords[randomIndexNumber];
      };

      let randomNewWord;

      randomNewWord = getRandomNewWord();

      let permutations = stringPermutations(randomNewWord);

      const permutationsLength = permutations.length;
      let randomPermutation = Math.floor(
        Math.random() * (permutationsLength - 1) + 1
      );
      console.log(permutations);

      if (randomNewWord !== currentWord) {
        this.setState({
          currentWord: randomNewWord,
          permutations,
          currentAnagram: permutations[randomPermutation]
        });
      }
    }
  };

  handleStart = () => {
    const { possibleWords } = this.state;
    const randomIndexNumber = Math.floor(Math.random() * possibleWords.length);
    let newCurrentWord = possibleWords[randomIndexNumber];
    if (this.state.permutations.length === 0) {
      let permutations = stringPermutations(newCurrentWord);

      const permutationsLength = permutations.length;
      let randomPermutation = Math.floor(
        Math.random() * (permutationsLength - 1) + 1
      );

      this.setState({
        currentWord: newCurrentWord,
        permutations,
        currentAnagram: permutations[randomPermutation]
      });
    }
  };

  handleRearange = () => {
    const { permutations } = this.state;
    const permutationsLength = permutations.length;

    let randomPermutation =
      permutations[Math.floor(Math.random() * (permutationsLength - 1) + 1)];
    this.setState({
      currentAnagram: randomPermutation
    });
  };

  handleSliderChange = e => {
    const singleBuzzwords = buzzwords.filter(
      word => word.indexOf(" ") === -1 && word.length == e.target.value
    );
    console.log(singleBuzzwords);

    this.setState({
      possibleWords: singleBuzzwords,
      value: e.target.value,
      wordLength: e.target.value
    });
  };

  handleUserInput = e => {
    this.setState({
      userWord: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userWord = this.state.userWord.toLowerCase();
    const { currentWord } = this.state;
    let inputLabel = document.querySelector(".inputLabel");
    let wordInput = document.querySelector(".neutral");

    // If user entered the wrong word
    if (userWord !== currentWord) {
      inputLabel.textContent = "Try again please!";
      inputLabel.classList.add("red");
      wordInput.classList.add("wrong");
      wordInput.addEventListener(
        "animationend",
        function() {
          wordInput.classList.remove("wrong");
          inputLabel.classList.remove("green");
        },
        { once: true }
      );
    } else {
      //If correct
      inputLabel.textContent = "CONGRATULATIONS!";

      wordInput.classList.add("correct");
      inputLabel.classList.add("green");

      wordInput.addEventListener(
        "animationend",
        function() {
          wordInput.classList.remove("correct");
        },
        { once: true }
      );
    }
  };

  render() {
    const { value, currentAnagram } = this.state;
    return (
      <div className="App">
        <Header />
        <StartButton handleStart={this.handleStart} />
        <main>
          <section className="anagramSlider">
            <AnagramValue
              currentAnagram={currentAnagram}
              handleRearange={this.handleRearange}
              handleNewWord={this.handleNewWord}
            />
            <RangeSlider
              handleSliderChange={this.handleSliderChange}
              value={value}
            />
          </section>
          <form id="userInput">
            <label className="inputLabel">Enter correct word:</label>

            <input
              className="neutral"
              type="text"
              value={this.state.userWord}
              onChange={this.handleUserInput}
              placeholder="Enter the correct word"
            ></input>
            <button type="submit" value="Submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
