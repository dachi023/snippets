import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from './containers/App'
import Signup from './containers/Signup'
import Edit from './containers/Edit'
import 'primer'
import 'octicons'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="signup" component={Signup} />
      <Route path="edit/:id" component={Edit} />
    </Route>
  </Router>
), document.getElementById('root'))
