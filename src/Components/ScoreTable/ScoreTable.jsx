import React, { useState, useEffect } from "react";
import ScoreLine from "../ScoreLine/ScoreLine";
import "./ScoreTable.css";

export default function ScoreTable({sortList, setScoreListState, randNum}) {
  const sorted = sortList()

  useEffect(() => {
    const interval = setInterval(simulateChanges, 2000);
    console.log(sorted)

    return () => clearInterval(interval);
  });

// Simulates scoring changes
  function simulateChanges() {
    setScoreListState(sorted);
    // Handicap
    for (let i=0; i<sorted.length; i++) {
        const scoreChange = (randNum(i+10, 1));
        sorted[i].score += scoreChange;
        sorted[i].scoreDiff = scoreChange;
        sorted[i].rankDiff = i;
    }
  }

  return (
    <>
    <div id="headers">
        <h3>Rank</h3>
        <h3>Rank Change</h3>
        <h3>Player Name</h3>
        <h3>Score Change</h3>
        <h3>Total Score</h3>
    </div>
    
    <div id="score-table-container">
      <div id="score-table">
        {sorted.map((score, index) => {
          return <ScoreLine score={score} key={index} rank={index + 1} />;
        })}
      </div>
    </div>
    </>
  );
}
