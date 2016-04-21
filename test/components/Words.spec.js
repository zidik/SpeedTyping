'use strict';

import React from "react";
import TestUtils from "react-addons-test-utils";
import Words from "../../es6/components/Words";

describe('Words', () => {

    function renderWords(words, playerWords, active) {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Words words={words} playerWords={playerWords} active={active}/>
        );
        return renderer.getRenderOutput();
    }

    it('should render Word with correct status prop', () => {
        let words = ["a", "b", "abc", "d"];
        let playerWords = ["a", "c", "ac"];
        let active = 2;

        var renderedWords = renderWords(words, playerWords, active);
        let wordComponents = renderedWords.props.children;

        let correctWord = wordComponents[0];
        expect(correctWord.props.status).to.eq("correct");

        let incorrectWord = wordComponents[1];
        expect(incorrectWord.props.status).to.eq("incorrect");

        let currentWord = wordComponents[2];
        expect(currentWord.props.status).to.eq("current");

        let untypedWord = wordComponents[3];
        expect(untypedWord.props.status).to.eq("inactive");
    });

    it('should render Word with correct word prop', () => {
        let words = ["a", "target_word", "abc", "d"];
        let playerWords = ["a", "c", "ac"];
        let active = 2;

        var renderedWords = renderWords(words, playerWords, active);

        let wordComponents = renderedWords.props.children;
        let correctWord = wordComponents[1];
        expect(correctWord.props.word).to.eq("target_word");
    });

    it('should render Word with correct playerWord prop', () => {
        let words = ["a", "b", "abc", "d"];
        let playerWords = ["a", "target_word", "ac"];
        let active = 2;

        var renderedWords = renderWords(words, playerWords, active);

        let wordComponents = renderedWords.props.children;
        let correctWord = wordComponents[1];
        expect(correctWord.props.playerWord).to.eq("target_word");
    });

});