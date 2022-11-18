import React from "react";
//import { motion } from "framer-motion";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

import "./ScoreLine.css";

export default function ScoreLine({ user, rank }) {

  const rankChange = (rank - user.rankNew - 1) * -1;
  
  let dispRank = "";
  //sets classname variable
  rank === 1
    ? (dispRank = "first")
    : rank === 2
    ? (dispRank = "second")
    : rank === 3
    ? (dispRank = "third")
    : (dispRank = "rest");

  return (
    // Not sure why but this framer motion was causing the whole table to re render after
    // every iteration


    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    // >
      <div id="score-line-container" className={dispRank}>
        <div id="left-group-table">
          <div id="player-rank">
            <p className={dispRank}>{rank}</p>
          </div>
          {user.scoreDiff ? (
            <div id="player-rank-diff-icon">
              {rankChange < 0 ? (
                <ImArrowDown color="red" id="arrow-down" />
              ) : rankChange > 0 ? (
                <ImArrowUp color="green" id="arrow-up" />
              ) : null}{" "}
            </div>
          ) : null}
          {user.scoreDiff ? (
            <div id="player-rank-diff">
              <p>{rankChange}</p>
            </div>
          ) : null}
        </div>
        <div id="player-name">
          <p>{user.name}</p>
        </div>
        <div id="right-group-table">
          {user.scoreDiff ? (
            <div id="player-score-diff">
              <p>+ {user.scoreDiff}</p>
            </div>
          ) : null}
          <div id="player-score">
            <p>{user.score}</p>
          </div>
        </div>
      </div>
    // </motion.div>
  );
}
