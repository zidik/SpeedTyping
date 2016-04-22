'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import Button from "../../es6/components/Button";

describe('Button', () => {

    class Wrapper extends React.Component {
        render() {
            return <div>{this.props.children}</div>
        }
    }

    var buildButton = ((onclick, value) => {
        return TestUtils.renderIntoDocument(
            <Wrapper>
                <Button click={onclick} value={value}/>
            </Wrapper>
        );
    });

    it('should render the current value', () => {
        let onClick = sinon.stub;
        let button = buildButton(onClick, "start");
        let buttonComp = TestUtils.findRenderedDOMComponentWithTag(button, 'input');
        expect(buttonComp.value).to.eq("start");
    });

    it('should call handleChange prop on change (with current value)', () => {
        let onClick = sinon.stub();
        let button = buildButton(onClick, "start");
        let buttonComp = TestUtils.findRenderedDOMComponentWithTag(button, 'input');

        TestUtils.Simulate.click(buttonComp);

        expect(onClick).to.have.been.calledWith();
    });
});