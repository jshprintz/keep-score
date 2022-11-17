import React, { useState } from "react";
import Headline from "./Components/Headline/Headline";
import ScoreTable from "./Components/ScoreTable/ScoreTable";
import HeaderRow from "./Components/HeaderRow/HeaderRow";
import { faker } from "@faker-js/faker";
import "./App.css";

function App() {
  const initScoreList = [newUser()];

  for (let i=0; initScoreList.length < 100; i++){
    initScoreList.push(newUser());
  }
  const [scoreListState, setScoreListState] = useState(initScoreList);

  sortList();
  
  // Sort the list
  function sortList() {
    const sorted = [...scoreListState].sort((a, b) => {
      return b.score - a.score;
    });

    return sorted;
  }

  // Init new user
  // Alter to include the old rank and the new rank to make less of a list object
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
