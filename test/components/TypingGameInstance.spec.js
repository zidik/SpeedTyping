import React from "react";
import TestUtils from "react-addons-test-utils";
import TypingGameInstance from "../../es6/components/TypingGameInstance";
import Words from "../../es6/containers/Words";
import InputField from "../../es6/containers/InputField";
import Statistics from "../../es6/containers/Statistics";
import HighScore from "../../es6/containers/HighScore";
import StartStopButton from "../../es6/containers/StartStopButton";


describe('TypingGameInstance', () => {

    var buildTypingGameInstance = ((props) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <TypingGameInstance {...props}/>
        );
        return renderer.getRenderOutput();
    });

    function shouldRenderComponents(props, expectedCount, componentTypes) {
        componentTypes.forEach(
            ([cName, cType]) => {
                it('should render ' + expectedCount + ' ' + cName + '(s)', () => {
                        let count = buildTypingGameInstance(props)
                            .props.children
                            .filter(comp => comp.type == cType)
                            .length;
                        expect(count).to.eq(expectedCount);
                    }
                );
            });
    }


    describe('local instance', () => {
        let renderedComponentTypes = [["Words", Words], ["InputField", InputField], ["StartStopButton", StartStopButton], ["Statistics", Statistics], ["HighScore", HighScore]];
        shouldRenderComponents({isLocal: true}, 1, renderedComponentTypes);
    });


    describe('remote instance', () => {
        let renderedComponentTypes = [["Words", Words], ["Statistics", Statistics], ["HighScore", HighScore]];
        shouldRenderComponents({isLocal: false}, 1, renderedComponentTypes);
        let notRenderedComponentTypes = [["InputField", InputField], ["StartStopButton", StartStopButton]];
        shouldRenderComponents({isLocal: false}, 0, notRenderedComponentTypes);
    });

});