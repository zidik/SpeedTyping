"use strict";
import {connect} from "react-redux";
import Statistics from "./../components/Statistics";
import {calcAccuracy, calcWordsPerMinute} from "./../reducers/Statistics";
import {calcTimeElapsed} from "./../reducers";

function mapStateToProps (state, props){
    const game = props.isLocal ? state.localGame : state.remoteGame;
    return {
        wordsPerMinute: calcWordsPerMinute(game).toFixed(2),
        accuracy: calcAccuracy(game).toFixed(0),
        time: (calcTimeElapsed(game) / 1000).toFixed(1)
    }
}

export default connect(mapStateToProps)(Statistics);