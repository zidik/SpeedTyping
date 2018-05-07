import PropTypes from 'prop-types';
import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const Button = (props) => (
    <RaisedButton
        label={props.value}
        onClick={() => props.click()}
        primary={true}
        disabled={props.disabled}
    />
);

Button.propTypes = {
    value: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default Button;