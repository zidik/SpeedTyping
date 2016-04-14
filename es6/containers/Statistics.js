"use strict";
import {connect} from "react-redux";
import Statistics from "./../components/Statistics";

const calcAccuracy = (words, playerWords) => {
    if (playerWords.length <= 1) return 0;
    let completeWords = playerWords.slice(0, -1);
    let correctWords = completeWords.reduce((acc, e, i) => acc + (e == words[i]), 0);
    return correctWords / completeWords.length * 100;
};

const calcWordsPerMinute = (startTime, playerWords) => {
    let timeDelta = (new Date()).getTime() - startTime;
    let minutes = (timeDelta / 1000 / 60);
    if (minutes == 0) return 0;
    return (playerWords.length - 1) / minutes;
};

const mapStateToProps = (state) => ({
    wpm: calcWordsPerMinute(state.startTime, state.playerWords).toFixed(2),
    acc: calcAccuracy(state.words, state.playerWords).toFixed(0)
});

export default connect(mapStateToProps)(Statistics);