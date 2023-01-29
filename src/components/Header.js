import "./assets/styles/Header.css";

import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);

  const showRules = () => {
    setShow(show ? false : true);
  };

  return (
    <div className="rules">
      <h1>MasterMind</h1>
      {show && <h3 onClick={showRules}>Show Rules</h3>}
      {!show && <h3 onClick={showRules}>Hide Rules</h3>}
      <p hidden={show}>
        Try to guess the pattern in both order and color within ten turns. After
        submitting a row, a small green square is shown for each circle in a
        correct position and color. A yellow square indicates the existence of a
        correct color in an incorrect position.
      </p>
    </div>
  );
};

export { Header };
