import React from "react";

const HighScore = (props) =>
    <div>
        <h3>High Score</h3>
        <span>Words per minute: </span>
        <span>{props.wordsPerMinute}</span>
        <span><br />Accuracy: </span>
        <span>{props.accuracy}%</span>
    </div>;

HighScore.propTypes = {
    wordsPerMinute: React.PropTypes.string.isRequired,
    accuracy: React.PropTypes.string.isRequired,
};

export default HighScore;