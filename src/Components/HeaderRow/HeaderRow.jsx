import React from "react";
import styled from "styled-components";
import "./HeaderRow.css";

const SubHeader = styled.div`
  background: white;
  border-radius: 5px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  font-size: 20pt;
`;

export default function HeaderRow() {
  return (
    <div id="header-row-container">
      <div id="header-row">
        <SubHeader id="rank-header">Rank</SubHeader>
        <SubHeader id="player-header">Player</SubHeader>
        <SubHeader id="score-header">Score</SubHeader>
      </div>
    </div>
  );
}
