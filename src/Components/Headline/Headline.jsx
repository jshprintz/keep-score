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
  cursor: pointer;
`;

export default function Headline({ userNumber, setUserNumber }) {
  function headerClickHandler() {
    userNumber === 10
      ? setUserNumber(25)
      : userNumber === 25
      ? setUserNumber(50)
      : userNumber === 50
      ? setUserNumber(100)
      : setUserNumber(10);
  }

  return (
    <div id="header">
      <BsFillStarFill color="gold" size={60} className="star star1" />
      <BsFillStarFill color="gold" size={60} className="star star2" />
      <Header onClick={headerClickHandler} id="headline-btn">Top {userNumber} Scores!</Header>
      <BsFillStarFill color="gold" size={60} className="star star3" />
      <BsFillStarFill color="gold" size={60} className="star star4" />
    </div>
  );
}
