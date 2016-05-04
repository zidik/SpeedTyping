import Letter from "../components/Letter";
import R from "ramda";
import classNames from "classnames";
import React from "react";

const Word = (props) => {
    const buildLetters = (word, playerWord) => {
        const toLetter = ([letter, status], index) => <Letter letter={letter} status={status} key={index}/>;

        const compareChars = (ref, usr) => {
            if (usr === undefined) return "inactive";
            if (ref == usr) return "correct";
            return "incorrect";
        };

        let chars = word.split("");
        let playerChars = (playerWord || "").split("");
        playerChars.length = chars.length;

        let letterStatuses = R.zipWith(compareChars, chars, playerChars);
        return R.zip(chars, letterStatuses).map(toLetter)
    };

    var wordClass = classNames({
        'word': true,
        'correct': props.status == "correct",
        'incorrect': props.status == "incorrect",
        'current': props.status == "current"
    });

    return (
        <span className={wordClass}>
            {buildLetters(props.word, props.playerWord)}
        </span>
    );
};

Word.propTypes = {
    word: React.PropTypes.string.isRequired,
    playerWord: React.PropTypes.string,
    status: React.PropTypes.string.isRequired
};

export default Word