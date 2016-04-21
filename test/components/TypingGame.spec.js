'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import TypingGame from "../../es6/components/TypingGame";
import Words from "../../es6/containers/Words";
import InputField from "../../es6/containers/InputField";
import Statistics from "../../es6/containers/Statistics";

describe('TypingGame', () => {

    var buildSpeedTyper = (() => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <TypingGame />
        );
        return renderer.getRenderOutput();
    });

    let componentTypes = [["InputField", InputField], ["Statistics", Statistics], ["Words", Words]];

    componentTypes.forEach(function ([cName, cType]) {
        it('should render ' + cName, () => {
            let count = buildSpeedTyper()
                .props.children
                .filter(comp => comp.type == cType)
                .length;
            expect(count).to.eq(1);
        });
    });
});