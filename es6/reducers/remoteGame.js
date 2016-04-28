import * as act from "../actions";
import {calcAccuracy, calcWordsPerMinute} from "./Statistics";

const initialState = {
    startTime: undefined,
    currentTime: undefined,
    words: [],
    playerWords: [""],

    highScore: {
        wordsPerMinute: 0,
        accuracy: 0
    }
};

export default function currentGame(state = initialState, action) {
    switch (action.type) {
        case act.REMOTE_STATE_RECEIVED:
            return {...state, ...action.state};

        default:
            return state
    }
};