"use strict";

import {CHANGE_INPUT} from "../actions"

const initialState ={
    words: ["random", "words", "are", "here", "saab", "volvo"],
    currentInput: "",
    playerWords: [],
    startTime: (new Date()).getTime()
};

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2);

const typingGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
        {
            //var curInput = this.state.currentInput;
            let newInput = action.text;

            //Disable deletion
            //if (newInput.length < curInput.length) newInput = curInput;
            let wordsInInput = newInput.split(" ");
            let complete_words = wordsInInput.slice(0, -1);
            let incomplete_word = wordsInInput[wordsInInput.length-1];

            return merge(state, {
                currentInput: incomplete_word,
                playerWords: state.playerWords.concat(complete_words)
            });
        }
        default:
            return state
    }
};

export default typingGameReducer


