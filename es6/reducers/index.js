"use strict";

import {combineReducers} from "redux";
import currentGame from "./currentGame";
import fetching from "./fetching";
import websocket from "./websocket"

export default combineReducers({
    fetching,
    currentGame,
    websocket
})

export function calcTimeElapsed(game) {
    return game.currentTime - game.startTime;
}

