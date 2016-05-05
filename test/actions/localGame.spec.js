import {
    startGame,
    stopGame,
    resetGame,
    GAME_START,
    GAME_STOP,
    GAME_RESET
} from "../../es6/actions/localGame";
import {shouldCreateAction} from "./helpers";

describe('localGame actions', () => {

    describe('startGame', () => {
        shouldCreateAction(startGame, GAME_START);
        it('should add startTime to action', () => {
            expect(startGame(124134234).startTime).to.eq(124134234);
        });
    });

    describe('stopGame', () => {
        shouldCreateAction(stopGame, GAME_STOP);
        it('should add game to action', () => {
            let game = {a:"b",c:[1,2]}
            let action = stopGame(game);
            expect(action.game).to.deep.eq(game);
        });
    });

    describe('resetGame', () => {
        shouldCreateAction(resetGame, GAME_RESET);
    });

});