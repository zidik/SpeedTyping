"use strict";
import Word from "../containers/Word"
import Words from "../components/Words"
import React from "react"
import {connect} from "react-redux"
import R from "ramda";


const buildWord = (activeWordIndex) => ([word, playerWord], index) => {
    var wordStatus;
    if(playerWord === undefined) {wordStatus = "inactive"; playerWord =""}
    else if(activeWordIndex==index) wordStatus = "current";
    else if(word==playerWord) wordStatus = "correct";
    else wordStatus = "incorrect";
    return <Word status={wordStatus} index={index} key={index} />;
};

const buildWords = (words, playerWords, active) =>{
    playerWords.length = words.length;
    return R.zip(words, playerWords).map(buildWord(active))
};


const mapStateToProps = (state) => ({
    children: 
        buildWords(
            state.words,
            state.playerWords.concat([state.currentInput]),
            state.playerWords.length
        )
});

export default connect(mapStateToProps)(Words);