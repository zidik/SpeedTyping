"use strict";
import React from "react";
import classNames from "classnames";

const Letter = (props) => {
    var letterClass = classNames({
        'letter': true,
        'letter-correct': props.correct,
        'letter-incorrect': !props.correct
    });
    return <span className={letterClass}>{props.letter}</span>;
}


Letter.propTypes = {
    letter: React.PropTypes.string.isRequired,
    correct: React.PropTypes.bool
};

export default Letter