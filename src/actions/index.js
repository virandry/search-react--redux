import * as actType from '../constants/actionTypes'

export function resetResults() {
    return { type: actType.RESET_RESULTS }
}

export function pushResults(results) {
    return { type: actType.PUSH_RESULTS, results }
}

export function toggleAutocomplete(arg) {
    return { type: actType.TOGGLE_AUTOCOMPLETE, arg }
}

export function receiveAutocomplete(json) {
    return { type: actType.RECEIVE_AUTOCOMPLETE, json }
}

export const fetchAutocomplete = searchTerm => dispatch => {
    console.log("searching... " + searchTerm);
    return fetch('http://localhost:1110/books?author=' + searchTerm)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(typeof json.error === 'undefined')
            if (typeof json.error === 'undefined') {
                console.log(json)
                dispatch(toggleAutocomplete(true))
                dispatch(receiveAutocomplete(json))
            } else {
                console.log('error')
                dispatch(toggleAutocomplete(false))
                dispatch(receiveAutocomplete([]))
            }
        })

}

