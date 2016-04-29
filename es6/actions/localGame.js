export const INPUT_CHANGE = 'INPUT_CHANGE';

export const GAME_START = 'GAME_START';
export const GAME_STOP = 'GAME_STOP';
export const GAME_RESET = 'GAME_RESET';


export function changeInput(text) {
    return {
        type: INPUT_CHANGE,
        text
    }
}

export const startGame = (startTime) => ({
    type: GAME_START,
    startTime
});

export const stopGame = (wordsPerMinute, accuracy) => ({
    type: GAME_STOP,
    score: {
        wordsPerMinute,
        accuracy
    }
});

export function resetGame() {
    return {type: GAME_RESET}
}


