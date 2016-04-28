"use strict";

import {combineReducers} from "redux";
import localGame from "./localGame";
import remoteGame from "./remoteGame";
import fetching from "./fetching";
import websocket from "./websocket"

export default combineReducers({
    fetching,
    localGame,
    remoteGame,
    websocket
})

export function calcTimeElapsed(game) {
    return game.currentTime - game.startTime;
}

