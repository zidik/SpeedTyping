"use strict";
import React from 'react';
import Statistics from "./Statistics"



class StatisticsContainer extends React.Component {
    calcAccuracy() {
        if(this.props.playerWords.length <= 1) return 0;
        let completeWords = this.props.playerWords.slice(0, -1);
        let correctWords = completeWords.reduce((acc, e, i) => acc + (e == this.props.words[i]), 0);
        return correctWords / completeWords.length * 100;
    }

    calcWordsPerMinute(){
        let timeDelta = (new Date()).getTime() - this.props.startTime;
        let minutes = (timeDelta /1000 / 60);
        if (minutes == 0) return 0;
        return (this.props.playerWords.length - 1) / minutes;
    }

    render(){
        return (
            <Statistics
                wpm={this.calcWordsPerMinute().toFixed(2)}
                acc={this.calcAccuracy().toFixed(0)}
            />
        );
    }
}

StatisticsContainer.propTypes = {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    playerWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    startTime: React.PropTypes.number.isRequired
};

export default StatisticsContainer;