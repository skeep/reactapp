import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Home, About, NotFound } from 'Containers'
import AppState from './containers/reducers'

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/404'>404</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

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
