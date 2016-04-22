"use strict";

import {CHANGE_INPUT, START, STOP, TICK} from "../actions";
import {calcAccuracy, calcWordsPerMinute} from "./Statistics";

const initialState = {
    hasStarted: false,
    startTime: undefined,
    currentTime: undefined,
    words: [],
    playerWords: [""],

    highest_wordsPerMinute: 0,
    highest_accuracy: 0
};

const typingGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                playerWords: state.playerWords.slice(0, -1).concat(action.text.split(" "))
            };

        case START:
            return {
                ...state,
                hasStarted: true,
                startTime: Date.now(),
                currentTime: Date.now(),
                words: action.words,
                playerWords: [""]
            };

        case STOP:
            return {
                ...state,
                hasStarted: false,
                highest_wordsPerMinute: Math.max(
                    state.highest_wordsPerMinute,
                    calcWordsPerMinute(state)
                ),
                highest_accuracy: Math.max(
                    state.highest_accuracy,
                    calcAccuracy(state)
                )
            };

        case TICK:
            return {
                ...state,
                currentTime: Date.now()
            };


        default:
            return state
    }
};

export default typingGameReducer


