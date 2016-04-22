"use strict";

import React from "react";

const Button = (props) => (
    <input
        type="button"
        value={props.value}
        onClick={(e) => props.click()}
    />
);

Button.propTypes = {
    value: React.PropTypes.string.isRequired,
    click: React.PropTypes.func.isRequired
};

export default Button;