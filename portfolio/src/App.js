import React from "react";
import Viktor from "./components/images/viktor.png";
import Contact from "./components/pages/Contact";
import Social from "./components/Social";
import Home from "./components/pages/Home";
import { Router, Link } from "@reach/router";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <section className="main-links">
        <img className="profilePicture" src={Viktor} alt="Owner" />
        <h1 className="profile-name">Viktor Stojanov</h1>
        <h3 className="profile-description">Front-End Web Developer</h3>
        <section className="lists">
          <ul>
            <a href="#">
              <li>
                Portfolio<span className="caret">&#10148;</span>
              </li>
            </a>
            <a href="#">
              <li>
                What I offer<span className="caret">&#10148;</span>
              </li>
            </a>
            <Link to="contact">
              <li>
                Contact Me<span className="caret">&#10148;</span>
              </li>
            </Link>
          </ul>

          <ul className="cvBlog">
            <a href="#">
              <li>
                My CV<span className="caret">&#10148;</span>
              </li>
            </a>
            <a href="#">
              <li>
                Personal Blog<span className="caret">&#10148;</span>
              </li>
            </a>
          </ul>
        </section>
        <section className="social">
          <h4>Lets get in touch</h4>
          <section className="socialLinks">
            <Social />
          </section>
        </section>
      </section>

      <main>
        <Router>
          <Home path="/" />
          <Contact path="contact" />
        </Router>
      </main>
    </div>
  );
}

export default App;
