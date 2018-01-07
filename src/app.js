import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Home, About, NotFound } from 'Containers'

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
        <Route path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
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

render(<App />, document.getElementById('app'))
