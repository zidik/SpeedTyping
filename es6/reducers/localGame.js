import * as actions from "../actions";
import * as localGameActions from "../../es6/actions/localGame";
import * as fetchActions from "../../es6/actions/fetching";
import * as tickActions from "../../es6/actions/ticking";

const initialState = {
    gameStarted: false,
    startTime: undefined,
    currentTime: undefined,
    words: [],
    playerWords: [""],

    highScore: {
        wordsPerMinute: 0,
        accuracy: 0
    }
};

export default function localGame(state = initialState, action) {
    switch (action.type) {
        case localGameActions.INPUT_CHANGE:
            return {
                ...state,
                playerWords: state.playerWords.slice(0, -1).concat(action.text.split(" "))
            };

        case fetchActions.WORDS_FETCH_SUCCESS:
            return {
                ...state,
                words: action.words
            };

        case localGameActions.GAME_START:
            return {
                ...state,
                gameStarted: true,
                startTime: action.startTime,
                currentTime: action.startTime
            };

        case localGameActions.GAME_STOP:
            return {
                ...state,
                gameStarted: false,

                //Update wordsPerMinute and accuracy
                highScore: {
                    ...state.highScore,
                    wordsPerMinute: Math.max(
                        state.highScore.wordsPerMinute,
                        action.score.wordsPerMinute
                    ),
                    accuracy: Math.max(
                        state.highScore.accuracy,
                        action.score.accuracy
                    )
                }

            };
        case localGameActions.GAME_RESET:
            return {
                ...state,
                startTime: undefined,
                playerWords: [""],
                words: []
            };

        case tickActions.TICK:
            return {
                ...state,
                currentTime: action.time
            };

        default:
            return state
    }
};