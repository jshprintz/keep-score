import React, { useState } from "react";
import ScoreLine from "../ScoreLine/ScoreLine";
import "./ScoreTable.css";

export default function ScoreTable() {
  const [scoreListState, setScoreListState] = useState([]);

  getInitialScores();

  function getInitialScores() {
    if (scoreListState.length < 20) {
      setScoreListState((oldState) => [...oldState, randomScore()]);
      console.log(scoreListState.length);
    }
  }

  function randomScore() {
    return Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
  }

  return (
    <div id="score-table-container">
      <div id="score-table">
        {scoreListState.map((score, index) => {
          return <ScoreLine score={score} key={score} rank={index+1} />;
        })}
      </div>
    </div>
  );
}
