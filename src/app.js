import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AppState from './containers/reducers'
import Routes from './containers/routes'

const store = createStore(
  AppState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class App extends Component {
  render () {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
