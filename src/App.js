import React, { useState } from "react";
import Headline from "./Components/Headline/Headline";
import ScoreTable from "./Components/ScoreTable/ScoreTable";
import HeaderRow from "./Components/HeaderRow/HeaderRow";
import { faker } from "@faker-js/faker";
import "./App.css";

function App() {
  const [scoreListState, setScoreListState] = useState([]);

  init();

  // Initialize program
  function init() {
    // Init get scores/users
    if (scoreListState.length < 25) {
      setScoreListState((oldState) => [...oldState, newUser()]);
    } else {
      sortList();
    }
  }

  // Sort the list
  function sortList() {
    const sorted = [...scoreListState].sort((a, b) => {
      return b.score - a.score;
    });

    return sorted;
  }

  // Init new user
  function newUser() {
    const newUser = {
      name: faker.name.fullName(),
      score: randomNumber(100, 25),
      scoreDiff: null,
      rankDiff: null,
    };
    return newUser;
  }

  // random number generator
  function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <Headline />
      <HeaderRow />
      <ScoreTable
        sortList={sortList}
        randNum={randomNumber}
        setScoreListState={setScoreListState}
      />
    </>
  );
}

export default App;
