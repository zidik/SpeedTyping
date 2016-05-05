import R from "ramda";

export const calcAccuracy = ({words, playerWords}) => {
    if (playerWords.length <= 1) return 0;
    let completeWords = playerWords.slice(0, -1);
    return correctWordCount(words, completeWords) / completeWords.length * 100;
};

export const calcWordsPerMinute = ({startTime, currentTime, words, playerWords}) => {
    if (playerWords.length <= 1) return 0;
    let completeWords = playerWords.slice(0, -1);

    let timeDelta = currentTime - startTime;
    let minutes = (timeDelta / 1000 / 60);
    if (minutes == 0) return 0;

    return correctWordCount(words, completeWords) / minutes;
};

function correctWordCount(wordsA, wordsB) {
    return wordsA.reduce((acc, e, i) => acc + (e == wordsB[i]), 0);
}

const highest = (fun) =>
    R.compose(
        R.reduce(R.max, 0),
        R.map((elem) => fun(elem))
    );

export const highestWordsPerMinute = (games) => highest(calcWordsPerMinute)(games);
export const highestAccuracy = (games) => highest(calcAccuracy)(games);

export function selectGame({localGame, remoteGame}, {gameType, gameNo}) {
    switch (gameType) {
        case "local":
            return localGame;
        case "remote":
            return remoteGame;
        case "localPast":
            return localGame.pastGames[gameNo];
        case "remotePast":
            return remoteGame.pastGames[gameNo];
        default:
            throw "Invalid game type given to game selector";
    }
}