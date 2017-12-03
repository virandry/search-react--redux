import { combineReducers } from 'redux'
import { RESET_RESULTS, PUSH_RESULTS, TOGGLE_AUTOCOMPLETE } from '../constants/actionTypes'

const initialState = {
    results: []
}

function searchApp(state = initialState, action) {
    switch (action.type) {
        case RESET_RESULTS:
            return Object.assign({}, state, {
                results: []
            })
        case PUSH_RESULTS:
            return Object.assign({}, state, {
                results: action.results.slice()
            })
        default:
            return state
    }
}

const initialState2 = {
    toggleDDL: false
}


function searchBar(state = initialState2, action) {
    switch (action.type) {
        case TOGGLE_AUTOCOMPLETE:
            return Object.assign({}, state, {
                toggleDDL: action.arg
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    searchApp,
    searchBar
});

export default rootReducer
