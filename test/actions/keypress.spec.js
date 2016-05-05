import {keyPressed, GLOBAL_KEY_PRESSED} from "../../es6/actions/keypress";
import {shouldCreateAction} from "./helpers";


describe('keyPressed action', () => {
    shouldCreateAction(keyPressed, GLOBAL_KEY_PRESSED);

    it('should add words to action', () => {
        expect(keyPressed("a").key).to.eq("a");
    });

});
