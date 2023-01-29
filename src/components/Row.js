import "./assets/styles/Row.css";

import React, { useEffect, useState } from "react";

import { Peg } from "./Peg";

export const Row = ({
  id,
  activeColor,
  secretRow,
  activeRow,
  setActiveRow,
  setGameStatus,
  currentRow,
  setCurrentRow
}) => {
  
  const [disabled, setDisabled] = useState(true);
  const [feedback, setFeedback] = useState(["", "", "", ""]);

  useEffect(() => {
    if (currentRow.every((element) => element !== "") && id === activeRow) { 
      setDisabled(false);
    }
  }, [currentRow, id, activeRow]);

  const checkColors = (currentRow, secretRow) => {
    const newFeedback = [...feedback];
    const newSecretRow = [...secretRow];
    let winner = 0;
    for (let i = 0; i < currentRow.length; i++) {
      if (currentRow[i] === newSecretRow[i]) {
        newFeedback[i] = "correct";
        currentRow[i] = -1;
        newSecretRow[i] = -1;
        winner = winner + 1;
        if(winner === 4) {
          setGameStatus({winner: true})
          setDisabled(true);
        }
      }
    }
    for (let i = 0; i < currentRow.length; i++) {
      let notIncluded = true;
      if (newSecretRow[i] === -1) continue;
      for (let j = 0; j < currentRow.length; j++) {
        if (currentRow[j] === -1) continue;
        else if (newSecretRow[i] === currentRow[j]) {
          newFeedback[i] = "sort of";
          currentRow[j] = -1;
          notIncluded = false;
          break;
        }
      }
      if (notIncluded) newFeedback[i] = "wrong";
     
    }
    newFeedback.sort();
    setFeedback(newFeedback);
    setDisabled(true);
    setCurrentRow(["", "", "", ""])
    setActiveRow(activeRow + 1);
    if(activeRow === 9) {
      setGameStatus({loser: true})
    }
  };

  return (
    <div className={`row ${activeRow === id ? "active" : "disabled"}`} >
      <div className="pegs">
        {currentRow.map((value, i) => {
          return (
            <Peg
              key={i}
              activeColor={activeColor}
              currentRow={currentRow}
              idPeg={i}
              setCurrentRow={setCurrentRow}
            />
          );
        })}
      </div>

      <button
        disabled={disabled}
        onClick={() => checkColors(currentRow, secretRow)}
      >
        check
      </button>
      <div className="hints">
        {feedback.map((value, index) => {
          let hintColor = "";
          if (value === "wrong") {
            hintColor = "white";
          }
          if (value === "correct") {
            hintColor = "green";
          }
          if (value === "sort of") {
            hintColor = "yellow";
          }
          return <div key={index} className="hint" id={hintColor}></div>;
        })}
      </div>
    </div>
  );
};
