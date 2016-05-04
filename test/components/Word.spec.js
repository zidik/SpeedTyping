import React from "react";
import TestUtils from "react-addons-test-utils";
import Word from "../../es6/components/Word";

describe('Word', () => {
    const renderWord = (word, playerWord, status) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Word word={word} playerWord={playerWord} status={status}/>
        );
        return renderer.getRenderOutput();
    };

    it('should have classname "word"', () => {
        let renderedWord = renderWord("some_word", "some_input", "correct");
        expect(renderedWord.props.className).to.contain("word")
    });

    it('should render Letter with correct status prop', () => {
        let word = "abc";
        let playerWord = "ac";
        let status = "current";

        let renderedWord = renderWord(word, playerWord, status);
        let renderedLetters = renderedWord.props.children;

        let correctLetter = renderedLetters[0];
        expect(correctLetter.props.status).to.eq("correct");

        let incorrectLetter = renderedLetters[1];
        expect(incorrectLetter.props.status).to.eq("incorrect");

        let untypedLetter = renderedLetters[2];
        expect(untypedLetter.props.status).to.eq("inactive");
    });

    it('should render Letter with correct letter prop', () => {
        let word = "abc";
        let playerWord = "ac";
        let status = "current";

        let renderedWord = renderWord(word, playerWord, status);
        let renderedLetters = renderedWord.props.children;

        let correctLetter = renderedLetters[0];
        expect(correctLetter.props.letter).to.eq("a");

        let incorrectLetter = renderedLetters[1];
        expect(incorrectLetter.props.letter).to.eq("b");

        let untypedLetter = renderedLetters[2];
        expect(untypedLetter.props.letter).to.eq("c");
    });

    let statuses = ["correct", "incorrect", "current"];
    statuses.forEach(function (status) {
        describe('with status ' + status, () => {
            let renderedWord = renderWord("some_word", "some_input", status);
            it('should add class "' + status + '"', () => {
                expect(renderedWord.props.className).to.contain("word");
                expect(renderedWord.props.className).to.contain(status);
            })
        });
    });


});