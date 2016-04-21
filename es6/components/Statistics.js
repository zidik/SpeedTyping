import React from "react";

const TypingStatistics = (props) =>
    <div>
        <span>Words per minute: </span>
        <span>{props.wordsPerMinute}</span>
        <span><br />Accuracy: </span>
        <span>{props.accuracy}%</span>
    </div>;

TypingStatistics.propTypes = {
    wordsPerMinute: React.PropTypes.string.isRequired,
    accuracy: React.PropTypes.string.isRequired
};

export default TypingStatistics;