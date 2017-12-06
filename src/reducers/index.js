import { combineReducers } from 'redux'
import searchApp from './searchApp'
import searchBar from './searchBar'

const rootReducer = combineReducers({
    searchApp,
    searchBar
});

export default rootReducer
