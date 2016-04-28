import {
    WORDS_FETCH_REQUEST,
    WORDS_FETCH_SUCCESS
} from "../actions";

const initialState = {
    isFetchingWords: false
};

export default function fetchingReducer(state = initialState, action) {
    switch (action.type) {
        case WORDS_FETCH_REQUEST:
            return {...state, isFetchingWords: true};
        case WORDS_FETCH_SUCCESS:
            return {...state, isFetchingWords: false};
        default:
            return state
    }
};