"use strict";
import React from 'react';
import Statistics from "./Statistics"



class StatisticsContainer extends React.Component {
    render(){
        var wpm;
        var acc;

        if(this.props.playerWords.length > 1) {
            var completeWords = this.props.playerWords.slice(0, -1);
            var correctWords = completeWords.reduce((acc, e, i) => acc + (e == this.props.words[i]), 0);
            acc = correctWords / completeWords.length * 100;

            var timeDelta = (new Date()).getTime() - this.props.startTime;
            var minutes = (timeDelta /1000 / 60);
            wpm = completeWords.length / minutes;
        } else {
            acc = 0;
            wpm = 0;
        }

        return <Statistics wpm={wpm} acc={acc} />;
    }
}
StatisticsContainer.propTypes = {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    playerWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    startTime: React.PropTypes.number.isRequired
};

export default StatisticsContainer;