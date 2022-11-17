import React, { useState } from "react";
import Headline from "./Components/Headline/Headline";
import ScoreTable from "./Components/ScoreTable/ScoreTable";
import HeaderRow from "./Components/HeaderRow/HeaderRow";
import { faker } from "@faker-js/faker";
import "./App.css";

function App() {
  const [userNumber, setUserNumber] = useState(25);
  const initScoreList = [newUser()];
  // Inital index of all users with scores
  for (let i = 0; initScoreList.length < 100; i++) {
    initScoreList.push(newUser());
  }

  const [scoreListState, setScoreListState] = useState(initScoreList);
  const sorted = sortList();
  const sortedLimited = [];

  for (let i = 0; i < userNumber; i++) {
    sortedLimited.push(sorted[i]);
  }

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

  // Simulates scoring changes
  function simulateChanges() {
    setScoreListState(sorted);
    // Handicap
    for (let i = 0; i < sorted.length; i++) {
      const scoreChange = randomNumber(i + 10, 1);
      sorted[i].score += scoreChange;
      sorted[i].scoreDiff = scoreChange;
      sorted[i].rankDiff = i;
    }
  }

  return (
    <>
      <Headline userNumber={userNumber} setUserNumber={setUserNumber} />
      <HeaderRow />
      <ScoreTable
        sortedLimited={sortedLimited}
        simulateChanges={simulateChanges}
      />
    </>
  );
}

export default App;
