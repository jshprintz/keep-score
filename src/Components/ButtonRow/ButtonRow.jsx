import React, { useState } from "react";
import styled from "styled-components";

import "./ButtonRow.css";

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
cursor: pointer;
margin: 0 1em;
padding: 1em 2em;
`;

const numOfScores = [10, 25, 50, 100];
let index = 0;

export default function ButtonRow(){
    const [buttonState, setButtonState] = useState(numOfScores[index])


    function changeCountHandler(index){
        index > 3 ? index = 0 : index++;
        setButtonState(numOfScores[index])
        console.log(index, "clicked")
    }

    return(
        <div id="button-row">
        <Button onClick={() => changeCountHandler(index)}>Top {buttonState}</Button>
        </div>
    )
}