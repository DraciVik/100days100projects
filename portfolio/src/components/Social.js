import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faInstagram,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <a
        className="envelope"
        href="mailto:viktor.stojanov90@gmail.com"
        title="mail:viktor.stojanov90@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/stovik/"
        title="LinkedIin: StoVik"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="gitHub"
        href="https://github.com/dracivik"
        title="GitHub: DraciVik"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        className="twitter"
        href="https://twitter.com/DraciVik"
        title="Twitter:DraciVIk"
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/balding.coder/"
        title="IG: Balding.Coder"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </>
  );
};

export default Social;
