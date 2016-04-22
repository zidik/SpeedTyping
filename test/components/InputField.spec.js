'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import InputField from "../../es6/components/InputField";

describe('InputField', () => {

    class Wrapper extends React.Component {
        render() {
            return <div>{this.props.children}</div>
        }
    }

    var buildInputField = ((handleChange, value, disabled) => {
        return TestUtils.renderIntoDocument(
            <Wrapper>
                <InputField
                    handleChange={handleChange}
                    value={value}
                    disabled={disabled}
                />
            </Wrapper>
        );
    });

    it('should render the current value', () => {
        let handleChange = sinon.stub;
        let InputField = buildInputField(handleChange, "hello", false);
        let textInput = TestUtils.findRenderedDOMComponentWithTag(InputField, 'input');
        expect(textInput.value).to.eq("hello");
    });

    it('should call handleChange prop on change (with current value)', () => {
        let onUserInput = sinon.stub();
        let InputField = buildInputField(onUserInput, "hello", false);
        let textInput = TestUtils.findRenderedDOMComponentWithTag(InputField, 'input');

        TestUtils.Simulate.change(textInput);

        expect(onUserInput).to.have.been.calledWith("hello");
    });

});