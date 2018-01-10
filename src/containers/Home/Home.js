import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import Actions from 'Actions'
import Selectors from 'Selectors'

import { LiveSpan } from 'Components'

class Home extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
  }

  componentDidMount () {
    this.props.dispatch(Actions.Beers.fetchBeer())
  }

  render () {
    const _beers = this.props.beers
    const _name = _beers.payload && _beers.payload.length ? _beers.payload[0].name : null
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <h2>
          Home :
          <LiveSpan
            payload={_name}
            error={_beers.error}
            fetching={_beers.meta.fetching}
            message={_beers.meta.message}
          />
        </h2>
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
