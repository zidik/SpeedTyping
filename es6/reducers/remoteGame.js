import * as act from "../actions";

const initialState = {
    connected: false,
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
            return {
                ...state,
                ...action.remoteState,
                connected: true
            };

        default:
            return state
    }
};