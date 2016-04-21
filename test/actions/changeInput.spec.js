'use strict';
import { changeInput } from '../../es6/actions'

describe('changeInput', () => {
    it('should create CHANGE_INPUT action', () => {
        expect(changeInput('Use Redux')).to.deep.eq({
            type: 'CHANGE_INPUT',
            text: "Use Redux"
        })
    })
});