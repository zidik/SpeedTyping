"use strict";
import classNames from "classnames";
import React from "react";


const Word = (props) => {
    var wordClass = classNames({
        'word': true,
        'correct': props.status == "correct",
        'incorrect': props.status == "incorrect",
        'current': props.status == "current"
    });

    return (
        <span className={wordClass}>
            {props.children}
        </span>
    );
};

Word.propTypes = {
    children: React.PropTypes.node.isRequired,
    status: React.PropTypes.string.isRequired
};

export default Word