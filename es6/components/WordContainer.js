"use strict";
import React from 'react';
import Word from "./Word";
import R from "ramda";

const compareChars = ([ref,usr]) => {
    if (typeof usr === "undefined") return "";
    if (ref==usr) return "correct";
    return "incorrect";
};

class WordContainer extends React.Component {
    render()  {
        var letterStatuses = R.zip(this.props.word.split(""),this.props.playerWord.split("")).map(compareChars);
        return <Word word={this.props.word} status={this.props.status} letterStatuses={letterStatuses}/>
    }
}



WordContainer.propTypes = {
    word: React.PropTypes.string.isRequired,
    playerWord: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
};

export default WordContainer;
