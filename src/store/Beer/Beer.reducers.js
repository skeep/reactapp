import { Map } from 'immutable'
import { BEER_FETCHED, BEER_FAILED } from './Beer.constants'

const initState = Map()

const BeerState = (state = initState, action) => {
  switch (action.type) {
    case BEER_FETCHED:
      return state.merge({
        data: action.payload,
        error: false
      })
    case BEER_FAILED:
      return state.merge({
        error: true,
        message: action.error
      })
    default:
      return state
  }
}

export default BeerState
