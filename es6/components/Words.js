"use strict";
import React from "react";

const Words = (props) => {
    return (
        <div className="words">
            {props.children}
        </div>
    );
};

Words.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default Words;