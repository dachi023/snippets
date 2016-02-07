import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './containers/App'
import Signup from './containers/Signup'
import New from './containers/New'
import Edit from './containers/Edit'
import 'primer'
import 'octicons'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Signup} />
      <Route path="signup" component={Signup} />
      <Route path="new" component={New} />
      <Route path=":id/edit" component={Edit} />
    </Route>
  </Router>
), document.getElementById('root'))
