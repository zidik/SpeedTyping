'use strict';
import {TICK, tick} from "../../es6/actions/ticking";
import {shouldCreateAction} from "./helpers";

describe('ticking actions', () => {
    describe('tick()', () => {
        shouldCreateAction(tick, TICK);

        it('should add time to action', () => {
            expect(tick(123).time).to.eq(123);
        });

    });
});