"use strict";
import classNames from "classnames";
import React from "react";
import Letter from "./Letter";
import {zipAll} from "./../zip";


const toLetter = ([letter, status], index) => <Letter letter={letter} status={status} key={index} />;
const Word = (props) =>{
    var wordClass = classNames({
        'word': true,
        'correct': props.status == "correct",
        'incorrect': props.status == "incorrect",
        'current': props.status == "current"
    });
    return  <span className={wordClass}>
                {zipAll(props.word.split(""), props.letterStatuses).map(toLetter)}
            </span>;
};

Word.propTypes = {
    word: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    letterStatuses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default Word