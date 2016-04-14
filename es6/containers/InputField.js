"use strict";
import InputField from "../components/InputField"
import {connect} from 'react-redux'
import {changeInput} from '../actions'


const mapStateToProps = (state) => ({
    value: state.currentInput
});

const mapDispatchToProps = (dispatch) => ({
    handleInputChange: (input) => dispatch(changeInput(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);