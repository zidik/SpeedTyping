"use strict";

import {CHANGE_INPUT} from "../actions";

const initialState = {
    words: ["random", "words", "are", "here", "saab", "volvo", "random", "words", "are", "here", "saab", "volvo", "random", "words", "are", "here", "saab", "volvo"],
    playerWords: [""],
    startTime: (new Date()).getTime()
};

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2);

const typingGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
        {
            let wordsInInput = action.text.split(" ");
            return merge(state, {
                playerWords: state.playerWords.slice(0, -1).concat(wordsInInput)
            });
        }
        default:
            return state
    }
};

export default typingGameReducer


