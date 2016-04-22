import fetch from 'isomorphic-fetch'

export const CHANGE_INPUT = 'CHANGE_INPUT';

export const START = 'START';
export const STOP = 'STOP';
export const TICK = 'TICK';

export const REQUEST_WORDS = 'REQUEST_WORDS';
export const RECEIVE_WORDS = 'RECEIVE_WORDS';

export function changeInput(text) {
    return{
        type: CHANGE_INPUT,
        text
    }
}

let interval;
export function start (words) {
    return (dispatch) => {
        // This transitions state to Running
        dispatch({
            type: START,
            words
        });
        // This keeps the clock ticking
        interval = setInterval(
            () => dispatch({type: TICK}),
            100
        );
    }
}

export function stop () {
    //Stop the clock
    clearInterval(interval);
    return {type: STOP}
}


function requestWords() {
    return {type: REQUEST_WORDS}
}


function receiveWords (json) {
    return {
        type: RECEIVE_WORDS,
        words: json.data.children.map(child => child.data)
    }
}

export function fetchWords(jsonConsumer) {
    return (dispatch) => {
        dispatch(requestWords());

        return fetch('http://localhost:3000/words.json')
            .then(response => response.json())
            .then(json =>
                dispatch(jsonConsumer(json))
            );
        // One day, catch error here...
    }
};