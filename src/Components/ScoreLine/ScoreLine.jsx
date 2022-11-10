import React from "react";
import "./ScoreLine.css";

export default function ScoreLine({ score, rank }) {
  return (
    <div id="score-line-container">
        <div id="rank"><p>{rank}</p></div>
        <div id="name"><p>{score.name}</p></div>
        <div id="score"><p>{score.score}</p></div>
    </div>
  );
}
