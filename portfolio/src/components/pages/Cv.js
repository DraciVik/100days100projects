import React from "react";
import CvImage from "../images/cv-viktor.jpg";

const Cv = () => {
  return (
    <div id="cv-container">
      <section id="cv">
        <header className="mainInfo">
          <img src={CvImage} alt="Viktor"></img>
          <section className="description">
            <h1>VIKTOR STOJANOV</h1>
            <h2>A Front-End Web Developer</h2>
            <br></br>
            <p>A web developer with a background in financial managament.</p>
            <p>
              Looking for opportunities to sharpen my Front-End skills as well
              as evolve into a Full-Stack dev with the help of a mentorship.
            </p>
          </section>
          <section className="cv-main-links">
            <a
              href="mailto:viktor.stojanov90@gmail.com"
              title="mail:viktor.stojanov90@gmail.com"
            >
              viktor.stojanov90@gmail.com
            </a>
            <span className="hidden"> / </span>
            <a
              href="https://www.linkedin.com/in/stovik/"
              title="LinkedIin: StoVik"
              target="_blank"
              rel="noreferrer noopener"
            >
              linkedin.com/in/stovik
            </a>
            <span className="hidden"> / </span>
            <a
              href="https://www.github.com/dracivik"
              title="GitHub: DraciVik"
              target="_blank"
              rel="noreferrer noopener"
            >
              github.com/dracivik
            </a>
          </section>
        </header>
        <section className="skills">
          <section className="cv-skills">
            <h3>Skills</h3>
            <ul>
              <li>
                Front-end: JavaScript, React, HTML/HTML5, CSS/CSS3, SCSS,
                Bootstrap, Reactstrap, Git/GitHub, Photoshop.
              </li>
              <li>Attentive to UI/UX details and high code quality.</li>
              <li>
                Open source contributor: Contributed to{" "}
                <a
                  href="https://github.com/mozilla/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Mozilla
                </a>
                ,{" "}
                <a
                  href="https://github.com/gatsbyjs/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Gatsbyjs
                </a>{" "}
                and
                <a
                  href="https://github.com/FrontendMasters"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Frontend Masters
                </a>{" "}
                codebase and I actively upload my projects on{" "}
                <a
                  href="https://github.com/dracivik"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
                .
              </li>
              <li>
                Communication skills: Developed trough my work history in the
                USA, Spain and Macedonia.
              </li>
            </ul>
          </section>
        </section>

        <section className="experience">
          <h3>Experience</h3>
          <section className="selfTaught">
            <section className="self-taught-timeline">
              <h4 className="timeline">SELF-TAUGHT</h4>
            </section>
            <section className="cv-projects-description">
              <h4 className="desc">
                I have completed projects with vanilla JavaScript, HTML, CSS as
                well as projects with the help of frameworks and libraries like
                React.js, SCSS and Bootstrap.
              </h4>
              <p>Recent projects:</p>
              <ul>
                <li>
                  <a
                    href="https://react-calculator-balding-coder.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Calculator App
                  </a>
                  : Made with React, HTML, SCSS and utilized CSS Grid.
                </li>
                <li>
                  <a
                    href="https://guess-the-word-balding-coder.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Guess The Word game:
                  </a>{" "}
                  Made with React, HTML, SCSS, CSS Flexbox and utilizes an
                  anagram algorithm. It gives you an anagram of a random word
                  with length based on user input and buttons that provide
                  different words, different anagram of the same word and a user
                  input.
                </li>
                <li>
                  <a
                    href="https://drum-machine-balding-coder.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Drum Machine App:
                  </a>{" "}
                  Made with React, HTML, SCSS, CSS Grid and Flexbox. It has a
                  power button, three different types of sounds that you can
                  choose from, buttons that respond to click events as well as
                  keyboard presses.
                </li>
                <li>
                  <a
                    href="https://simpsons-quotes-balding-coder.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Simpsons quotes generator:{" "}
                  </a>
                  Made with React, HTML, CSS, CSS Flexbox. It fetches data from
                  an API and renders a random quote from it coupled with the
                  character that said it. You can also tweet the quote by
                  clicking on the provided button.
                </li>
                <li>
                  <a
                    href="https://pomodoro-clock-balding-coder.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Pomodoro Clock App:{" "}
                  </a>
                  Made with React, HTML, CSS, CSS Grid and Flexbox. A countdown
                  counter based on the 'Pomodoro' technique with increment and
                  decrement buttons, status display, play/pause/restart buttons
                  and an end-of-session signal.
                </li>
                <li>
                  <a
                    href="https://hover-board.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Hover Board App:
                  </a>{" "}
                  Made with React, HTML, CSS, CSS Grid and Flexbox. App responds
                  on 'mouseover' events and renders a random background to the
                  mouseovered div and upon leaving ('mouseout') event it returns
                  the default background color after a short animation delay.
                </li>
                <li>
                  <a
                    href="https://markdown-privewer.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Markdown Previewer
                  </a>{" "}
                  Made with React, HTML, CSS, CSS Flexbox. Uses a 'marked' npm
                  module that parses the inputed data (in this case from a text
                  area) and displays it in a container.
                </li>
                <li>
                  <a
                    href="https://100days100projects-showcase.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    100Days100Projects showcase:
                  </a>{" "}
                  Made with React, HTML, CSS, CSS Grid. A page where I showcase
                  projects finished durring the 100Days100projects challenge
                  where I finish one project per day and share it on social
                  media.
                </li>
              </ul>
            </section>
          </section>
          <section className="panevski">
            <section className="panevski-timeline">
              <h4 className="timeline">PANEVSKI &amp; SINOVI</h4>
              <p className="timeDate">
                <time dateTime="2016-12-01">Dec 2016</time> -{" "}
                <time dateTime="2019-05-01">May 2019</time>
              </p>
              <p className="location">Location: Kumanovo, RM</p>
              <a
                href="http://panevski.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                panevski.com
              </a>
            </section>
            <section className="panevski-description">
              <h3>Marketing, Administration and Sales</h3>

              <h4>
                Took care of day-to-day operations, co-operated company's social
                media, worked directly with clients and suppliers.
              </h4>
              <ul>
                <li>
                  Assisted clients regarding their needs in an informative and
                  helpful way.
                </li>
                <li>
                  Establish and maintain a professional relationship with repeat
                  clients and suppliers to the company.
                </li>
                <li>
                  Operated the whole process, from order trough preparation for
                  delivery.
                </li>
                <li>
                  Completed a variety of tasks for the owner in programs such as
                  Microsoft Office, Adobe Photoshop, Adobe Reader, Corel Draw,
                  AutoCAD.
                </li>
                <li>
                  Administering advertising, accounts, inventory / purchasing
                  requirements.
                </li>
                <li>
                  Help in the process of formulating and writing of offers for
                  potential clients.
                </li>
                <li>
                  Daily E-mail communication in accordance to requirements.
                </li>
              </ul>
            </section>
          </section>

          <section className="daybor">
            <section className="daybor-timeline">
              <h4 className="timeline">Laboratorio Dental Daybor</h4>
              <p className="timeDate">
                <time dateTime="2015-12-01">Dec 2015</time> -{" "}
                <time dateTime="2016-09-01">Sep 2016</time>
              </p>
              <p className="location">Location: Madrid, Spain</p>
            </section>
            <section className="daybor-description">
              <h3>Administration and 3D model scanning and touch-up</h3>

              <h4>
                Took care of daily invoices, data entry, model scanning for 3D
                work and software maintenance
              </h4>
              <ul>
                <li>Data entry of daily invoices, offers, negotiations.</li>
                <li>
                  Scanning a denture model and converting to a 3D model for
                  future touch-up.
                </li>
                <li>
                  Took care of their operating system and relevant programs with
                  weekly diagnostics and appropriate actions based on results.
                </li>
              </ul>
            </section>
          </section>
          <section className="usa">
            <section className="usa-timeline">
              <h4 className="timeline">Variety of student jobs</h4>
              <p className="timeDate">Summer of 2011-2014</p>
              <p className="location">Location: NJ &amp; NH, USA</p>
            </section>
            <section className="usa-description">
              <h3>Variety of student summer jobs:</h3>

              <ul>
                <li>
                  Shift supervisor and barista at{" "}
                  <a
                    href="https://shrivers.com/shrivers-gelato/"
                    target="_blanl"
                  >
                    Schriver's Gelato.
                  </a>
                </li>
                <li>
                  Hotel maintenance at{" "}
                  <a
                    href="https://thegardensplaza.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    The Gardens Plaza.
                  </a>
                </li>
                <li>
                  Server at{" "}
                  <a
                    href="https://weathervaneseafoods.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Weathervane seafood restaurant.
                  </a>
                </li>
                <li>
                  Sales associate at{" "}
                  <a
                    href="https://www.kohls.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Kohl's.
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className="education">
          <h3>Education</h3>
          <section className="eccf">
            <section className="eccf-timeline">
              <h4 className="timeline">"Ss. Cyril and Methodius University"</h4>
              <p className="timeDate">2009-2013</p>
              <a href="http://eccf.ukim.edu.mk/" target="blank">
                eccf.ukim.edu.mk
              </a>
            </section>
            <section className="eccf-description">
              <h3>BSc in Financial Management</h3>

              <ul>
                <li>Active member of External Relations in AIESEC - Skopje</li>
                <li>Active volunteer at Red Cross - Kumanovo</li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Cv;
