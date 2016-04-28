'use strict';
import {changeInput, startGame, GAME_START, INPUT_CHANGE} from "../../es6/actions";

const shouldCreateAction = (creator, action, ...args) =>
    it('should create ' + action + ' action', () => {
        expect(creator(...args).type).to.eq(action)
    });

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