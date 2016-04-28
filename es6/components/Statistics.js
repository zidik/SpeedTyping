import React from "react";

const Statistics = (props) =>
    <div className="statistics">
        <h3>Statistics:</h3>
        <span>Words per minute: </span>
        <span>{props.wordsPerMinute}</span>
        <span><br />Accuracy: </span>
        <span>{props.accuracy}%</span>
        <span><br />Time: </span>
        <span>{props.time}s</span>
    </div>;

Statistics.propTypes = {
    wordsPerMinute: React.PropTypes.string.isRequired,
    accuracy: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
};

export default Statistics;