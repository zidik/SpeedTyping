import {
    WEBSOCKET_CONNECTION_DROPPED,
    WEBSOCKET_CONNECTION_ESTABLISHED,
    WEBSOCKET_CONNECTION_UNAVAILABLE
} from "./../actions/websocket";

const initialState = {
    connected: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case WEBSOCKET_CONNECTION_ESTABLISHED:
            return {...state, connected: true};
        case WEBSOCKET_CONNECTION_DROPPED:
            return {...state, connected: false};
        case WEBSOCKET_CONNECTION_UNAVAILABLE:
            return {...state, connected: false};
        default:
            return state
    }
};

export default reducer;