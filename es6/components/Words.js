"use strict";
import React from 'react';
import Word from "./Word";

const toWord = (activeWordIndex) => (str, index) => {
    var wordStatus = "inactive";
    if(activeWordIndex==index){
        console.log(index);
        wordStatus = "current";
    }
    return <Word wordState={wordStatus} word={str} />;

};

const Words = (props) => <div className="words">{props.words.map(toWord(props.active))}</div>;
Words.propTypes = {
    words: React.PropTypes
        .arrayOf(React.PropTypes.string)
        .isRequired,
    active: React.PropTypes.number.isRequired
};

export default Words;