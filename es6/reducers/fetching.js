import * as act from "../actions";

const initialState = {
    isFetchingWords: false
};

export default function fetchingReducer(state = initialState, action){
    switch (action.type){
        case act.WORDS_FETCH_REQUEST:
            return {...state, isFetchingWords:true};
        case act.WORDS_FETCH_SUCCESS:
            return {...state, isFetchingWords:false};
        default:
            return state
    }
};