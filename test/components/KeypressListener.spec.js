import React from "react";
import TestUtils from "react-addons-test-utils";
import KeypressListener from "../../es6/components/KeypressListener";

describe('KeypressListener', () => {
    var buildKeypressListener = ((handleKeypress) => {
        return TestUtils.renderIntoDocument(
            <KeypressListener handleKeyPress={handleKeypress}/>
        );
    });

    it('calls handleKeyPress with the key string when keypress triggered on window', () => {
        let handleKeypress = sinon.stub();
        buildKeypressListener(handleKeypress);

        var event = new window.KeyboardEvent('keypress', {keyCode: 69});
        window.dispatchEvent(event);
        expect(handleKeypress).to.have.been.calledWith("E")
    });

});