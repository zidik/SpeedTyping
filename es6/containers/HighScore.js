"use strict";
import {connect} from "react-redux";
import HighScore from "./../components/HighScore";

function mapStateToProps (state, props){
    const game = props.isLocal ? state.localGame : state.remoteGame;
    return {
        wordsPerMinute: game.highScore.wordsPerMinute.toFixed(2),
        accuracy: game.highScore.accuracy.toFixed(0)
    }
}

export default connect(mapStateToProps)(HighScore);