import { combineReducers } from 'redux-immutable'
import Beer from './Beer/Beer.reducers'

const rootReducer = combineReducers({
  Beer
})

export default rootReducer
