import fetch from "isomorphic-fetch";
import {receiveWords, requestWords} from "./fetching";
import {startGame, stopGame, resetGame} from "./localGame";
import {startTicking, stopTicking} from "./ticking";
import {push} from "react-router-redux";

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
            stopGame(state.localGame)
        );
        dispatch(push("/pastGames"));
    };
}

