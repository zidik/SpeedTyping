import PropTypes from 'prop-types';
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
    wordsPerMinute: PropTypes.string.isRequired,
    accuracy: PropTypes.string.isRequired
};

export default HighScore;