import React from "react";

export default function RangeSlider({ value, handleSliderChange }) {
  return (
    <section className="rangeSlider">
      <label>Choose number of letters</label>
      <section>
        <input
          id="length"
          type="range"
          name="length"
          value={value}
          min="3"
          max="7"
          onChange={handleSliderChange}
        ></input>
        <span id="rangeValue">{value}</span>
      </section>
    </section>
  );
}
