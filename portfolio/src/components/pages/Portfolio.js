import React from "react";
import { projects } from "../projectsArray";
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
      </section>
      <section className="projects">
        {projects.map((project, index) => {
          return (
            <Project
              src={project.src}
              alt={project.alt}
              description={project.description}
              tags={project.tags}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Portfolio;
