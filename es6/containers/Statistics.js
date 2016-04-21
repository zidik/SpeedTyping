"use strict";
import {connect} from "react-redux";
import Statistics from "./../components/Statistics";
import {calcAccuracy, calcWordsPerMinute} from "./../reducers/Statistics";

const mapStateToProps = (state) => ({
    wordsPerMinute: calcWordsPerMinute({startTime: state.startTime, playerWords: state.playerWords}).toFixed(2),
    accuracy: calcAccuracy({words: state.words, playerWords: state.playerWords}).toFixed(0)
});

export default connect(mapStateToProps)(Statistics);