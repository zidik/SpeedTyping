"use strict";

import fetch from "isomorphic-fetch";
import {calcWordsPerMinute, calcAccuracy} from "../reducers/Statistics";

export const INPUT_CHANGE = 'INPUT_CHANGE';

export const GAME_START = 'GAME_START';
export const GAME_STOP = 'GAME_STOP';
export const GAME_RESET = 'GAME_RESET';
export const TICK = 'TICK';

export const WORDS_FETCH_REQUEST = 'WORDS_FETCH_REQUEST';
export const WORDS_FETCH_SUCCESS = 'WORDS_FETCH_SUCCESS';

export const REMOTE_STATE_RECEIVED = "REMOTE_STATE_RECEIVED";

export function changeInput(text) {
    return {
        type: INPUT_CHANGE,
        text
    }
}

let interval;

export const startGame = (startTime) => ({
    type: GAME_START,
    startTime
});

export const stopGame = (wordsPerMinute, accuracy) => ({
    type: GAME_STOP,
    score:{
        wordsPerMinute,
        accuracy
    }
});

export function start() {
    return (dispatch) => {
        // This transitions state to Running
        dispatch(startGame(Date.now()));
        // This keeps the clock ticking
        interval = setInterval(
            () => dispatch({type: TICK}),
            100
        );
    }
}

export function stop() {
    return (dispatch, getState) => {
        //Stop the clock
        clearInterval(interval);
        let state = getState();
        dispatch(
            stopGame(
                calcWordsPerMinute(state.localGame),
                calcAccuracy(state.localGame)
            )
        );
    };
}

export function reset() {
    return {type: GAME_RESET}
}

function requestWords() {
    return {type: WORDS_FETCH_REQUEST}
}

function receiveWords(words) {
    return {
        type: WORDS_FETCH_SUCCESS,
        words
    }
}

export function fetchWords(jsonConsumer) {
    return (dispatch) => {
        dispatch(requestWords());
        dispatch(reset());
        return fetch('http://localhost:3000/words.json')
            .then(response => response.json())
            .then(
                (words) => {
                    dispatch(receiveWords(words));
                    dispatch(start());
                }
            );
        // One day, catch error here...
    }
};

export const receivedRemoteState = (remoteState) => ({
    type: REMOTE_STATE_RECEIVED,
    remoteState
});