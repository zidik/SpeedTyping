"use strict";

export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInput = (text) => ({
    type: CHANGE_INPUT,
    text
});