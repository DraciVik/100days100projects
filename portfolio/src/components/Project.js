import React from "react";

class Project extends React.Component {
  render() {
    const { src, alt, description, tags } = this.props;
    return (
      <section className="container">
        <img src={src} alt={alt}></img>
        <div className="overlay">
          <div className="innerItems">
            <p>{description}</p>
            <div id="tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <button type="button">Try it out</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
