'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import Letter from "../../es6/components/Letter";

describe('Letter', () => {

    class Wrapper extends React.Component {
        render() {
            return <div>{this.props.children}</div>
        }
    }

    var buildLetter = ((status, letter) => {
        let dom = TestUtils.renderIntoDocument(
            <Wrapper>
                <Letter status={status} letter={letter}/>
            </Wrapper>
        );

        return TestUtils.findRenderedDOMComponentWithClass(dom, "letter")
    });

    it('should set content to character and class to "letter"', () => {
        let letter = buildLetter("inactive", "L");
        expect(letter.className).to.contain("letter");
        expect(letter.textContent).to.eq("L");
    });

    let statuses = ["correct", "incorrect"];
    statuses.forEach(function (status) {
        describe('with status ' + status, () => {
            let letter = buildLetter(status, "L");
            it('should add class "' + status + '"', () => {
                expect(letter.className).to.contain("letter");
                expect(letter.className).to.contain(status);
            })
        });
    })
});