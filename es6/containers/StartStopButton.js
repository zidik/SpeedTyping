"use strict";

import Button from "../components/Button";
import {connect} from "react-redux";
import {fetchWords, start, stop} from "../actions";

const mapStateToProps = (state) => ({
    gameStarted: state.currentGame.gameStarted,
    disabled: state.fetching.isFetchingWords
});

const mapDispatchToProps = (dispatch) => ({
    startClick: () => dispatch(fetchWords(start)),
    stopClick: () => dispatch(stop())
});

function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, {
        value: stateProps.gameStarted ? "Stop" : "Start",
        click: stateProps.gameStarted ? dispatchProps.stopClick : dispatchProps.startClick,
        disabled: stateProps.disabled
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Button);