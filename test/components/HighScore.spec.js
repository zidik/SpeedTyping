'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import HighScore from "../../es6/components/HighScore";

describe('HighScore', () => {

    var buildStats = ((accuracy, wordsPerMinute) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <HighScore
                accuracy = {accuracy}
                wordsPerMinute = {wordsPerMinute}
            />
        );
        return renderer.getRenderOutput();
    });

    it('should display the best accuracy and wpm', () => {
        let stats = buildStats("100", "60");
        let wordsPerMinute = stats.props.children[2];
        let accuracy = stats.props.children[4];
        expect(wordsPerMinute.props.children).to.eq("60");
        expect(accuracy.props.children).to.deep.eq(["100", "%"]);
    });
});