import { combineReducers } from 'redux'
import HomeState from './Home/Home.reducers'
import AboutState from './About/About.reducers'
import NotFoundState from './NotFound/NotFound.reducers'

const AppState = combineReducers({
  HomeState,
  AboutState,
  NotFoundState
})

export default AppState
