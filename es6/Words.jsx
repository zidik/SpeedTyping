"use strict";
import React from 'react';

const Words = (props) => <div>{props.words.join(' ')}</div>;
Words.propTypes = {
    words: React.PropTypes
        .arrayOf(React.PropTypes.string)
        .isRequired
};

module.exports = Words;