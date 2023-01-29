import "./assets/styles/Endgame.css";

import React from "react";

const Endgame = ({ gameStatus, secretRow}) => {

  return (
    <div>
      {gameStatus.loser && (
        <div>
          <h2 className="msg">You lost!</h2>
          <div className="solution">
            <p>Solution:</p>
            <div>
              {secretRow.map((value, index) => {
                return (
                  <div
                    className="color-holder"
                    key={index}
                    style={{ backgroundColor: value }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {gameStatus.winner && <h3>You won!</h3>}
      {(gameStatus.winner || gameStatus.loser) && (
        <button className="restart" onClick={()=>window.location.reload(false)}>
          Play again?
        </button>
      )}
    </div>
  );
};

export default Endgame;
