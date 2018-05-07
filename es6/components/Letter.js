import PropTypes from 'prop-types';
import React from "react";
import classNames from "classnames";

const Letter = (props) => {
    var letterClass = classNames({
        'letter': true,
        'correct': props.status == "correct",
        'incorrect': props.status == "incorrect"
    });
    return <span className={letterClass}>{props.letter}</span>;
};

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default Letter;