import "./assets/styles/Board.css";

import React from "react";
import { Row } from "./Row";

export const Board = ({
  activeColor,
  totalRow,
  secretRow,
  setGameStatus,
  activeRow,
  setActiveRow,
  currentRow,
  setCurrentRow,
}) => {
  let rows = [];

  for (let i = 0; i < totalRow; i++) {
    rows.push(
      <Row
        key={i}
        id={i}
        activeColor={activeColor}
        secretRow={secretRow}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
        setGameStatus={setGameStatus}
        currentRow={currentRow}
        setCurrentRow={setCurrentRow}
      />
    );
  }

  return <div className="board">{rows}</div>;
};
