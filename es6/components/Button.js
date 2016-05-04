import React from "react";

const Button = (props) => (
    <input
        type="button"
        value={props.value}
        onClick={() => props.click()}
        disabled={props.disabled}
    />
);

Button.propTypes = {
    value: React.PropTypes.string.isRequired,
    click: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool.isRequired
};

export default Button;