import React from "react";
import PropTypes from 'prop-types';
import R from "ramda";
import Word from "../components/Word";

const Words = (props) => {

    const buildWords = (words, playerWords, active) => {
        const buildWord = (activeWordIndex) => ([word, playerWord], index) => {

            const getStatusString = (word, playerWord, index, activeWordIndex) => {
                if (activeWordIndex == index)   return "current";
                if (playerWord === undefined)   return "inactive";
                if (word == playerWord)         return "correct";
                return "incorrect";
            };

            return (
                <Word
                    status={getStatusString(word, playerWord, index, activeWordIndex)}
                    word={words[index]}
                    playerWord={playerWords[index]}
                    key={index}
                />
            );
        };

        let _playerWords = playerWords.slice();
        _playerWords.length = words.length;
        return R.zip(words, _playerWords).map(buildWord(active)).slice(Math.max(0, active - 2))
    };


    return (
        <div className="words">
            {buildWords(props.words, props.playerWords, props.active)}
        </div>
    );
};

Words.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    playerWords: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.number.isRequired
};

export default Words;