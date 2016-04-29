'use strict';
import {
    receiveWords,
    requestWords,
    WORDS_FETCH_REQUEST,
    WORDS_FETCH_SUCCESS
} from "../../es6/actions/fetching";

import {shouldCreateAction} from "./helpers"

describe('fetching actions', () => {
    describe('requestWords', () => {
        shouldCreateAction(requestWords, WORDS_FETCH_REQUEST);
    });
    describe('receiveWords', () => {
        shouldCreateAction(receiveWords, WORDS_FETCH_SUCCESS);

        it('should add words to action', () => {
            expect(receiveWords(["a", "b"]).words).to.deep.eq(["a", "b"]);
        });

    });
});