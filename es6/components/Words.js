"use strict";
import React from 'react';
import WordContainer from "./WordContainer";
import {zipLeft} from "./../zip";

const toWord = (activeWordIndex) => ([word, playerWord], index) => {
    var wordStatus;
    if(playerWord === undefined) {wordStatus = "inactive"; playerWord =""}
    else if(activeWordIndex==index) wordStatus = "current";
    else if(word==playerWord) wordStatus = "correct";
    else wordStatus = "incorrect";


    return <WordContainer status={wordStatus} word={word} playerWord={playerWord} key={index} />;

};

const Words = (props) => <div className="words">{zipLeft(props.words, props.playerWords).map(toWord(props.active))}</div>;
Words.propTypes = {
    words: React.PropTypes
        .arrayOf(React.PropTypes.string)
        .isRequired,
    playerWords: React.PropTypes
        .arrayOf(React.PropTypes.string)
        .isRequired,
    active: React.PropTypes.number.isRequired
};

export default Words;