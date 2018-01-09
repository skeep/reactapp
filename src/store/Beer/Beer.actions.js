import beerService from '../../services/beer'
import { BEER_FETCHED, BEER_FAILED } from './Beer.constants'

const fetchBeer = () => {
  return async (dispatch, getState) => {
    try {
      let beer = await beerService.fetchBeer()
      dispatch({
        type: BEER_FETCHED,
        payload: beer,
        error: false
      })
    } catch (error) {
      dispatch({
        type: BEER_FAILED,
        payload: error,
        error: true
      })
    }
  }
}

export default {
  fetchBeer
}
