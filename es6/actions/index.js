"use strict";

import fetch from "isomorphic-fetch";
import {calcWordsPerMinute, calcAccuracy} from "../reducers/selectors";
import {receiveWords, requestWords} from "./fetching";
import {startGame, stopGame, resetGame} from "./localGame";
import {startTicking, stopTicking} from "./ticking";

export function start() {
    return (dispatch) => {
        dispatch(resetGame());
        dispatch(requestWords());
        return fetch('http://localhost:3000/words.json')
            .then(response => response.json())
            .then(
                (words) => {
                    dispatch(receiveWords(words));
                    dispatch(startGame(Date.now()));
                    dispatch(startTicking());
                }
            );
        // One day, catch error here...
    }
}

export function stop() {
    return (dispatch, getState) => {
        //Stop the clock
        stopTicking();
        let state = getState();
        dispatch(
            stopGame(
                calcWordsPerMinute(state.localGame),
                calcAccuracy(state.localGame)
            )
        );
    };
}

