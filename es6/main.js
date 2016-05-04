"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import constantActionLogger from "./middleware/ConstantActionLogger";
import typingGame from "./reducers";
import TypingGame from "./containers/TypingGame";
import * as websocket from "./actions/websocket";
import {receivedRemoteState} from "./actions";
import websocketPublisher from "./middleware/WebsocketPublisher.js"

const store = createStore(
    typingGame,
    applyMiddleware(
        thunkMiddleware,
        websocketPublisher(websocket.sendMessage),
        constantActionLogger(console)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <TypingGame />
    </Provider>,
    document.getElementById('content')
);

store.dispatch(
    websocket.connectionRequested(
        receivedRemoteState
    )
);
