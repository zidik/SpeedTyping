"use strict";

import Button from "../components/Button";
import {connect} from "react-redux";
import {fetchWords, start, stop} from "../actions";

const mapStateToProps = (state) => ({
    hasStarted: state.hasStarted
});

const mapDispatchToProps = (dispatch) => ({
    startClick: () => dispatch(fetchWords(start)),
    stopClick: () => dispatch(stop())
});

function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, {
        value: stateProps.hasStarted ? "Stop" : "Start",
        click: stateProps.hasStarted ? dispatchProps.stopClick : dispatchProps.startClick
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Button);