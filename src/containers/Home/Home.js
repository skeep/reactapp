import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import Actions from 'Actions'
import Selectors from 'Selectors'

class Home extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
  }

  componentDidMount () {
    this.props.dispatch(Actions.Beers.fetchBeer())
  }

  render () {
    const _beers = this.props.beers.payload
    const name = _beers && _beers.length ? _beers[0].name : ''
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
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
