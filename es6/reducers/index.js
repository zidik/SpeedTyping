"use strict";

import {combineReducers} from "redux";
import currentGame from "./currentGame";
import fetching from "./fetching";

export default combineReducers({
    fetching,
    currentGame
})

export function calcTimeElapsed(game) {
    return game.currentTime - game.startTime;
}

