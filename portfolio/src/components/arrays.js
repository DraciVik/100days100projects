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
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      { name: "SCSS", url: "https://sass-lang.com/" },
      {
        name: "Flexbox",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
      },
      {
        name: "Algorithm",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Algorithm"
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://guess-the-word-balding-coder.netlify.com/",
    github:
      "https://github.com/DraciVik/100days100projects/tree/master/guess-the-word"
  },
  {
    src: Calculator,
    alt: "Reactjs calculator",
    description: "A calculator app made in Reactjs",
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      { name: "SCSS", url: "https://sass-lang.com/" },
      {
        name: "CSS Grid",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Grid"
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://react-calculator-balding-coder.netlify.com/",
    github:
      "https://github.com/DraciVik/freeCodeCamp-challenges/tree/master/Front-End-Libraries-Certification/Front-End-Libraries-Projects/calculator"
  },
  {
    src: DrumMachine,
    alt: "Drum Machine",
    description:
      "A Drum Machine made in Reactjs with 3 different types of sounds, a power button, click handlers and keyboard event listeners",
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      { name: "SCSS", url: "https://sass-lang.com/" },
      {
        name: "CSS Grid",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Grid"
      },
      {
        name: "Flexbox",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://drum-machine-balding-coder.netlify.com/",
    github:
      "https://github.com/DraciVik/freeCodeCamp-challenges/tree/master/Front-End-Libraries-Certification/Front-End-Libraries-Projects/drum-machine"
  },
  {
    src: Quotes,
    alt: "Simpsons quotes",
    description:
      "A random quote generator that pulls data from an API and then renders a random quote coupled with the quoting character",
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      {
        name: "API",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/API"
      },
      {
        name: "Flexbox",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
      },
      { name: "Twitter", url: "https://twitter.com/home" },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://simpsons-quotes-balding-coder.netlify.com/",
    github:
      "https://github.com/DraciVik/freeCodeCamp-challenges/tree/master/Front-End-Libraries-Certification/Front-End-Libraries-Projects/build-a-random-quote-machine"
  },
  {
    src: Pomodoro,
    alt: "Pomodoro clock App",
    description:
      "A countdown counter based on the 'Pomodoro' technique with increment and decrement buttons, status display, play/pause/restart buttons and an end-of-session signal",
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      {
        name: "Flexbox",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
      },
      {
        name: "CSS Grid",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Grid"
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://pomodoro-clock-balding-coder.netlify.com/",
    github:
      "https://github.com/DraciVik/100days100projects/tree/master/pomodoro-timer"
  },
  {
    src: HoverBoard,
    alt: "Hover board",
    description:
      "A board made up of divs that get a random background color on hover and revert back to normal when mouse pointer isn't on that div anymore",
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      {
        name: "Flexbox",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
      },
      {
        name: "CSS Grid",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Grid"
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://hover-board.netlify.com/",
    github:
      "https://github.com/DraciVik/100days100projects/tree/master/hover-board"
  },
  {
    src: Markdown,
    alt: "markdown previewer",
    description:
      "A Markdown previewer which takes your input from a text input box and displays the markup equivalent to it",
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      { name: "Marked", url: "https://www.npmjs.com/package/react-marked" },
      {
        name: "Flexbox",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout"
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://markdown-privewer.netlify.com/",
    github:
      "https://github.com/DraciVik/freeCodeCamp-challenges/tree/master/Front-End-Libraries-Certification/Front-End-Libraries-Projects/markdown-previewer"
  },
  {
    src: Showcase,
    alt: "project-showcase",
    description:
      "Showcase page for projects I completed durring the #100Days100Projects challenge in which I complete one project per day",
    tags: [
      { name: "Reactjs", url: "https://reactjs.org/" },
      {
        name: "CSS Grid",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Grid"
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
      }
    ],
    url: "https://100days100projects-showcase.netlify.com/",
    github:
      "https://github.com/DraciVik/100days100projects/tree/master/project-showcase"
  }
];

const navLinks = [
  {
    name: "Portfolio",
    to: "portfolio"
  },
  { name: "Contact Me", to: "contact" },
  { name: "My CV", to: "cv" }
];

export { projects, navLinks };
