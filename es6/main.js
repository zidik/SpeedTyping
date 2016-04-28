"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import constantActionLogger from "./middleware/constantActionLogger";
import typingGame from "./reducers";
import TypingGame from "./components/TypingGame";
import * as websocket from "./actions/websocket"
import {receivedRemoteComments} from "./actions"

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
const listener = () => {
    const currentGameState = store.getState().localGame;
    
    if (previousGameState !== currentGameState) {
        previousGameState = currentGameState;
        websocket.sendMessage(currentGameState);
    }
};

const unsubscribe = store.subscribe(listener);

store.dispatch(
    websocket.connectionRequested(
        receivedRemoteComments
    )

);
