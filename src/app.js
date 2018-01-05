import React, { Component } from 'react'
import { render } from 'react-dom'

import P from './components/P'

export default class App extends Component {
  render () {
    return (
      <div>
        Hello from react
        <P content='hi' />
        <P />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
