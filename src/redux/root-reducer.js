import {combineReducers} from 'redux'
import numAnsCorrectReducer from './numAnsCorrect'
import statsReducer from './stats'

const rootReducer = combineReducers({
  numAnsCorrect: numAnsCorrectReducer,
  stats: statsReducer
})

export default rootReducer