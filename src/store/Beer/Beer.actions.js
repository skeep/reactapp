import beerService from '../../services/beer'
import { BEER_FETCHED } from './Beer.constants'

const fetchBeer = () => {
  return async (dispatch, getState) => {
    try {
      let beer = await beerService.fetchBeer()
      dispatch({
        type: BEER_FETCHED,
        data: beer
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  fetchBeer
}
