"use strict";
import {connect} from "react-redux";
import Statistics from "./../components/Statistics";
import {calcAccuracy, calcWordsPerMinute} from "./../reducers/Statistics";
import {calcTimeElapsed} from "./../reducers";

const mapStateToProps = (state) => ({
    wordsPerMinute: calcWordsPerMinute(state.currentGame).toFixed(2),
    accuracy: calcAccuracy(state.currentGame).toFixed(0),
    time: ( calcTimeElapsed(state.currentGame) / 1000).toFixed(1)
});

export default connect(mapStateToProps)(Statistics);