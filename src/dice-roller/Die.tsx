import React from "react";
import { GiAbstract041, GiDaemonSkull, GiShield } from "react-icons/gi";
import "./Die.css";
import "./DiceRoller.css";

export enum DieValue {
  shield = "shield",
  skull = "skull",
  symbol = "symbol",
}

type Props = {
  face: DieValue;
  rolling: boolean;
};

export default function Die({ face, rolling }: Props) {
  if (face === DieValue.shield) {
    return (
      <div>
        <GiShield
          style={{ color: "blue" }}
          className={`Die ${rolling ? "Die-shaking" : ""}`}
        ></GiShield>
      </div>
    );
  }
  if (face === DieValue.skull) {
    return (
      <div>
        <GiDaemonSkull
          style={{ color: "red" }}
          className={`Die ${rolling ? "Die-shaking" : ""}`}
        ></GiDaemonSkull>
      </div>
    );
  }
  // symbol
  return (
    <div>
      <GiAbstract041
        style={{ color: "silver" }}
        className={`Die ${rolling ? "Die-shaking" : ""}`}
      ></GiAbstract041>
    </div>
  );
}
