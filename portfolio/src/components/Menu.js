import React from "react";
import { Link } from "@reach/router";
import Viktor from "./images/viktor.jpg";
import { navLinks } from "./arrays";
import Social from "./Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Menu extends React.Component {
  render() {
    let { menuOpen } = this.props;

    if (menuOpen) {
      return (
        <div id="menu">
          <section className="profile">
            <Link to="/">
              <img className="profilePicture" src={Viktor} alt="Owner" />
              <h1 className="profile-name">Viktor Stojanov</h1>
              <h3 className="profile-description">Front-End Web Developer</h3>
            </Link>
          </section>

          <section className="lists">
            <div className="hamburger" onClick={this.props.handleMenuClick}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            {/* <FontAwesomeIcon
              className="hamburger"
              icon={faBars}
              onClick={this.props.handleMenuClick}
            ></FontAwesomeIcon> */}
            <ul
              style={{ visibility: "visible", transition: "height 0.3s ease" }}
              className="navigation-ul"
            >
              {navLinks.map(link => {
                return (
                  <Link
                    key={link.to}
                    onClick={this.props.handleLinkClick}
                    to={link.to}
                  >
                    <li>
                      {link.name}
                      <span className="caret">&#10148;</span>
                    </li>
                  </Link>
                );
              })}

              <a href="https://medium.com/@viktor.stojanov90">
                <li>
                  Personal Blog <span id="blogWork">(work in progress)</span>
                  <span className="caret">&#10148;</span>
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
        </div>
      );
    }

    return (
      <div id="menu">
        <section className="profile">
          <Link to="/">
            <img className="profilePicture" src={Viktor} alt="Owner" />
            <h1 className="profile-name">Viktor Stojanov</h1>
            <h3 className="profile-description">Front-End Web Developer</h3>
          </Link>
        </section>

        <section className="lists">
          <div className="hamburger" onClick={this.props.handleMenuClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {/* <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            onClick={this.props.handleMenuClick}
          ></FontAwesomeIcon> */}
          <ul className="navigation-ul">
            {navLinks.map(link => {
              return (
                <Link
                  key={link.to}
                  onClick={this.props.handleLinkClick}
                  to={link.to}
                >
                  <li>
                    {link.name}
                    <span className="caret">&#10148;</span>
                  </li>
                </Link>
              );
            })}

            <a href="https://medium.com/@viktor.stojanov90">
              <li>
                Personal Blog <span id="blogWork">(work in progress)</span>
                <span className="caret">&#10148;</span>
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
      </div>
    );
  }
}

export default Menu;
