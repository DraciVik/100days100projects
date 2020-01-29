import React from "react";

export default function Form({ userWord, handleUserInput, handleSubmit }) {
  return (
    <form id="userInput">
      <label className="inputLabel">Enter correct word:</label>

      <input
        className="neutral"
        type="text"
        value={userWord}
        onChange={handleUserInput}
        placeholder="Enter the correct word"
      ></input>
      <button type="submit" value="Submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
