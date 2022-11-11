import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import "./Headline.css";

const Header = styled.div`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 1em 2em;
  width: 20vw;
  border-radius: 5px;
  font-size: 20pt;
`;

export default function Headline() {
  return (
    <div id="header">
      <BsFillStarFill color="gold" size={60} className="star star1" />
      <BsFillStarFill color="gold" size={60} className="star star2" />
      <Header>Top 25 Scores!</Header>
      <BsFillStarFill color="gold" size={60} className="star star3" />
      <BsFillStarFill color="gold" size={60} className="star star4" />
    </div>
  );
}
