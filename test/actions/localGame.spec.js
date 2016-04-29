'use strict';
import {
    changeInput,
    startGame,
    stopGame,
    resetGame,
    GAME_START,
    GAME_STOP,
    GAME_RESET,
    INPUT_CHANGE
} from "../../es6/actions/localGame";
import {shouldCreateAction} from "./helpers";

describe('localGame actions', () => {
    describe('changeInput', () => {
        shouldCreateAction(changeInput, INPUT_CHANGE);

        it('should add text to action', () => {
            expect(changeInput('Use Redux').text).to.eq("Use Redux");
        });

    });

    describe('startGame', () => {
        shouldCreateAction(startGame, GAME_START);
        it('should add startTime to action', () => {
            expect(startGame(124134234).startTime).to.eq(124134234);
        });
    });

    describe('stopGame', () => {
        shouldCreateAction(stopGame, GAME_STOP);
        it('should add scores to action', () => {
            let action = stopGame(12.4, 57);
            expect(action.score.wordsPerMinute).to.eq(12.4);
            expect(action.score.accuracy).to.eq(57);
        });
    });

    describe('resetGame', () => {
        shouldCreateAction(resetGame, GAME_RESET);
    });

});