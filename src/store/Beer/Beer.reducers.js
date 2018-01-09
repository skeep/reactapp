import { Map } from 'immutable'
import { BEER_FETCHED } from './Beer.constants'

const initState = Map()

const BeerState = (state = initState, action) => {
  switch (action.type) {
    case BEER_FETCHED:
      return state.merge({
        data: action.data
      })
    default:
      return state
  }
}

export default BeerState
