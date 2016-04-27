import fetch from "isomorphic-fetch";

export const INPUT_CHANGE = 'INPUT_CHANGE';

export const GAME_START = 'GAME_START';
export const GAME_STOP = 'GAME_STOP';
export const GAME_RESET = 'GAME_RESET';
export const TICK = 'TICK';

export const WORDS_FETCH_REQUEST = 'WORDS_FETCH_REQUEST';
export const WORDS_FETCH_SUCCESS = 'WORDS_FETCH_SUCCESS';

export function changeInput(text) {
    return {
        type: INPUT_CHANGE,
        text
    }
}

let interval;

export function start() {
    return (dispatch) => {
        // This transitions state to Running
        dispatch({type: GAME_START});
        // This keeps the clock ticking
        interval = setInterval(
            () => dispatch({type: TICK}),
            100
        );
    }
}

export function stop() {
    //Stop the clock
    clearInterval(interval);
    return {type: GAME_STOP}
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

        return fetch('http://localhost:3000/words.json')
            .then(response => response.json())
            .then(
                (words) => {
                    dispatch(receiveWords(words));
                    dispatch(reset);
                    dispatch(start());
                }
            );
        // One day, catch error here...
    }
};