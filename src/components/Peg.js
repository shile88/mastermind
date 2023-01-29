import "./assets/styles/Peg.css";

import React, { useState } from "react";

export const Peg = ({ activeColor, setCurrentRow, idPeg, currentRow }) => {
  const [color, setColor] = useState("");

  const clickPeg = (color, index) => {
    setColor(color);
    const newRow = [...currentRow];
    newRow[index] = activeColor;
    setCurrentRow(newRow);
  };

  return (
    <div
      className="peg"
      style={{ backgroundColor: color }}
      onClick={() => clickPeg(activeColor, idPeg)}
    ></div>
  );
};
