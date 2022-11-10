import React, { useEffect, useState } from "react";
import ScoreLine from "../ScoreLine/ScoreLine";
import "./ScoreTable.css";

export default function ScoreTable() {
  //const scoreList = [randomScore()];
  const [scoreListState, setScoreListState] = useState([]);

  useEffect(() => {
    console.log("useeffect launched")
    getInitialScores();
  });

  function getInitialScores() {
    console.log("initial score launched")

    while (scoreListState.length < 20) {
         setScoreListState(oldState => [...oldState, randomScore()]) 
         console.log(scoreListState)
    }
  }



  function randomScore() {
    return Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
  }

  return (
    <div id="score-table-container">
      <div id="score-table">
        {scoreListState.map((score) => {
            return (
                <ScoreLine score={score} key={score}/>
            )
        })}
      </div>
    </div>
  );
}
