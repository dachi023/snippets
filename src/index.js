import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './containers/App'
import Signup from './containers/Signup'
import List from './containers/List'
import New from './containers/New'
import Edit from './containers/Edit'

import 'primer'
import 'octicons'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Signup} />
      <Route path="signup" component={Signup} />
      <Route path="items" component={List} />
      <Route path="items/:id" component=""/>
      <Route path="items/:id/edit" component={Edit} />
      <Route path="new" component={New} />
    </Route>
  </Router>
), document.getElementById('root'))
