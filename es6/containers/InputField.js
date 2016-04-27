"use strict";
import InputField from "../components/InputField";
import {connect} from "react-redux";
import {changeInput} from "../actions";


const mapStateToProps = (state) => ({
    value: state.currentGame.playerWords[state.currentGame.playerWords.length - 1],
    disabled: !state.currentGame.gameStarted
});

const mapDispatchToProps = (dispatch) => ({
    handleChange: (input) => dispatch(changeInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);