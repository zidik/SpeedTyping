"use strict";
import React from "react";

const InputField = (props) => (
    <input
        className="typing-container"
        value={props.value}
        onChange={(e) => props.handleInputChange(e.target.value)}
    />
);

InputField.propTypes = {
    value: React.PropTypes.string.isRequired,
    handleInputChange: React.PropTypes.func.isRequired
};

export default InputField;