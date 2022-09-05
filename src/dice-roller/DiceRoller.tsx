import React, { useState } from "react";
import Die, { DieValue } from "./Die";

const initialState = {
  die1: DieValue.skull,
  die2: DieValue.shield,
  die3: DieValue.skull,
  die4: DieValue.symbol,
  rolling: false,
};
const sides = [
  DieValue.skull,
  DieValue.skull,
  DieValue.skull,
  DieValue.shield,
  DieValue.shield,
  DieValue.symbol,
];
export function DiceRoller() {
  const [state, setState] = useState(initialState);

  const rollDice = () => {
    setState({
      // Changing state upon click
      die1: sides[Math.floor(Math.random() * sides.length)],
      die2: sides[Math.floor(Math.random() * sides.length)],
      die3: sides[Math.floor(Math.random() * sides.length)],
      die4: sides[Math.floor(Math.random() * sides.length)],
      rolling: true,
    });
    // Start timer of one sec when rolling start
    setTimeout(() => {
      // Set rolling to false again when time over
      setState((prevState) => ({ ...prevState, rolling: false }));
    }, 300);
  };

  const btnClassName = state.rolling ? "RollDice-rolling" : "";
  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die face={state.die1} rolling={state.rolling} />
        <Die face={state.die2} rolling={state.rolling} />
        <Die face={state.die3} rolling={state.rolling} />
        <Die face={state.die4} rolling={state.rolling} />
      </div>
      <button
        className={btnClassName}
        disabled={state.rolling}
        onClick={rollDice}
      >
        {state.rolling ? "Rolling" : "Roll Dice!"}
      </button>
    </div>
  );
}

export default DiceRoller;
