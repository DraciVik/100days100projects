import React from "react";

class Project extends React.Component {
  render() {
    const { src, alt, description, tags, url, github } = this.props;
    return (
      <section className="container">
        <img src={src} alt={alt}></img>
        <div className="overlay">
          <div className="innerItems">
            <p>{description}</p>
            <div id="tags">
              {tags.map((tag, index) => (
                <a
                  className="tag"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={tag.url}
                  key={index}
                >
                  <span>{tag.name}</span>
                </a>
              ))}
            </div>
            <div className="project-buttons">
              <a href={url} rel="noreferrer noopener" target="_blank">
                <button type="button">Try it out</button>
              </a>
              <a href={github} rel="noreferrer noopener" target="_blank">
                <button type="button">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
