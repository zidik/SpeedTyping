"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import constantActionLogger from "./middleware/constantActionLogger";
import typingGame from "./reducers";
import TypingGame from "./containers/TypingGame";
import * as websocket from "./actions/websocket";
import {receivedRemoteState} from "./actions";

const store = createStore(
    typingGame,
    applyMiddleware(
        thunkMiddleware,
        constantActionLogger(console)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <TypingGame />
    </Provider>,
    document.getElementById('content')
);

let previousGameState;
let previousConnState;

const listener = () => {
    const state = store.getState();

    const currentGameState = state.localGame;
    const currentConnState = state.remoteGame.connected;

    const gameStateChanged = previousGameState !== currentGameState;
    const connectionChanged = previousConnState !== currentConnState;

    if (gameStateChanged || connectionChanged) {
        previousGameState = currentGameState;
        previousConnState = currentConnState;

        websocket.sendMessage(currentGameState);
    }
};

store.subscribe(listener);

store.dispatch(
    websocket.connectionRequested(
        receivedRemoteState
    )
);
