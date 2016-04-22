"use strict";

import React from "react";

const InputField = (props) => (
    <input
        className="typing-container"
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
        disabled={props.disabled}
    />
);

InputField.propTypes = {
    value: React.PropTypes.string.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool.isRequired
};

export default InputField;