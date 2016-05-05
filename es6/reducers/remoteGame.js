import * as remoteActions from "../actions/remote";

const initialState = {
    connected: false,
    startTime: undefined,
    currentTime: undefined,
    words: [],
    playerWords: [""],

    pastGames: []
};

export default function currentGame(state = initialState, action) {
    switch (action.type) {
        case remoteActions.REMOTE_STATE_RECEIVED:
            return {
                ...state,
                ...action.remoteState.gameState,
                connected: true
            };

        default:
            return state
    }
}