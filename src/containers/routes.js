import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Container alias is defined in webpack.config.js
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
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default Routes
