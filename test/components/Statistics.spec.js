'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import Statistics from "../../es6/components/Statistics";

describe('Statistics', () => {

    var buildStats = ((accuracy, wordsPerMinute) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Statistics accuracy={accuracy} wordsPerMinute={wordsPerMinute}/>
        );
        return renderer.getRenderOutput();
    });

    it('should display the accuracy and wpm value', () => {
        let stats = buildStats("100", "60");
        let wordsPerMinute = stats.props.children[1];
        let accuracy = stats.props.children[3];
        expect(wordsPerMinute.props.children).to.eq("60");
        expect(accuracy.props.children).to.deep.eq(["100", "%"]);
    });
});