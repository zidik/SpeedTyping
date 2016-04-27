"use strict";
import {connect} from "react-redux";
import HighScore from "./../components/HighScore";

const mapStateToProps = (state) => ({
    wordsPerMinute: state.currentGame.highest_wordsPerMinute.toFixed(2),
    accuracy: state.currentGame.highest_accuracy.toFixed(0)
});

export default connect(mapStateToProps)(HighScore);