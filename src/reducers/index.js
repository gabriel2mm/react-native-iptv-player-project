import {combineReducers} from 'redux'
import userReducer from './userReducer'
import vodsReducer from './vodsReducer'
const reducers = combineReducers({
    userReducer,
    vodsReducer
})

export default reducers;