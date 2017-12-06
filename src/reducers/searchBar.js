import {TOGGLE_AUTOCOMPLETE, RECEIVE_AUTOCOMPLETE} from '../constants/actionTypes'

const initialState = {
    toggleDDL: false,
    receivedBooks: []
}

function searchBar(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_AUTOCOMPLETE:
            return Object.assign({}, state, {toggleDDL: action.arg})
        case RECEIVE_AUTOCOMPLETE:
            return Object.assign({}, state, {
                receivedBooks: action
                    .json
                    .slice()
            })
        default:
            return state
    }
}

export default searchBar