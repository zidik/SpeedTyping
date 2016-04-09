"use strict";
import React from 'react';

const WordField = (props) => (
    <input
        className="typing-container"
        value={props.value}
        onChange={props.onChange}
    />
);

WordField.propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default WordField;