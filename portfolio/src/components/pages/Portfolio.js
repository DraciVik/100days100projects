import React from "react";
import { projects } from "../arrays";
import Project from "../Project";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <section className="portoflio-description">
        <h2>PORTFOLIO</h2>
        <p>
          My projects are listed below.{" "}
          <strong>
            All the Front End for these projects was done by me including
            styling and JavaScript logic.
          </strong>
        </p>
        <br></br>
        <hr />
      </section>
      <section className="projects">
        {projects.map((project, index) => {
          return (
            <Project
              src={project.src}
              alt={project.alt}
              description={project.description}
              tags={project.tags}
              url={project.url}
              key={index}
              github={project.github}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Portfolio;
