import {combineReducers} from "redux";
import localGame from "./localGame";
import remoteGame from "./remoteGame";
import fetching from "./fetching";
import websocket from "./websocket";
import { routerReducer as routing } from 'react-router-redux'

export default combineReducers({
    routing,
    fetching,
    localGame,
    remoteGame,
    websocket
})

export function calcTimeElapsed(game) {
    return game.currentTime - game.startTime;
}

