import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import ScoreLine from "../ScoreLine/ScoreLine";
import "./ScoreTable.css";

export default function ScoreTable() {
  const [scoreListState, setScoreListState] = useState([newUser()]);

  getInitialScores();

  function getInitialScores() {
    if (scoreListState.length < 20) {
      
      setScoreListState((oldState) => [...oldState, newUser()]);
      console.log(scoreListState.length);
    }
  }

  function newUser(){
    const newUser = {
        name: faker.name.fullName(),
        score: randomScore()
    }
    return newUser;
  }

  function randomScore() {
    return Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
  }

  return (
    <div id="score-table-container">
      <div id="score-table">
        {scoreListState.map((score, index) => {
          return <ScoreLine score={score} key={index} rank={index+1} />;
        })}
      </div>
    </div>
  );
}
