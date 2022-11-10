import React from "react";
import "./ScoreLine.css";

export default function ScoreLine({ score, rank }) {
  return (
    <div id="score-line-container">
        <div id="player-rank"><p>{rank}</p></div>
        {/* <div ><img src={score.avatar} alt="profile" id="player-image"/></div> */}
        <div id="player-name"><p>{score.name}</p></div>
        <div id="player-score"><p>{score.score}</p></div>
    </div>
  );
}
