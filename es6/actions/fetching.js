export const WORDS_FETCH_REQUEST = 'WORDS_FETCH_REQUEST';
export const WORDS_FETCH_SUCCESS = 'WORDS_FETCH_SUCCESS';

export function requestWords() {
    return {type: WORDS_FETCH_REQUEST}
}

export function receiveWords(words) {
    return {
        type: WORDS_FETCH_SUCCESS,
        words
    }
}