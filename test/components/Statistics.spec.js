import React from "react";
import TestUtils from "react-dom/test-utils";
import Statistics from "../../es6/components/Statistics";

describe('Statistics', () => {

    var buildStats = ((accuracy, wordsPerMinute, time) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Statistics
                accuracy={accuracy}
                wordsPerMinute={wordsPerMinute}
                time={time}
            />
        );
        return renderer.getRenderOutput();
    });

    it('should display the accuracy, wpm and time', () => {
        let stats = buildStats("100", "60", "1.3");
        let wordsPerMinute = stats.props.children[2];
        let accuracy = stats.props.children[4];
        let time = stats.props.children[6];
        expect(wordsPerMinute.props.children).to.eq("60");
        expect(accuracy.props.children).to.deep.eq(["100", "%"]);
        expect(time.props.children).to.deep.eq(["1.3", "s"]);
    });
});