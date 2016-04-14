"use strict";
import React from 'react';
import WordContainer from "./../containers/Word";


const toWord = (activeWordIndex) => ([word, playerWord], index) => {
    var wordStatus;
    if(playerWord === undefined) {wordStatus = "inactive"; playerWord =""}
    else if(activeWordIndex==index) wordStatus = "current";
    else if(word==playerWord) wordStatus = "correct";
    else wordStatus = "incorrect";


    return <WordContainer status={wordStatus} word={word} playerWord={playerWord} key={index} />;

};

const Words = (props) => {
    return (
        <div className="words">
            {props.children}
        </div>
    );
};

Words.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default Words;