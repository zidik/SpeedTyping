"use strict";
import Word from "../components/Word"
import Letter from "../components/Letter";

import React from 'react';
import R from "ramda";
import {connect} from 'react-redux'

const toLetter = ([letter, status], index) => <Letter letter={letter} status={status} key={index} />;

const compareChars = (ref, usr) => {
    if (typeof usr === "undefined") return "";
    if (ref==usr) return "correct";
    return "incorrect";
};

const buildLetters = (word, playerWord) => {
    let chars = word.split("");
    let playerChars = (playerWord || "").split("");
    playerChars.length = chars.length;

    let letterStatuses = R.zipWith(compareChars, chars, playerChars);
    return R.zip(chars, letterStatuses).map(toLetter)
};

const mapStateToProps = (state, props) => ({
    children: buildLetters(state.words[props.index], state.playerWords[props.index])
});

export default connect(mapStateToProps)(Word);
