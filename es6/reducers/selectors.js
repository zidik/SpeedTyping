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