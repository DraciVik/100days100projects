import Word from "./images/guess-the-word.png";
import Calculator from "./images/calculator.png";
import DrumMachine from "./images/drum-machine.png";
import Quotes from "./images/quote-generator.png";
import Pomodoro from "./images/pomodoro.png";
import HoverBoard from "./images/hover-board.png";
import Showcase from "./images/showcase.png";
import Markdown from "./images/markdown.png";

const projects = [
  {
    src: Word,
    alt: "guess the word game",
    description:
      "A React App in which you are given an Anagram of a word and you need to input the correct word with multiple levels of dificulty",
    tags: ["Reactjs", "SCSS", "Flexbox", "Algorithm", "HTML", "CSS"],
    url: "https://guess-the-word-balding-coder.netlify.com/"
  },
  {
    src: Calculator,
    alt: "Reactjs calculator",
    description: "A calculator app made in Reactjs",
    tags: ["Reactjs", "SCSS", "CSS Grid", "HTML", "CSS"],
    url: "https://react-calculator-balding-coder.netlify.com/"
  },
  {
    src: DrumMachine,
    alt: "Drum Machine",
    description:
      "A Drum Machine made in Reactjs with 3 different types of sounds, a power button, click handlers and keyboard event listeners",
    tags: ["Reactjs", "SCSS", "CSS Grid", "Flexbox", "HTML", "CSS"],
    url: "https://drum-machine-balding-coder.netlify.com/"
  },
  {
    src: Quotes,
    alt: "Simpsons quotes",
    description:
      "A random quote generator that pulls data from an API and then renders a random quote coupled with the quoting character",
    tags: ["Reactjs", "API", "Flexbox", "Twitter", "HTML", "CSS"],
    url: "https://simpsons-quotes-balding-coder.netlify.com/"
  },
  {
    src: Pomodoro,
    alt: "Pomodoro clock App",
    description:
      "A countdown counter based on the 'Pomodoro' technique with increment and decrement buttons, status display, play/pause/restart buttons and end-of-session signal",
    tags: ["Reactjs", "Flexbox", "CSS Grid", "HTML", "CSS"],
    url: "https://pomodoro-clock-balding-coder.netlify.com/"
  },
  {
    src: HoverBoard,
    alt: "Hover board",
    description:
      "A board made up of divs that get a random background color on hover and revert back to normal when mouse pointer isn't on that div anymore",
    tags: ["Reactjs", "Flexbox", "CSS Grid", "HTML", "CSS"],
    url: "https://hover-board.netlify.com/"
  },
  {
    src: Markdown,
    alt: "markdown previewer",
    description:
      "A Markdown previewer which takes your input from a text input box and displays the markup equivalent to it",
    tags: ["Reactjs", "Marked", "Flexbox", "HTML", "CSS"],
    url: "https://markdown-privewer.netlify.com/"
  },
  {
    src: Showcase,
    alt: "project-showcase",
    description:
      "Showcase page for projects I completed durring the #100Days100Projects challenge in which I complete one project per day",
    tags: ["Reactjs", "CSS Grid", "HTML", "CSS"],
    url: "https://100days100projects-showcase.netlify.com/"
  }
];

export { projects };
