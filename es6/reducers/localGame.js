import * as act from "../actions";

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
                startTime: action.startTime,
                currentTime: action.startTime
            };

        case act.GAME_STOP:
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