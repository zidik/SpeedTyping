"use strict";

export const calcAccuracy = ({words, playerWords}) => {
    if (playerWords.length <= 1) return 0;
    let completeWords = playerWords.slice(0, -1);
    let correctWords = completeWords.reduce((acc, e, i) => acc + (e == words[i]), 0);
    return correctWords / completeWords.length * 100;
};

export const calcWordsPerMinute = ({startTime, currentTime, playerWords}) => {
    let timeDelta = currentTime - startTime;
    let minutes = (timeDelta / 1000 / 60);
    if (minutes == 0) return 0;
    return (playerWords.length - 1) / minutes;
};