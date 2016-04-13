"use strict";
import classNames from "classnames";
import React from "react";
import Letter from "./Letter";
import R from "ramda"


const toLetter = ([letter, status], index) => <Letter letter={letter} status={status} key={index} />;
const Word = (props) =>{
    var wordClass = classNames({
        'word': true,
        'correct': props.status == "correct",
        'incorrect': props.status == "incorrect",
        'current': props.status == "current"
    });
    let letters = props.word.split("");
    props.letterStatuses.length = letters.length;
    return  <span className={wordClass}>
                {R.zip(letters, props.letterStatuses).map(toLetter)}
            </span>;
};

Word.propTypes = {
    word: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    letterStatuses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default Word