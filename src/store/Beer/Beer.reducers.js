import { Map, List } from 'immutable'
import { BEER_FETCHING, BEER_FETCHED, BEER_FAILED } from './Beer.constants'

const initState = Map({
  error: false,
  meta: Map({
    fetching: false,
    message: null
  }),
  payload: List()
})

const BeerState = (state = initState, action) => {
  switch (action.type) {
    case BEER_FETCHING:
      return state.merge({
        fetching: action.fetching,
        message: action.message
      })
    case BEER_FETCHED:
      return state.merge({
        data: action.payload,
        fetching: action.fetching,
        message: null
      })
    case BEER_FAILED:
      return state.merge({
        fetching: action.fetching,
        error: action.error,
        message: action.payload
      })
    default:
      return state
  }
}

export default BeerState
