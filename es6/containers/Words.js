"use strict";
import Word from "../containers/Word"
import Words from "../components/Words"
import React from "react"
import {connect} from "react-redux"
import R from "ramda";


const buildWord = (activeWordIndex) => ([word, playerWord], index) => {
    var wordStatus;
    if(activeWordIndex==index) wordStatus = "current";
    else if(playerWord === undefined) {wordStatus = "inactive";}
    else if(word==playerWord) wordStatus = "correct";
    else wordStatus = "incorrect";
    return <Word status={wordStatus} index={index} key={index} />;
};

const buildWords = (words, playerWords, active) =>{
    let _playerWords = playerWords.slice();
    _playerWords.length = words.length;
    return R.zip(words, _playerWords).map(buildWord(active)).slice(Math.max (0,active-2))
};


const mapStateToProps = (state) => ({
    children: 
        buildWords(
            state.words,
            state.playerWords,
            state.playerWords.length-1
        )
});

export default connect(mapStateToProps)(Words);