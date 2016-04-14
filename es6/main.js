"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import typingGame from "./reducers";
import TypingGame from "./components/TypingGame";

const store = createStore(typingGame);

ReactDOM.render(
    <Provider store={store}>
        <TypingGame />
    </Provider>,
    document.getElementById('content')
);
