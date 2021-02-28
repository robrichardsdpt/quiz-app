import {combineReducers} from 'redux'
import numAnsCorrectReducer from './numAnsCorrect'

const rootReducer = combineReducers({
  numAnsCorrect: numAnsCorrectReducer
})

export default rootReducer