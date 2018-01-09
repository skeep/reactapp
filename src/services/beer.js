const URL = 'https://api.punkapi.com/v2/beers'

async function fetchBeer () {
  let response = await fetch(`${URL}/42`)
  const data = await response.json()
  return data
}

export default {
  fetchBeer
}
