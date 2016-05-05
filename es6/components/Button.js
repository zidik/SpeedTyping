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
    value: React.PropTypes.string.isRequired,
    click: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool.isRequired
};

export default Button;