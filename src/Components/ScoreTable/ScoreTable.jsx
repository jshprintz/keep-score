import React, { useEffect } from "react";
import ScoreLine from "../ScoreLine/ScoreLine";
import "./ScoreTable.css";

export default function ScoreTable({ sortedLimited, simulateChanges }) {

  useEffect(() => {
    const interval = setInterval(simulateChanges, 2000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div id="score-table-container">
        <div id="score-table">
          {sortedLimited.map((user, index) => {
            return <ScoreLine user={user} key={index} rank={index + 1} />;
          })}
        </div>
      </div>
    </>
  );
}
