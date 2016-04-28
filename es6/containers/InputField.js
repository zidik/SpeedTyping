"use strict";
import InputField from "../components/InputField";
import {connect} from "react-redux";
import {changeInput} from "../actions";

function mapStateToProps(state, props) {
    const game = state.localGame;

    return {
        value: game.playerWords[game.playerWords.length - 1],
        disabled: !game.gameStarted
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleChange: (input) => dispatch(changeInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);