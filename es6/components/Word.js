"use strict";
import React from "react";
import Letter from "./Letter";

const toLetter = (str) => <Letter letter={str} />;
const Word = (props) => <span className={"word word-"+props.wordState}>{props.word.split("").map(toLetter)}</span>;

Word.propTypes = {
    word: React.PropTypes.string.isRequired,
    wordState: React.PropTypes.string
};
Word.defaultProps = {
    wordState: "initial"
}

export default Word