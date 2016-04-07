"use strict";
import React from 'react';

const TypingStatistics = (props) =>
    <div>
        Words per minute: {props.wpm.toFixed(2)} <br />
        Accuracy: {props.acc.toFixed(2)}%
    </div>;

TypingStatistics.propTypes = {
    wpm: React.PropTypes.number.isRequired,
    acc: React.PropTypes.number.isRequired
};

export default TypingStatistics;