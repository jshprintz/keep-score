import React, { useEffect } from "react";
import ScoreLine from "../ScoreLine/ScoreLine";
import "./ScoreTable.css";

export default function ScoreTable() {
  const scoreList = [];

  useEffect(() => {
    getInitialScores();
  });

  function getInitialScores() {
    while (scoreList.length < 20) {
      scoreList.push(randomScore);
    }
  }

  function randomScore() {
    return Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
  }

  return (
    <div id="score-table-container">
      <div id="score-table">
        {scoreList.map((score) => {
            return (
                <ScoreLine score={score} />
            )
        })}
      </div>
    </div>
  );
}
