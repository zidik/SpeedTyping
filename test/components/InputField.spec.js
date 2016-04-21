'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import Typing from "../../es6/components/InputField";

describe('Typing', () => {

    class Wrapper extends React.Component {
        render() {
            return <div>{this.props.children}</div>
        }
    }

    var buildTypingContainer = ((handleChange, value) => {
        return TestUtils.renderIntoDocument(
            <Wrapper>
                <Typing handleChange={handleChange} value={value}/>
            </Wrapper>
        );
    });

    it('should render the current value', () => {
        let handleChange = sinon.stub;
        let typing = buildTypingContainer(handleChange, "hello");
        let textInput = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');
        expect(textInput.value).to.eq("hello");
    });

    it('should call handleChange prop on change (with current value)', () => {
        let onUserInput = sinon.stub();
        let typing = buildTypingContainer(onUserInput, "hello");
        let textInput = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');

        TestUtils.Simulate.change(textInput);

        expect(onUserInput).to.have.been.calledWith("hello");
    });
});