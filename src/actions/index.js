import * as actType from '../constants/actionTypes'

export function resetResults() {
    return { type: actType.RESET_RESULTS }
}

export function pushResults(results) {
    return { type: actType.PUSH_RESULTS, results }
}