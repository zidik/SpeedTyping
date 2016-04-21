import speedTyperReducer from '../../es6/reducers'
import {CHANGE_INPUT} from '../../es6/actions'

describe('speedTyperReducer', () => {
    describe('action '+ CHANGE_INPUT, () => {
        it('should change current playerWord', () => {
            const result = speedTyperReducer( {playerWords: ["previous", ""]},{
                type: CHANGE_INPUT,
                text:  "Skyrim"
            });
            expect(result.playerWords).to.deep.eq(["previous", "Skyrim"]);
        });

        it('should advance to next word when input with space is given', () => {
            const result = speedTyperReducer({playerWords: [""]}, {
                type: CHANGE_INPUT,
                text:  "Skyrim "
            });
            expect(result.playerWords).to.deep.eq(["Skyrim",""])
        });
    });
});