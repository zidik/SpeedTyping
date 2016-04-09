"use strict";
import React from 'react';

const TypingStatistics = (props) =>
    <div>
        Words per minute: {props.wpm} <br />
        Accuracy: {props.acc}%
    </div>;

TypingStatistics.propTypes = {
    wpm: React.PropTypes.string.isRequired,
    acc: React.PropTypes.string.isRequired
};

export default TypingStatistics;