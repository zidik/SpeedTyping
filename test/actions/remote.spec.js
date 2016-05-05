import {receivedRemoteState, REMOTE_STATE_RECEIVED} from "../../es6/actions/remote";
import {shouldCreateAction} from "./helpers";


describe('keyPressed action', () => {
    shouldCreateAction(receivedRemoteState, REMOTE_STATE_RECEIVED);

    it('should add words to action', () => {
        expect(receivedRemoteState({a: ["a", "b"]}).remoteState).to.deep.eq({a: ["a", "b"]});
    });

});
