"use strict";
import speedTyperReducer from "../../es6/reducers";
import {CHANGE_INPUT, START, STOP, TICK} from "../../es6/actions";


describe('speedTyperReducer', () => {
    describe('action ' + CHANGE_INPUT, () => {
        it('should change current playerWord', () => {
            const result = speedTyperReducer({playerWords: ["previous", ""]}, {
                type: CHANGE_INPUT,
                text: "Skyrim"
            });
            expect(result.playerWords).to.deep.eq(["previous", "Skyrim"]);
        });

        it('should advance to next word when input with space is given', () => {
            const result = speedTyperReducer({playerWords: [""]}, {
                type: CHANGE_INPUT,
                text: "Skyrim "
            });
            expect(result.playerWords).to.deep.eq(["Skyrim", ""])
        });
    });

    describe('action ' + START, () => {
        it('should change hasStarted to true', () => {
            const result = speedTyperReducer(
                {hasStarted:false},
                {type: START}
            );
            expect(result.hasStarted).to.eq(true);
        });

        it('should initialize times with current timestamp', () => {
            let clock = sinon.useFakeTimers(new Date(2011, 9, 1).getTime());
            const result = speedTyperReducer(
                {startTime:0, currentTime:0},
                {type: START}
            );
            expect(result.startTime).to.eq(Date.now());
            expect(result.currentTime).to.eq(Date.now());
            clock.restore();
        });

        it('should change playerWords to [""]', () => {
            const result = speedTyperReducer(
                {playerWords:["abc","xyz"]},
                {type: START}
            );
            expect(result.playerWords).to.deep.eq([""]);
        });

        it('should change words to ones that are provided by action', () => {
            const result = speedTyperReducer(
                {words:["xyz","xyz","xyz"]},
                {
                    type: START,
                    words: ["abc","dfg"]
                }
            );
            expect(result.words).to.deep.eq(["abc","dfg"]);
        });

    });
    describe('action ' + STOP, () => {
        
        it('should change hasStarted to false and change high scores when they are lower than previous', () => {
            const result = speedTyperReducer(
                {
                    hasStarted:true,
                    highest_wordsPerMinute:0,
                    highest_accuracy:0,
                    words:["A"],
                    playerWords:["A",""],
                    startTime:Date.now()-10
                },
                {type: STOP}
            );
            expect(result.hasStarted).to.eq(false);
            expect(result.highest_accuracy).to.eq(100);
            expect(result.highest_wordsPerMinute).to.be.gt(0);
        });
        
    });
    
    describe('action ' + TICK, () => {
        it('should set currentTime to current timestamp', () => {
            let clock = sinon.useFakeTimers(new Date(2011, 9, 1).getTime());
            const result = speedTyperReducer(
                {currentTime:0},
                {type: TICK}
            );
            expect(result.currentTime).to.eq(Date.now());
            clock.restore();
        });
    })
});