import React, { useState } from "react";

import { Board } from "./Board";
import { ColorPicker } from "./ColorPicker";
import Endgame from "./Endgame";
import { Header } from "./Header";

const chooseColor = ["blue", "red", "yellow", "green", "purple", "pink"];
const secretRow = chooseColor.sort(() => 0.5 - Math.random()).slice(0, 4);

export const Game = () => {
  const [activeColor, setActiveColor] = useState("");
  const [gameStatus, setGameStatus] = useState({ winner: false, loser: false });
  const [activeRow, setActiveRow] = useState(0);
  const [currentRow, setCurrentRow] = useState(["", "", "", ""]);
  const totalRow = 10;

  return (
    <div>
      <Header />
      <ColorPicker
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        chooseColor={chooseColor}
      />
      <Board
        activeColor={activeColor}
        totalRow={totalRow}
        secretRow={secretRow}
        setGameStatus={setGameStatus}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
        currentRow={currentRow}
        setCurrentRow={setCurrentRow}
      />
      <Endgame
        gameStatus={gameStatus}
        secretRow={secretRow}
      />
    </div>
  );
};
