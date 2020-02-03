import React from "react";
import Viktor from "./components/images/viktor.png";
import Contact from "./components/pages/Contact";
import Social from "./components/Social";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import { Router, Link } from "@reach/router";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <aside className="main-links">
        <Link to="/">
          <img className="profilePicture" src={Viktor} alt="Owner" />
          <h1 className="profile-name">Viktor Stojanov</h1>
          <h3 className="profile-description">Front-End Web Developer</h3>
        </Link>
        <section className="lists">
          <ul>
            <Link to="portfolio">
              <li>
                Portfolio<span className="caret">&#10148;</span>
              </li>
            </Link>
            <Link to="offer">
              <li>
                What I offer<span className="caret">&#10148;</span>
              </li>
            </Link>
            <Link to="contact">
              <li>
                Contact Me<span className="caret">&#10148;</span>
              </li>
            </Link>
          </ul>

          <ul className="cvBlog">
            <Link to="cv">
              <li>
                My CV<span className="caret">&#10148;</span>
              </li>
            </Link>
            <Link to="blog">
              <li>
                Personal Blog<span className="caret">&#10148;</span>
              </li>
            </Link>
          </ul>
        </section>
        <section className="social">
          <h4>Lets get in touch</h4>
          <section className="socialLinks">
            <Social />
          </section>
        </section>
      </aside>

      <main>
        <Router>
          <Home path="/" />
          <Contact path="contact" />
          <Portfolio path="portfolio" />
        </Router>
      </main>
    </div>
  );
}

export default App;
