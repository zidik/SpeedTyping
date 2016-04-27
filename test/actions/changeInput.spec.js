'use strict';
import {changeInput} from "../../es6/actions";

describe('changeInput', () => {
    it('should create INPUT_CHANGE action', () => {
        expect(changeInput('Use Redux')).to.deep.eq({
            type: 'INPUT_CHANGE',
            text: "Use Redux"
        })
    })
});