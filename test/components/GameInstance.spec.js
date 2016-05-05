import React from "react";
import TestUtils from "react-addons-test-utils";
import GameInstance from "../../es6/components/GameInstance";
import Words from "../../es6/containers/Words";
import Statistics from "../../es6/containers/Statistics";
import HighScore from "../../es6/containers/HighScore";
import StartStopButton from "../../es6/containers/StartStopButton";


describe('GameInstance', () => {

    var buildGameInstance = ((props) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <GameInstance {...props}/>
        );
        return renderer.getRenderOutput();
    });

    function shouldRenderComponents(props, expectedCount, componentTypes) {
        componentTypes.forEach(
            ([cName, cType]) => {
                it('should render ' + expectedCount + ' ' + cName + '(s)', () => {
                        let count = buildGameInstance(props)
                            .props.children
                            .filter(comp => comp.type == cType)
                            .length;
                        expect(count).to.eq(expectedCount);
                    }
                );
            });
    }


    describe('local instance', () => {
        let renderedComponentTypes = [["Words", Words], ["StartStopButton", StartStopButton], ["Statistics", Statistics], ["HighScore", HighScore]];
        shouldRenderComponents({gameType: "local", gameNo:0}, 1, renderedComponentTypes);
    });


    describe('remote instance', () => {
        let renderedComponentTypes = [["Words", Words], ["Statistics", Statistics], ["HighScore", HighScore]];
        shouldRenderComponents({gameType: "remote", gameNo:0}, 1, renderedComponentTypes);
        let notRenderedComponentTypes = [["StartStopButton", StartStopButton]];
        shouldRenderComponents({gameType: "remote", gameNo:0}, 0, notRenderedComponentTypes);
    });

});