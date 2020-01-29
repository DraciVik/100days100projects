import React from "react";

export default function StartButton({ handleStart }) {
  return (
    <section id="startButton">
      <button type="submit" id="start" onClick={handleStart}>
        Click to start!
      </button>
    </section>
  );
}
