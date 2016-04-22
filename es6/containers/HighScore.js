"use strict";
import {connect} from "react-redux";
import HighScore from "./../components/HighScore";

const mapStateToProps = (state) => ({
    wordsPerMinute: state.highest_wordsPerMinute.toFixed(2),
    accuracy: state.highest_accuracy.toFixed(0)
});

export default connect(mapStateToProps)(HighScore);