export const GAME_START = 'GAME_START';
export const GAME_STOP = 'GAME_STOP';
export const GAME_RESET = 'GAME_RESET';

export const startGame = (startTime) => ({
    type: GAME_START,
    startTime
});

export const stopGame = (game) => ({
    type: GAME_STOP,
    game
});

export function resetGame() {
    return {type: GAME_RESET}
}


