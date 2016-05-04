import localGame from "../../es6/reducers/localGame";
import {GAME_START, GAME_STOP, GAME_RESET} from "../../es6/actions/localGame";
import {WORDS_FETCH_SUCCESS} from "../../es6/actions/fetching";
import {TICK} from "../../es6/actions/ticking";
import {GLOBAL_KEY_PRESSED} from '../../es6/actions/keypress';



describe('localGame', () => {
    describe('action ' + GLOBAL_KEY_PRESSED, () => {
        it('should change current playerWord', () => {
            const result = localGame({playerWords: ["previous", ""]}, {
                type: GLOBAL_KEY_PRESSED,
                key: "a"
            });
            expect(result.playerWords).to.deep.eq(["previous", "a"]);
        });

        it('should advance to next word when space is hit', () => {
            const result = localGame({playerWords: ["Skyrim"]}, {
                type: GLOBAL_KEY_PRESSED,
                key: " "
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
                {
                    type: GAME_START,
                    startTime: 1231513
                }
            );
            expect(result.startTime).to.eq(1231513);
            expect(result.currentTime).to.eq(1231513);
        });
    });
    describe('action ' + GAME_STOP, () => {

        it('should change gameStarted to false', () => {
            const result = localGame(
                {gameStarted: true, highScore: {}},
                {type: GAME_STOP, score: {}}
            );
            expect(result.gameStarted).to.eq(false);
        });

        it('should change change high scores when they are lower than previous', () => {
            const result = localGame(
                {
                    highScore: {
                        wordsPerMinute: 1.4,
                        accuracy: 68
                    }
                },
                {
                    type: GAME_STOP,
                    score: {
                        wordsPerMinute: 2.34,
                        accuracy: 78
                    }
                }
            );
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
                {
                    type: TICK,
                    time: Date.now()
                }
            );
            expect(result.currentTime).to.eq(Date.now());
            clock.restore();
        });
    })
});