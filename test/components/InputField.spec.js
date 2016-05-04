import React from "react";
import TestUtils from "react-addons-test-utils";
import InputField from "../../es6/components/InputField";
import {wrapAndFindByTag} from "../Wrapper";

describe('InputField', () => {
    let handleChange;
    let inputField;

    describe('enabled', () => {
        beforeEach(() => {
            handleChange = sinon.stub();
            inputField = wrapAndFindByTag(
                <InputField
                    handleChange={handleChange}
                    value="hello"
                    disabled={false}
                />,
                'input'
            );
        });

        it('should render the current value', () => {
            expect(inputField.value).to.eq("hello");
        });

        it('should call handleChange prop on change (with current value)', () => {
            TestUtils.Simulate.change(inputField);
            expect(handleChange).to.have.been.calledWith("hello");
        });

        it('should render the button enabled', () => {
            expect(inputField.disabled).to.eq(false);
        });

    });
    describe('disabled', () => {
        beforeEach(() => {
            handleChange = sinon.stub();
            inputField = wrapAndFindByTag(
                <InputField
                    handleChange={handleChange}
                    value="hello"
                    disabled={true}
                />,
                'input'
            )
        });

        it('should render the button disabled', () => {
            expect(inputField.disabled).to.eq(true);
        });

    });

});