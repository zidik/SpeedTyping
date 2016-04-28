import * as act from "../actions";
import {calcAccuracy, calcWordsPerMinute} from "./Statistics";

const initialState = {
    isFetchingWords: false,
    gameStarted: false,
    startTime: undefined,
    currentTime: undefined,
    words: [],
    playerWords: [""],

    highest_wordsPerMinute: 0,
    highest_accuracy: 0
};

export default function currentGame(state = initialState, action) {
    switch (action.type) {
        case act.INPUT_CHANGE:
            return {
                ...state,
                playerWords: state.playerWords.slice(0, -1).concat(action.text.split(" "))
            };

        case act.WORDS_FETCH_SUCCESS:
            return {
                ...state,
                words: action.words
            };

        case act.GAME_START:
            return {
                ...state,
                gameStarted: true,
                startTime: Date.now(),
                currentTime: Date.now()
            };

        case act.GAME_STOP:
            return {
                ...state,
                gameStarted: false,
                highest_wordsPerMinute: Math.max(
                    state.highest_wordsPerMinute,
                    calcWordsPerMinute(state)
                ),
                highest_accuracy: Math.max(
                    state.highest_accuracy,
                    calcAccuracy(state)
                )
            };
        case act.GAME_RESET:
            return {
                ...state,
                startTime: undefined,
                playerWords: [""],
                words: []
            };

        case act.TICK:
            return {
                ...state,
                currentTime: Date.now()
            };


        default:
            return state
    }
};