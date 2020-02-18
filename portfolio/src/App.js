import React from "react";
import Menu from "./components/Menu";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import NotFound from "./components/pages/NotFound";
import Cv from "./components/pages/Cv";

import { Router } from "@reach/router";
import "./App.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleMenuClick = e => {
    e.currentTarget.classList.toggle("change");
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleLinkClick = () => {
    let hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("change");
    this.setState({ menuOpen: false });
  };
  render() {
    const { menuOpen } = this.state;
    if (menuOpen) {
      return (
        <div
          className="App"
          style={{ gridTemplateRows: "100%", transition: "height 0.3s ease" }}
        >
          <aside className="main-links">
            <Menu
              handleMenuClick={this.handleMenuClick}
              handleLinkClick={this.handleLinkClick}
              menuOpen={this.state.menuOpen}
            />
          </aside>

          <main>
            <Router>
              <Home path="/" />
              <Contact path="contact" />
              <Portfolio path="portfolio" />
              <NotFound default />
              <Cv path="/cv" />
            </Router>
          </main>
        </div>
      );
    }
    return (
      <div className="App">
        <aside className="main-links">
          <Menu
            handleMenuClick={this.handleMenuClick}
            handleLinkClick={this.handleLinkClick}
            menuOpen={this.state.menuOpen}
          />
        </aside>

        <main>
          <Router>
            <Home path="/" />
            <Contact path="contact" />
            <Portfolio path="portfolio" />
            <NotFound default />
            <Cv path="/cv" />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
