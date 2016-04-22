"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import typingGame from "./reducers";
import TypingGame from "./components/TypingGame";

const store = createStore(typingGame, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <TypingGame />
    </Provider>,
    document.getElementById('content')
);
