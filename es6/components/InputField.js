import React from "react";

const InputField = (props) => (
    <input
        className="typing-container"
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
        autoFocus
    />
);

InputField.propTypes = {
    value: React.PropTypes.string.isRequired,
    handleChange: React.PropTypes.func.isRequired
};

export default InputField;