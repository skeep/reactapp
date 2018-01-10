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
        meta: {
          fetching: action.meta.fetching,
          message: action.meta.message
        }
      })
    case BEER_FETCHED:
      return state.merge({
        meta: {
          fetching: action.meta.fetching,
          message: null
        },
        payload: action.payload
      })
    case BEER_FAILED:
      return state.merge({
        meta: {
          fetching: action.meta.fetching,
          message: action.payload
        },
        error: action.error
      })
    default:
      return state
  }
}

export default BeerState
