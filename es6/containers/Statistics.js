"use strict";
import {connect} from "react-redux";
import Statistics from "./../components/Statistics";
import {calcAccuracy, calcWordsPerMinute} from "./../reducers/Statistics";

const mapStateToProps = (state) => ({
    wordsPerMinute: calcWordsPerMinute(state).toFixed(2),
    accuracy: calcAccuracy(state).toFixed(0),
    time: ((state.currentTime - state.startTime) / 1000).toFixed(1)
});

export default connect(mapStateToProps)(Statistics);