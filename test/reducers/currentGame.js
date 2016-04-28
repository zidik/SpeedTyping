"use strict";
import currentGame from "../../es6/reducers/currentGame";
import {
    INPUT_CHANGE,
    GAME_START,
    GAME_STOP,
    GAME_RESET,
    WORDS_FETCH_SUCCESS,
    TICK
} from "../../es6/actions";


describe('currentGame', () => {
    describe('action ' + INPUT_CHANGE, () => {
        it('should change current playerWord', () => {
            const result = currentGame({playerWords: ["previous", ""]}, {
                type: INPUT_CHANGE,
                text: "Skyrim"
            });
            expect(result.playerWords).to.deep.eq(["previous", "Skyrim"]);
        });

        it('should advance to next word when input with space is given', () => {
            const result = currentGame({playerWords: [""]}, {
                type: INPUT_CHANGE,
                text: "Skyrim "
            });
            expect(result.playerWords).to.deep.eq(["Skyrim", ""])
        });
    });

    describe('action ' + GAME_START, () => {
        it('should change gameStarted to true', () => {
            const result = currentGame(
                {gameStarted: false},
                {type: GAME_START}
            );
            expect(result.gameStarted).to.eq(true);
        });

        it('should initialize times with current timestamp', () => {
            let clock = sinon.useFakeTimers(new Date(2011, 9, 1).getTime());
            const result = currentGame(
                {startTime: 0, currentTime: 0},
                {type: GAME_START}
            );
            expect(result.startTime).to.eq(Date.now());
            expect(result.currentTime).to.eq(Date.now());
            clock.restore();
        });
    });
    describe('action ' + GAME_STOP, () => {

        it('should change gameStarted to false and change high scores when they are lower than previous', () => {
            const result = currentGame(
                {
                    gameStarted: true,
                    highest_wordsPerMinute: 0,
                    highest_accuracy: 0,
                    words: ["A"],
                    playerWords: ["A", ""],
                    startTime: Date.now() - 10
                },
                {type: GAME_STOP}
            );
            expect(result.gameStarted).to.eq(false);
            expect(result.highest_accuracy).to.eq(100);
            expect(result.highest_wordsPerMinute).to.be.gt(0);
        });

    });
    describe('action ' + GAME_RESET, () => {
        it('should initialize startTime with undefined', () => {
            const result = currentGame(
                {startTime: 0},
                {type: GAME_RESET}
            );
            //noinspection BadExpressionStatementJS
            expect(result.startTime).to.be.undefined;
        });

        it('should change playerWords to [""]', () => {
            const result = currentGame(
                {playerWords: ["abc", "xyz"]},
                {type: GAME_RESET}
            );
            expect(result.playerWords).to.deep.eq([""]);
        });

        it('should change words to []', () => {
            const result = currentGame(
                {words: ["abc", "xyz"]},
                {type: GAME_RESET}
            );
            expect(result.words).to.deep.eq([]);
        });
    });

    describe('action ' + WORDS_FETCH_SUCCESS, () => {
        it('should change words to ones that are provided by action', () => {
            const result = currentGame(
                {words: ["xyz", "xyz", "xyz"]},
                {
                    type: WORDS_FETCH_SUCCESS,
                    words: ["abc", "dfg"]
                }
            );
            expect(result.words).to.deep.eq(["abc", "dfg"]);
        });

    });

    describe('action ' + TICK, () => {
        it('should set currentTime to current timestamp', () => {
            let clock = sinon.useFakeTimers(new Date(2011, 9, 1).getTime());
            const result = currentGame(
                {currentTime: 0},
                {type: TICK}
            );
            expect(result.currentTime).to.eq(Date.now());
            clock.restore();
        });
    })
});