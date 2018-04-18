import React from "react";
import TestUtils from "react-addons-test-utils";
import Button from "../../es6/components/Button";
import {wrapAndFindByTag} from "../Wrapper";

describe('Button', () => {
    let onClick;
    let button;

    describe('enabled', () => {
        beforeEach(() => {
            onClick = sinon.stub();
            button = wrapAndFindByTag(
                <Button click={onClick} value="start the game!" disabled={false}/>,
                'button'
            );
        });

        it('should render the current value', () => {
            expect(button.innerHTML).to.contain("start the game!");
        });

        it('should call onClick prop on click', () => {
            TestUtils.Simulate.click(button);
            expect(onClick).to.have.been.calledOnce;
        });

        it('should not call handleChange prop without click', () => {
            expect(onClick).to.not.have.been.called;
        });

        it('should render the button enabled', () => {
            expect(button.disabled).to.eq(false);
        });
    });
    describe('disabled', () => {
        beforeEach(() => {
            onClick = sinon.stub();
            button = wrapAndFindByTag(
                <Button click={onClick} value="start" disabled={true}/>,
                'button'
            );
        });

        it('should render the button disabled', () => {
            expect(button.disabled).to.eq(true);
        });

    });

});