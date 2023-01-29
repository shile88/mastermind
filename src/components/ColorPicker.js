import "./assets/styles/ColorPicker.css";

import React from "react";

export const ColorPicker = ({ activeColor, setActiveColor, chooseColor }) => {
  return (
    <div className="colors">
      {chooseColor.map((color) => {
        const active = color === activeColor ? "active" : "";

        return (
          <div
            className={`color-holder + ${color} + ${active}`}
            key={color}
            onClick={() => setActiveColor(color)}
          ></div>
        );
      })}
    </div>
  );
};
