"use strict";
import InputField from "../components/InputField";
import {connect} from "react-redux";
import {changeInput} from "../actions";


const mapStateToProps = (state) => ({
    value: state.playerWords[state.playerWords.length - 1],
    disabled: !state.hasStarted
});

const mapDispatchToProps = (dispatch) => ({
    handleChange: (input) => dispatch(changeInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);