import React from "react";
import { Link } from "@reach/router";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/">
        <p>&larr;You seem lost. Come back with me.</p>
      </Link>
    </div>
  );
};

export default NotFound;
