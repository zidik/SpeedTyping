"use strict";
import localGame from "../../es6/reducers/localGame";
import {
    INPUT_CHANGE,
    GAME_START,
    GAME_STOP,
    GAME_RESET,
    WORDS_FETCH_SUCCESS,
    TICK
} from "../../es6/actions";


describe('localGame', () => {
    describe('action ' + INPUT_CHANGE, () => {
        it('should change current playerWord', () => {
            const result = localGame({playerWords: ["previous", ""]}, {
                type: INPUT_CHANGE,
                text: "Skyrim"
            });
            expect(result.playerWords).to.deep.eq(["previous", "Skyrim"]);
        });

        it('should advance to next word when input with space is given', () => {
            const result = localGame({playerWords: [""]}, {
                type: INPUT_CHANGE,
                text: "Skyrim "
            });
            expect(result.playerWords).to.deep.eq(["Skyrim", ""])
        });
    });

    describe('action ' + GAME_START, () => {
        it('should change gameStarted to true', () => {
            const result = localGame(
                {gameStarted: false},
                {type: GAME_START}
            );
            expect(result.gameStarted).to.eq(true);
        });

        it('should initialize times with timestamp provided by action', () => {
            const result = localGame(
                {startTime: 0, currentTime: 0},
                {type: GAME_START,
                startTime: 1231513}
            );
            expect(result.startTime).to.eq(1231513);
            expect(result.currentTime).to.eq(1231513);
        });
    });
    describe('action ' + GAME_STOP, () => {

        it('should change gameStarted to false and change high scores when they are lower than previous', () => {
            const result = localGame(
                {
                    gameStarted: true,
                    highScore: {
                        wordsPerMinute: 1.4,
                        accuracy: 68
                    }
                },
                {
                    type: GAME_STOP,
                    score:{
                        wordsPerMinute:2.34,
                        accuracy:78
                    }
                }
            );
            expect(result.gameStarted).to.eq(false);
            expect(result.highScore.wordsPerMinute).to.eq(2.34);
            expect(result.highScore.accuracy).to.eq(78);
        });

    });
    describe('action ' + GAME_RESET, () => {
        it('should initialize startTime with undefined', () => {
            const result = localGame(
                {startTime: 0},
                {type: GAME_RESET}
            );
            //noinspection BadExpressionStatementJS
            expect(result.startTime).to.be.undefined;
        });

        it('should change playerWords to [""]', () => {
            const result = localGame(
                {playerWords: ["abc", "xyz"]},
                {type: GAME_RESET}
            );
            expect(result.playerWords).to.deep.eq([""]);
        });

        it('should change words to []', () => {
            const result = localGame(
                {words: ["abc", "xyz"]},
                {type: GAME_RESET}
            );
            expect(result.words).to.deep.eq([]);
        });
    });

    describe('action ' + WORDS_FETCH_SUCCESS, () => {
        it('should change words to ones that are provided by action', () => {
            const result = localGame(
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
            const result = localGame(
                {currentTime: 0},
                {type: TICK}
            );
            expect(result.currentTime).to.eq(Date.now());
            clock.restore();
        });
    })
});