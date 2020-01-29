import React from "react";

export default function AnagramValue({
  currentAnagram,
  handleRearange,
  handleNewWord
}) {
  return (
    <div className="anagramValue">
      <p>
        Anagram:{" "}
        <span id="anagram">
          {currentAnagram ? currentAnagram : "Lets play!"}
        </span>
      </p>
      <div className="buttons">
        <button onClick={handleRearange} type="button" value="rearange">
          Rearange
        </button>
        <button value="newWord" onClick={handleNewWord}>
          Get new word
        </button>
      </div>
    </div>
  );
}
