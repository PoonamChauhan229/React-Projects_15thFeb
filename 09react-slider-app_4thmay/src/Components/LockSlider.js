import React from "react";
import './LockSlider.css'
const LockSlider = ({handleInput,slideValue}) => {
  const sliderStyle={
    apperance:"none",
    width:"300px",
    height:"50px",
    background:"rgba(188,190,188,0.5)",
    outline:"none",
    borderRadius:"25px"
  }
  return (
    <input
      type="range"
      className="slider mb-2"
      style={sliderStyle}
      onInput={handleInput}
      value={slideValue}
    />
  );
};

export default LockSlider;
