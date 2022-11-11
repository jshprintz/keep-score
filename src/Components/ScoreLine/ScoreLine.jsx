import React from "react";
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import "./ScoreLine.css";

export default function ScoreLine({ score, rank }) {
    const rankChange = (rank - score.rankDiff -1) * -1;



  return (
    <div id="score-line-container">
      <div id="left-group-table">
        <div id="player-rank"><p>{rank}</p></div>
        { score.scoreDiff ? (
        <div id="player-rank-diff-icon">{ rankChange < 0 ? <ImArrowDown color="red" id="arrow-down"/> : rankChange > 0 ? <ImArrowUp color="green" id="arrow-up"/> : null} </div>
        ) : null }
        { score.scoreDiff ? (
        <div id="player-rank-diff"><p>{rankChange}</p></div>
        ) : null }
        </div>
        {/* <div ><img src={score.avatar} alt="profile" id="player-image"/></div> */}
        <div id="player-name"><p>{score.name}</p></div>
        <div id="right-group-table">
        { score.scoreDiff ? (

        <div id="player-scoreDiff"><p>+ {score.scoreDiff}</p></div>
        ) : null }
        <div id="player-score"><p>{score.score}</p></div>
        </div>
    </div>
  );
}
