import React from "react";
import "./ScoreLine.css";

export default function ScoreLine({ score, rank }) {
  return (
    <div id="score-line-container">
        <div id="rank"><p>{rank++}</p></div>
        <div id="score"><p>{score}</p></div>
    </div>
  );
}
