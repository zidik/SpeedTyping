"use strict";
import React from 'react';
import StatisticsContainer from "./StatisticsContainer";
import InputField from "./InputField"
import Words from "./Words"

const TypingGame = (props)=><div>
        <h2> Typing Game </h2>
        <Words words={props.words} playerWords={props.playerWords} active={props.activeWordIndex} />
        <InputField value={props.inputValue} onChange={props.onInputChange}/>
        <StatisticsContainer words={props.words} playerWords={props.playerWords} startTime = {props.startTime} />
    </div>;

TypingGame.propTypes = {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    playerWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    activeWordIndex: React.PropTypes.number.isRequired,
    inputValue: React.PropTypes.string.isRequired,
    onInputChange: React.PropTypes.func.isRequired,
    startTime: React.PropTypes.number.isRequired
};

export default TypingGame;