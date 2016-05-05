import localGame from "../../es6/reducers/localGame";
import {GAME_START, GAME_STOP, GAME_RESET} from "../../es6/actions/localGame";
import {WORDS_FETCH_SUCCESS} from "../../es6/actions/fetching";
import {TICK} from "../../es6/actions/ticking";
import {GLOBAL_KEY_PRESSED} from '../../es6/actions/keypress';



describe('localGame', () => {
    describe('action ' + GLOBAL_KEY_PRESSED, () => {     
        describe("when game has started", () => {
            const initialState = {
                playerWords: ["previous"],
                gameStarted: true
            }
            
            it('should change current playerWord', () => {
                const result = localGame(initialState, {
                    type: GLOBAL_KEY_PRESSED,
                    key: "X"
                });
                expect(initialState.gameStarted).to.eq(true);
                expect(result.playerWords).to.deep.eq(["previousX"]);
            });

            it('should advance to next word when space is hit', () => {
                const result = localGame(initialState, {
                    type: GLOBAL_KEY_PRESSED,
                    key: " "
                });
                expect(result.playerWords).to.deep.eq(["previous", ""])
            });  
        });
        describe("when game has NOT started", () => {
            const initialState = {
                playerWords: ["userword-ishere"],
                gameStarted: false
            }
            
            it('should NOT change current playerWord', () => {
                const result = localGame(initialState, {
                    type: GLOBAL_KEY_PRESSED,
                    key: "a"
                });
                expect(result.playerWords).to.deep.eq(["userword-ishere"]);
            });

            it('should NOT advance to next word when space is hit', () => {
                const result = localGame(initialState, {
                    type: GLOBAL_KEY_PRESSED,
                    key: " "
                });
                expect(result.playerWords).to.deep.eq(["userword-ishere"])
            });  
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
        const initialState = {gameStarted: true, pastGames:[]};
        const game = {gameinfo:"ishere"}
        const action = {type: GAME_STOP, game}
        
        it('should change gameStarted to false', () => {
            const result = localGame(initialState,action);
            expect(result.gameStarted).to.eq(false);
        });
        
        it('should add supplied game to past games', () => {
            const result = localGame(initialState,action);
            expect(result.pastGames).to.contain(game);
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