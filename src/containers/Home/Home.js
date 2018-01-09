import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from 'Actions'
import Selectors from 'Selectors'

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(Actions.Beers.fetchBeer())
  }

  render () {
    const name = this.props.beers.data ? this.props.beers.data[0].name : ''
    return (
      <div>
        <h2>Home : {name}</h2>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    beers: Selectors.Beers.getBeers(state)
  }
}

export default connect(mapStateToProps)(Home)
