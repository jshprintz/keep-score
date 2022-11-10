import React from "react";
import "./ScoreLine.css";

export default function ScoreLine({score, rank}) {
  return (
    <div id="score-line-container">
      <div id="score-line">
        <p>{rank++} The score is {score}</p>
      </div>
    </div>
  );
}
