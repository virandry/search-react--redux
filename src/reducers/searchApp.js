import {RESET_RESULTS, PUSH_RESULTS} from '../constants/actionTypes'

const initialState = {
    results: []
}

function searchApp(state = initialState, action) {
    switch (action.type) {
        case RESET_RESULTS:
            return Object.assign({}, state, {results: []})
        case PUSH_RESULTS:
            return Object.assign({}, state, {
                results: action
                    .results
                    .slice()
            })
        default:
            return state
    }
}

export default searchApp