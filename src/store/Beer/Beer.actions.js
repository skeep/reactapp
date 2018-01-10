import beerService from '../../services/beer'
import { BEER_FETCHING, BEER_FETCHED, BEER_FAILED } from './Beer.constants'

const fetchBeer = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: BEER_FETCHING,
      meta: {
        fetching: true,
        message: 'Fetching data ...'
      }
    })
    try {
      let beer = await beerService.fetchBeer()
      dispatch({
        type: BEER_FETCHED,
        payload: beer,
        meta: {fetching: false, message: null}
      })
    } catch (error) {
      dispatch({
        type: BEER_FAILED,
        payload: error,
        error: true,
        meta: {fetching: false, message: null}
      })
    }
  }
}

export default {
  fetchBeer
}
