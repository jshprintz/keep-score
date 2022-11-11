import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import ScoreLine from "../ScoreLine/ScoreLine";
import "./ScoreTable.css";

export default function ScoreTable() {
  const [scoreListState, setScoreListState] = useState([]);
  let sorted = scoreListState;

  init();

  useEffect(() => {
    setInterval(simulateChanges, 5000);
  });

  // Initialize program
  function init() {
    // Init get scores/users
    if (scoreListState.length < 20) {
      setScoreListState((oldState) => [...oldState, newUser()]);
    } else {
     sortList()
    }
  }

  function simulateChanges() {
    sortList();
    setScoreListState(sorted);

    // Handicap
    for (let i=0; i<sorted.length; i++) {
        const scoreChange = (randomNumber(i+10, 1));
        sorted[i].score += scoreChange;
        sorted[i].scoreDiff = scoreChange;
    }
  }

  // Sort the list
  function sortList() {
    sorted = [...scoreListState].sort((a, b) => {
        return b.score - a.score;
        });
  }

  // Init new user
  function newUser() {
    const newUser = {
      name: faker.name.fullName(),
      score: randomNumber(100, 25),
      scoreDiff: null
    };
    return newUser;
  }

  // Init random score
  function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  

  return (
    <div id="score-table-container">
      <div id="score-table">
        {sorted.map((score, index) => {
          return <ScoreLine score={score} key={index} rank={index + 1} />;
        })}
      </div>
    </div>
  );
}
